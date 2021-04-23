class AllTravelers {
  constructor(data) {
    this.data = data;
  }

  findSpecificTraveler(id) {
    let foundTraveler = {};

    this.data.find(traveler => {
      if (Object.values(traveler).includes(id)) {
        return foundTraveler = traveler;
      } else {
        foundTraveler = "Sorry, no traveler found";
      }
    })
    return foundTraveler;
  }

}

export default AllTravelers;
