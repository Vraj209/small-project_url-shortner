const express = require('express')
const { handleCreateShortUrl,handleGetShortId,handleGetAnalyticsShortId } = require('../controllers/url')

const router = express.Router()


router.post('/', handleCreateShortUrl)
router.get('/:shortId',handleGetShortId)
router.get('/analytics/:shortId',handleGetAnalyticsShortId)

module.exports = router;