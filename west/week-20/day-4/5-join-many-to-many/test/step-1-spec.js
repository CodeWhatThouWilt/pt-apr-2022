const { expect } = require('chai');
const path = require('path');
const fs = require('fs');
const { queryRows } = require('./sqlite-client');

const { createTables, insertData, stopTestOnError } = require('./utils');

const queryFileName = 'step-1.sql';

describe('Step #1', () => {
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

  it('returns the first name of each musician with the musician\'s instrument', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
      [ 'Adam',
        'piano'
      ],
      [ 'Adam',
        'guitar'
      ],
      [ 'Anton',
        'piano'
      ],
      [ 'Anton',
        'bass'
      ],
      [ 'Wilson',
        'cello'
      ],
      [ 'Marine',
        'saxophone'
      ],
      [ 'Georgette',
        'drums'
      ],
      [ 'Georgette',
        'trumpet'
      ],
      [ 'Georgette',
        'saxophone'
      ],
      [ 'Aurora',
        'violin'
      ],
      [ 'Aurora',
        'cello'
      ],
      [ 'Trenton',
        'piano'
      ],
      [ 'Camila',
        'piano'
      ],
      [ 'Rosemarie',
        'piano'
      ],
      [ 'Rosemarie',
        'violin'
      ],
      [ 'Victoria',
        'violin'
      ],
    ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });
});
