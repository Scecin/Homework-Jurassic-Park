const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur1

  beforeEach(function () {
    park = new Park('Jurassic Park', 29.99)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30)
    dinosaur3 = new Dinosaur('diplodocus', 'herbivore', 40)
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice 
    assert.strictEqual(actual, 29.99)
  });

  it('should have a collection of dinosaurs', function() {
    park.addDinosaurToCollection (dinosaur1)
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual (actual, [dinosaur1])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaurToCollection (dinosaur1)
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual (actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaurToCollection (dinosaur1)
    park.removeDinosaurFromCollection(dinosaur1)
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaurToCollection (dinosaur1)
    park.addDinosaurToCollection (dinosaur2)
    park.addDinosaurToCollection (dinosaur3)
    const actual = park.dinosaurAttractsTheMostVisitors()
    assert.deepStrictEqual (actual, [dinosaur1])
  })

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaurToCollection (dinosaur1)
    park.addDinosaurToCollection (dinosaur2)
    park.addDinosaurToCollection (dinosaur3)
    const actual = park.dinosaursOfParticularSpecies('t-rex',)
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaurToCollection (dinosaur1)
    park.addDinosaurToCollection (dinosaur2)
    park.addDinosaurToCollection (dinosaur3)
    const actual = park.totalNumberOfVisitorsPerDay()
    assert.strictEqual(actual, 120)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaurToCollection (dinosaur1)
    park.addDinosaurToCollection (dinosaur2)
    park.addDinosaurToCollection (dinosaur3)
    const actual = park.totalNumberOfVisitorsPerYear()
    assert.strictEqual(actual, 43800)
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaurToCollection (dinosaur1)
    park.addDinosaurToCollection (dinosaur2)
    park.addDinosaurToCollection (dinosaur3)
    const actual = park.totalRevenueForOneYear()
    assert.strictEqual(actual, 1313562)
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaurToCollection (dinosaur1)
    park.addDinosaurToCollection (dinosaur2)
    park.addDinosaurToCollection (dinosaur3)
    const actual = park.removeAllDinosaursOfAParticularSpecies()
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3])
  });

});
