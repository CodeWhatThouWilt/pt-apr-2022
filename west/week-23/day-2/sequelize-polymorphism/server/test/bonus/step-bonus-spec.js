const { setupBefore, setupChai, removeTestDB } = require('../utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Bonus Step Specs - Eager Loading', () => {
    let DB_TEST_FILE, SERVER_DB_TEST_FILE, models, server;
    before(async () => ({ server, models, DB_TEST_FILE, SERVER_DB_TEST_FILE } = await setupBefore(__filename)));
    after(async () => await removeTestDB(DB_TEST_FILE));

    context('Valid Data', () => {
        it('get imageable blog post', async () => {
            const testPost = await models.BlogPost.create({
                content: 'Test Blog Post'
            });
            const testImage = await testPost.createImage({
                url: 'blog.png'
            });

            const foundImage = await models.Image.findByPk(
                testImage.id,
                { include: [models.BlogPost] },
            );
            expect(foundImage.imageableType).to.eq('BlogPost');

            const foundImageable = foundImage.imageable;
            expect(foundImageable).to.be.an.instanceof(models.BlogPost);
            expect(foundImageable.id).to.eq(testPost.id);
        });

        it('get imageable user profile', async () => {
            const testProfile = await models.UserProfile.create({
                displayName: 'Test User Profile'
            });
            const testImage = await testProfile.createImage({
                url: 'profile.png'
            });

            const foundImage = await models.Image.findByPk(
                testImage.id,
                { include: [models.UserProfile] },
            );
            expect(foundImage.imageableType).to.eq('UserProfile');

            const storedImageable = foundImage.imageable;
            expect(storedImageable).to.be.an.instanceof(models.UserProfile);
            expect(storedImageable.id).to.eq(testProfile.id);
        });

        it('get null imageable for disconnected image ' +
            '(neither blog post nor user profile)', async () => {
            const testImage = await models.Image.create({ url: 'none.png' });

            const foundImage = await models.Image.findByPk(
                testImage.id,
                { include: [models.BlogPost, models.UserProfile] },
            )
            expect(foundImage.imageableType).to.be.null;

            const storedImageable = foundImage.imageable;
            expect(storedImageable).to.be.null;
        });

        it('all images have correct imageable', async () => {
            const foundImages = await models.Image.findAll({
                include: [models.BlogPost, models.UserProfile],
            });
            expect(foundImages.length).to.be.gt(0);

            for (const id in foundImages) {
                const image = foundImages[id];

                if (image.imageableType === 'BlogPost') {
                    expect(image.imageable).to.be.an.instanceof(models.BlogPost);
                } else if (image.imageableType === 'UserProfile') {
                    expect(image.imageable).to.be.an.instanceof(models.UserProfile);
                } else {
                    expect(image.imageable).to.be.null;
                }
            }
        });
    });
});