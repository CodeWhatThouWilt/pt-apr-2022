const { setupBefore, setupChai, removeTestDB } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Step 3 Specs - Lazy Loading', () => {
    let DB_TEST_FILE, SERVER_DB_TEST_FILE, models, server;
    before(async () => ({ server, models, DB_TEST_FILE, SERVER_DB_TEST_FILE } = await setupBefore(__filename)));
    after(async () => await removeTestDB(DB_TEST_FILE));

    context('Valid Data', () => {
        it('get imageable blog post', async () => {
          const testPost = await models.BlogPost.create({ content: 'Test Blog Post' });
          const testImage = await testPost.createImage({ url: 'blog.png' });
          // This is the only difference from step 2 tests
          const foundPost = await testImage.getImageable();

          expect(foundPost).to.be.an.instanceof(models.BlogPost);
          expect(foundPost.id).to.eq(testPost.id);
          expect(testImage.imageableType).to.eq('BlogPost');
        });

        it('get imageable user profile', async () => {
            const testProfile = await models.UserProfile.create({
                displayName: 'Test User Profile'
            });
            const testImage = await testProfile.createImage({ url: 'profile.png' });
            // This is the only difference from step 2 tests
            const foundProfile = await testImage.getImageable();

            expect(foundProfile).to.be.an.instanceof(models.UserProfile);
            expect(foundProfile.id).to.eq(testProfile.id);
            expect(testImage.imageableType).to.eq('UserProfile');
        });

        it('get null imageable for disconnected image ' +
            '(neither blog post nor user profile)', async () => {
            const testImage = await models.Image.create({ url: 'none.png' });
            // This is the only difference from step 2 tests
            const foundImageable = await testImage.getImageable();

            expect(testImage.imageableType).to.be.undefined;
            expect(foundImageable).to.be.null;
        });
    });
});
