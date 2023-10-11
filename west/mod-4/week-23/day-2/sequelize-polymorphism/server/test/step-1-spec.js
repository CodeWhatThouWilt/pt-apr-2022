const { setupBefore, setupChai, removeTestDB, runSQL } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Step 1 Specs - Create Image Table', () => {
  let DB_TEST_FILE, SERVER_DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE, SERVER_DB_TEST_FILE } = await setupBefore(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  context('Invalid Data', () => {
    it('does not allow `url` attribute to be empty', async () => {
      try {
        await runSQL("INSERT INTO 'Images' DEFAULT VALUES;", SERVER_DB_TEST_FILE)
      } catch(err) {
        try {
          const image = models.Image.build({});
          await image.validate();
        } catch(err) {
          return;
        }
        return expect.fail(
            'Invalid Data Allowed in DB (check your constraints in model)'
        );
      }
      expect.fail(
          'Invalid Data Allowed in DB (check your constraints in model)'
      );
    });
  });

  context('Valid Data', () => {
    it('allows a string for the `url` attribute value', async () => {
      await models.Image.create({ url: 'abc.png' });
    });
    it('automatically sets `createdAt` and `updatedAt', async () => {
      await runSQL("INSERT INTO 'Images' ('url') VALUES ('xyz.png');", SERVER_DB_TEST_FILE)
    });
  });
});
