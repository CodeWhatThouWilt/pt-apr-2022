const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows } = require('./sqlite-client');

const { createTables, insertData, stopTestOnError } = require('./utils');

const queryFileName = 'step-2.sql';

describe('Step #2', () => {
  let client;
  let createError;
  let otherError;

  before(async () => {
    ({ client, createError, otherError } = await createTables());

    const insertError = await insertData(client, otherError);
    if (insertError) otherError = insertError;
  });

  after(async () => {
    if (client) {
      client.close();
    }
  });

  it('returns the name of each band that has an album fewer than 20,000 sales', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
      [ 'Loved Autumn' ],
      [ 'Playin Sound' ],
    ];

    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });
});
