const db = require('./db');
const { nanoid } = require('nanoid');

const generateShortLink = () => {
    return nanoid(8); // This generates an 8-character unique short link
}  

// Creates newly shortened link.
exports.createShortLink = async (originalLink) => {
    try {
        // Generates a unique short link.
        const shortLink = generateShortLink();

        // Saves the original link and the short link in the database.
        const query = 'INSERT INTO links (original_link, short_link) VALUES ($1, $2) RETURNING link_id';
        const values = [originalLink, shortLink];
        await db.query(query, values);

        return shortLink;
    } catch (e) { throw e; }
};

// Retrieves original link.
exports.getOriginalLink = async (shortLink) => {
    try {
        // Looks up the original link associated with the provided short link in the database.
        const query = 'SELECT original_link FROM links WHERE short_link = $1';
        const values = [shortLink];
        const result = await db.query(query, values);

        // Returns original link if found.
        if (result.length == 0) { return null; }
        return result[0].original_link;
    } catch (e) { throw e; }
};

// Increments clicks count by one for the provided short link.
exports.incrementClickCount = async (shortLink) => {
    try {
        const query = 'UPDATE links SET clicks = clicks + 1 WHERE short_link = $1';
        const values = [shortLink];
        await db.query(query, values);
    } catch (e) { throw e; }
};