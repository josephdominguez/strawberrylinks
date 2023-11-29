const linksModel = require('../models/links.model');

exports.createShortLink = async (req, res) => {
    try {
        const { originalLink } = req.query;
        const shortLink = await linksModel.createShortLink(originalLink);
        res.json({ shortLink });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getOriginalLink = async (req, res) => {
    const { shortLink } = req.params;
    const originalLink = await linksModel.getOriginalLink(shortLink);
    
    // Redirects user to original link if it exists and increments number of clicks.
    if (originalLink) {
        res.json({ originalLink }); 
        await linksModel.incrementClickCount(shortLink);
    } 
    else { res.status(404).json({ error: 'Shortened link not found' }); }
};
