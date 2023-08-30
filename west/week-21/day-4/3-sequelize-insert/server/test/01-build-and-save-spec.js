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
        const { build } = await require('../script');
        await build();
    });

    after(async () => await removeTestDB(DB_TEST_FILE));

    it('should implement the build and save methods on the Puppy model to insert Trudy', async () => {
        expect(buildSpy).to.have.been.called();
        expect(createSpy).to.not.have.been.called();
        const trudy = await models.Puppy.findOne({ where: { name: 'Trudy' } });
        expect(trudy.name).to.eq('Trudy');
        expect(trudy.ageYrs).to.eq(2);
        expect(trudy.breed).to.eq("Brittany Spaniel");
        expect(trudy.weightLbs).to.eq(38);
        expect(trudy.microchipped).to.eq(false);
    });
});
