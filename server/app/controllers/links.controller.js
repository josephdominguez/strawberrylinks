const linksModel = require('../models/links.model');

/**
 * Retrieves the original link associated with a short link and increments the click count if needed.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {boolean} [shouldIncrementClick=false] - Whether to increment the click count.
 * @returns {Promise<void>} - A Promise that resolves once the original link is retrieved and handled.
 */
const retrieveOriginalLink = async (req, res, shouldIncrementClick = false) => {
    try {
        // Get short link from request.
        const shortLink = req.params.shortLink || req.query.shortLink;
        if (!shortLink) {
            return res.status(404).json({ error: 'No short link provided' }); 
        }

        // Returns original link and increments click counter if needed.
        const originalLink = await linksModel.getOriginalLink(shortLink);
        if (originalLink) {
            res.json({ originalLink });
            if (shouldIncrementClick) {
                await linksModel.incrementClickCount(shortLink);
            }
        } else {
            res.status(404).json({ error: 'Original link not found' });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createShortLink = async (req, res) => {
    try {
        const { originalLink } = req.query;
        const shortLink = await linksModel.createShortLink(originalLink);
        res.json({ shortLink });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getOriginalLink = async (req, res) => {
    await retrieveOriginalLink(req, res);
};

exports.getOriginalLinkWithClickIncrement = async (req, res) => {
    await retrieveOriginalLink(req, res, (shouldIncrementClick = true));
};
