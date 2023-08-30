'use strict';

const { Op } = require('sequelize');

const { Puppy } = require('../models')

const puppies = [
  {
    name: 'Cooper',
    ageYrs: 1,
    breed: 'Miniature Schnauzer',
    weightLbs: 18,
    microchipped: true
  },
  {
    name: 'Indie',
    ageYrs: 0.5,
    breed: 'Yorkshire Terrier',
    weightLbs: 13,
    microchipped: true
  },
  {
    name: 'Kota',
    ageYrs: 0.7,
    breed: 'Australian Shepherd',
    weightLbs: 26,
    microchipped: false
  },
  {
    name: 'Zoe',
    ageYrs: 0.8,
    breed: 'Korean Jindo',
    weightLbs: 32,
    microchipped: true
  },
  {
    name: 'Charley',
    ageYrs: 1.5,
    breed: 'Basset Hound',
    weightLbs: 25,
    microchipped: false
  },
  {
    name: 'Ladybird',
    ageYrs: 0.6,
    breed: 'Labradoodle',
    weightLbs: 20,
    microchipped: true
  },
  {
    name: 'Callie',
    ageYrs: 0.9,
    breed: 'Corgi',
    weightLbs: 16,
    microchipped: false
  },
  {
    name: 'Jaxson',
    ageYrs: 0.4,
    breed: 'Beagle',
    weightLbs: 19,
    microchipped: true
  },
  {
    name: 'Leinni',
    ageYrs: 1,
    breed: 'Miniature Schnauzer',
    weightLbs: 25,
    microchipped: true
  },
  {
    name: 'Max',
    ageYrs: 1.6,
    breed: 'German Shepherd',
    weightLbs: 65,
    microchipped: false
  }
]

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

    try {
    
      await Puppy.bulkCreate(puppies, { validate: true });
      
    } catch(err) {

      console.error(err);
      throw err;

    }
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Puppies', { [Op.or]: puppies })
  }
};
