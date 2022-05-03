const Park = function(name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.collectionOfDinosaurs = []
}

// MVP
Park.prototype.addDinosaurToCollection = function(dinosaur) {
    this.collectionOfDinosaurs.push (dinosaur)
}

Park.prototype.removeDinosaurFromCollection = function(dinosaur) {
    const indexOfDinosaurs = this.collectionOfDinosaurs.indexOf(dinosaur)
    this.collectionOfDinosaurs.splice(indexOfDinosaurs, 1)
}

Park.prototype.dinosaurAttractsTheMostVisitors = function (a, b) {
    this.collectionOfDinosaurs.sort(a, b)
    return a.dinosaur.guestsAttractedPerDay - b.dinosaur.guestsAttractedPerDay
}

Park.prototype.dinosaursOfParticularSpecies = function (species) {
    let dinosaurs = []

    for (const dinosaur of this.collectionOfDinosaurs) {
        if (dinosaur.species === species)
        dinosaurs.push(dinosaur)
    } 
    return dinosaurs
}

Park.prototype.totalNumberOfVisitorsPerDay = function() {
    let visitors = 0

    for ( const dinosaur of this.collectionOfDinosaurs) {
        visitors += dinosaur.guestsAttractedPerDay
    }
    return visitors
}

Park.prototype.totalNumberOfVisitorsPerYear = function() {
    let visitors = this.totalNumberOfVisitorsPerDay()
    return visitors * 365
}

Park.prototype.totalRevenueForOneYear = function() {
    let visitors = this.totalNumberOfVisitorsPerYear()
    return visitors * this.ticketPrice
}

// EXTENSIONS
Park.prototype.removeAllDinosaursOfAParticularSpecies = function() {
    let removeDinosaur = this.collectionOfDinosaurs.filter(dinosaur => dinosaur.species !== 't-rex')
    return removeDinosaur
}
module.exports = Park