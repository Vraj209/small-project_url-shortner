const shortid = require('shortid');
const URL = require("../models/url");

async function handleCreateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ msg: "URL is required" })

    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redireactUrl: body.url,
        visitHistory: []
    })

    return res.json({ id: shortID })
}

async function handleGetShortId(req, res) {
    const shortid = req.params.shortID;
    const entry = await URL.findOneAndUpdate({ shortid }, {
        $push: {
            visitHistory: {
                timestamp: new Date()
            }
        }
    })
    res.redirect(entry.redireactUrl)
}

async function handleGetAnalyticsShortId(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handleCreateShortUrl,
    handleGetShortId,
    handleGetAnalyticsShortId
}