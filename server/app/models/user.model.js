const db = require('./db');

/**
 * @Class representing the User Model.
 */
class UserModel {
    /**
     * Create a new user.
     * @param {Object} userData - The user data to create a new user.
     * @param {string} userData.sub - The Auth0 user identifier (sub claim from JWT) for the new user.
     * @param {string} userData.email - The email address of the new user.
     * @returns {Promise} A Promise that resolves to the newly created user.
     * @throws {Error} Throws an error if user could not be created.
     */
    async createUser(userData) {
        const { sub, email } = userData;
        try {
            const query = 'INSERT INTO users(sub, email) VALUES($1, $2) RETURNING *';
            const values = [sub, email];
            const result = await db.query(query, values);

            return result.rows[0];
        } catch (e) { throw e; }
    }

    /**
     * Get user by Auth0 sub claim (user identifier).
     * @param {string} sub - The Auth0 user identifier.
     * @returns {Promise} A Promise that resolves to the user.
     * @throws {Error} Throws an error if no user with the specified sub can be found.
     */
    async getUserBySub(sub) {
        try {
            const query = 'SELECT * FROM users WHERE sub = $1';
            const values = [sub];
            const result = await db.query(query, values);

            // Return error if user is not found. Otherwise, return user.
            if (result.rows.length === 0) {
                throw new Error('User not found');
            }
            return result.rows[0];
        } catch (e) { throw e; }
    }

    /**
     * Retrieves all links created by user.
     * @param {string} sub - The Auth0 user identifier of the user whose links are to be retrieved.
     * @returns {Promise<Array>} A Promise that resolves to an array of link objects created by the specified user.
     * @throws {Error} Throws an error if there is a problem executing the query.
     */
    async getUserLinks(sub) {
        try {
            const query = 'SELECT * FROM links WHERE sub = $1';
            const values = [sub];
            const result = await db.query(query, values);
            return result.rows;
        } catch (e) { throw e; }
    }

    /**
     * Update user data by sub claim (user identifier).
     * @param {Object} userData - The user data.
     * @param {string} userData.sub - The Auth0 user identifier (sub claim from JWT) for the new user.
     * @param {string} userData.email - The email address of the new user.
     * @returns {Promise} A Promise that resolves to the updated user.
     * @throws {Error} Throws an error if no user with the specified sub can be found.
     */
    async updateUserBySub(userData) {
        const { sub, email } = userData;
        if (!sub) {
            throw new Error('User sub is required');
        }
        try {
            const query = 'UPDATE users SET email = $1 WHERE sub = $2 RETURNING *';
            const values = [email, sub];
            const result = await db.query(query, values);

            // Check if any rows were updated, indicating the user was found and updated.
            if (result.rows.length === 0) {
                throw new Error('User not found');
            }

            return result.rows[0];
        } catch (e) { throw e; }
    }

    /**
     * Delete a user by their sub.
     * @param {string} sub - The Auth0 user identifier of the user to be deleted.
     * @returns {Promise<string>} A Promise that resolves to the sub of the deleted user.
     * @throws {Error} Throws an error if no user with the specified sub can be found, or if the deletion fails.
     */
    async deleteUserBySub(sub) {
        try {
            const query = 'DELETE FROM users WHERE sub = $1 RETURNING sub';
            const values = [sub];
            const result = await db.query(query, values);

            // If no rows are returned, no user was found/deleted
            if (result.rows.length === 0) {
                throw new Error('User not found');
            }
            return result.rows[0].sub;
        } catch (e) { throw e; }
    }
}

module.exports = UserModel;
