const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id,name,description_id,description_en,photo,category
    FROM product `
    );
    const data = helper.emptyOrRows(rows);
    const meta = {
        page
    };

    return {
        data
    }
}

module.exports = {
    getMultiple
}