module.exports = app => {
    const links = require('../controllers/links.controller');

    // Shortens link.
    app.post('/shorten', async (req, res) => {
        try { await links.createShortLink(req, res); } 
        catch(e) { throw(e); }
    });

    // Retrieves original link.
    app.get('/:shortLink', async (req, res) => {
        try{ await links.getOriginalLink(req, res); }
        catch(e) { throw(e); }
    });
}
