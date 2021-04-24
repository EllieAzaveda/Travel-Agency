class TravelersRepo {
  constructor(data) {
    this.data = data;
  }

  findSpecificTraveler(id) {
    let foundTraveler = {};

    this.data.find(traveler => {
      if (Object.values(traveler).includes(id)) {
        foundTraveler = traveler;
        return foundTraveler;
      } else {
        foundTraveler = "Sorry, no traveler found";
      }
    })
    return foundTraveler;
  }

}

export default TravelersRepo;
