const pgp = require('pg-promise');
const promise = require('bluebird');

const pg = pgp({ promiseLib: promise, noWarnings: true });
const db = pg("postgres://vnrdhscz:U6PAXNtaWuTmecTrf78o9Ll9qLv2OKo7@fanny.db.elephantsql.com/vnrdhscz");

module.exports= { db }



