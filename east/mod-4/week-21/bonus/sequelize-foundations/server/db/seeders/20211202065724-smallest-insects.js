'use strict';

const smallestInsects = [
  {
    name: 'Western Pygmy Blue Butterfly',
    description: 'Copper brown and dull blue pattern at the bases of both wings',
    fact: 'Prehistoric fossils suggests that butterflies have been around for more than 200 million years',
    territory: 'North America and as far west as Hawaii and the middle east',
    millimeters: 12,
  },
  {
    name: 'Patu Digua Spider',
    description: 'Smaller than even the head of a pin',
    fact: 'Generally, male spiders are smaller than the females',
    territory: 'Rio Digua river near the El Queremal, Valle del Cauca region of northern Colombia',
    millimeters: 0.33,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Phase 4
    // Notes to instructors:
    //   Only 2 are included as examples
    //   Students can put any data they want in here
    await queryInterface.bulkInsert('Insects', smallestInsects);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // Phase 4
    await queryInterface.bulkDelete('Insects', {
      name: smallestInsects.map(insect => insect.name)
    });
  }
};