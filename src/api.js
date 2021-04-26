export const fetchData = () => {
  let travelerData = fetch("http://localhost:3001/api/v1/travelers/")
    .then(response => response.json())
    .then(travelerData => {
      return travelerData;
    })
    .catch(error => alert("Sorry! Something went wrong."))

  let tripsData = fetch("http://localhost:3001/api/v1/trips")
    .then(response => response.json())
    .then(tripsData => {
      return tripsData;
    })
    .catch(error => alert("Sorry! Something went wrong."))

  let destinationData = fetch("http://localhost:3001/api/v1/destinations")
    .then(response => response.json())
    .then(destinationData => {
      return destinationData;
    })
    .catch(error => alert("Sorry! Something went wrong."))

  return Promise.all([travelerData, tripsData, destinationData])
    .then(totalData => {
      let allData = {};
      allData.travelerData = totalData[0];
      allData.tripsData = totalData[1];
      allData.destinationData = totalData[2];
      return allData;
    })
    .catch(error => alert("Sorry! Something went wrong."))
};

export const postData = (data) => {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
    // body: JSON.stringify(data) {
    //
    // }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("error!", error))
}


// Come back and add an error message for each?
