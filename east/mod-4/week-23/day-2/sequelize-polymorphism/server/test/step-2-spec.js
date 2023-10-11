const { setupBefore, setupChai, removeTestDB } = require('./utils/test-utils');
const chai = setupChai();
const expect = chai.expect;

describe('Step 2 Specs - Create Associations', () => {
  let DB_TEST_FILE, SERVER_DB_TEST_FILE, models, server;
  before(async () => ({ server, models, DB_TEST_FILE, SERVER_DB_TEST_FILE } = await setupBefore(__filename)));
  after(async () => await removeTestDB(DB_TEST_FILE));

  let testPost;
  let testProfile;
  let testPostImages = [];
  let testProfileImages = [];

  before(async () => {
    testPost = await models.BlogPost.create({ content: 'Test Blog Post' });
    testProfile = await models.UserProfile.create({
      displayName: 'Test User Profile'
    });
    testPostImages.push(await testPost.createImage({ url: 'blog1.png' }));
    testPostImages.push(await testPost.createImage({ url: 'blog2.png' }));
    testPostImages.push(await testPost.createImage({ url: 'blog3.png' }));
    testProfileImages.push(await testProfile.createImage({ url: 'profile1.png' }));
    testProfileImages.push(await testProfile.createImage({ url: 'profile1.png' }));
  });

  context('Valid Data', () => {
    it('assign blog post to image', async () => {
      const foundImages = await testPost.getImages();

      expect(foundImages).to.be.an.instanceof(Array);
      expect(foundImages.length).to.eq(testPostImages.length);

      for (let i in foundImages) {
        const image = foundImages[i];
        expect(image.id).to.eq(testPostImages[i].id);
        expect(image).to.be.an.instanceof(models.Image);
      }
    });

    it('assign user profile to image', async () => {
      const foundImages = await testProfile.getImages();

      expect(foundImages).to.be.an.instanceof(Array);
      expect(foundImages.length).to.eq(testProfileImages.length);

      for (let i in foundImages) {
        const image = foundImages[i];
        expect(image.id).to.eq(testProfileImages[i].id);
        expect(image).to.be.an.instanceof(models.Image);
      }
    });

    it('assign image to blog post', async () => {
      const foundPost = await testPostImages[0].getBlogPost();

      expect(foundPost).to.be.an.instanceof(models.BlogPost);
      expect(foundPost.id).to.eq(testPost.id);
      expect(testPostImages[0].imageableType).to.eq('BlogPost');
    });

    it('assign image to user profile', async () => {
      const foundProfile = await testProfileImages[0].getUserProfile();

      expect(foundProfile).to.be.an.instanceof(models.UserProfile);
      expect(foundProfile.id).to.eq(testPost.id);
      expect(testProfileImages[0].imageableType).to.eq('UserProfile');
    });
  });
});
