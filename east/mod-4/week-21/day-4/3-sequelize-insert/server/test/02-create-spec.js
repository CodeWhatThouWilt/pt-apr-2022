const { setupBefore, setupChai, removeTestDB, runSQLQuery } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

describe('Step 1: Build and Save', () => {
    let DB_TEST_FILE, models, buildSpy, createSpy;
    before(async () => {
        ({ models, DB_TEST_FILE } = await setupBefore(__filename));
        buildSpy = chai.spy.on(models.Puppy, 'build');
        createSpy = chai.spy.on(models.Puppy, 'create');
        const { create } = await require('../script');
        await create();
    });

    after(async () => await removeTestDB(DB_TEST_FILE));

    it('should implement the create method on the Puppy model to insert Beans', async () => {
        expect(createSpy).to.have.been.called()
        const test = await models.Puppy.findOne({ where: { name: 'Beans' } });
        expect(test.name).to.eq('Beans');
        expect(test.ageYrs).to.eq(1.6);
        expect(test.breed).to.eq("Bulldog");
        expect(test.weightLbs).to.eq(42);
        expect(test.microchipped).to.eq(true);
    });
});
