const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redireactUrl: {
        type: String,
        required: true
    },
    visitHistory: [{ timestamp: { type: Number } }]
}, { timestamp: true });


const URL = new mongoose.model('url', urlSchema);

module.exports = URL;