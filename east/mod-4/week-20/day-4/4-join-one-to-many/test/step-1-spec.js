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

  it('returns the name of each band with the band\'s album title', async () => {

    if (stopTestOnError(client, createError, otherError)) return;
    const queryPath = path.resolve(__dirname, '../sql-practice', queryFileName);
    const query = fs.readFileSync(queryPath, 'utf-8');
    const rows = await queryRows(client, query);
    if (!rows) {
      expect.fail('No records returned from query');
    }

    const expectedData = [
      [ 'The Falling Box',
        'The Falling Box'
      ],
      [ 'The Falling Box',
        'Again'
      ],
      [ 'The Falling Box',
        'The End'
      ],
      [ 'America The Piano',
        'The Prelude'
      ],
      [ 'America The Piano',
        'Bases Loaded'
      ],
      [ 'Loved Autumn',
        'One'
      ],
      [ 'Loved Autumn',
        'Two'
      ],
      [ 'Loved Autumn',
        'Three?'
      ],
      [ 'Playin Sound',
        'Back To The Middle'
      ],
      [ 'Playin Sound',
        'Where We Go'
      ],
      [ 'The King River',
        'The King River'
      ],
      [ 'The King River',
        'Under Water'
      ],
      [ 'The King River',
        'Another Fork'
      ],
    ];
    expect(rows).to.eql(expectedData, `There was an error running the query:\n\n${query}\n\n`);
  });
});
