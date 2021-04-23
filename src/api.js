export const fetchData = () => {
  let travelerData = fetch("http://localhost:3001/api/v1/travelers/")
    .then(response => response.json())
    .then(travelerData => {
      return travelerData;
    })
    .catch(error => console.log('error', error));

  let tripsData = fetch("http://localhost:3001/api/v1/trips")
    .then(response => response.json())
    .then(tripsData => {
      return tripsData;
    })
    .catch(error => console.log('error', error));

  let destinationData = fetch("http://localhost:3001/api/v1/destinations")
    .then(response => response.json())
    .then(destinationData => {
      return destinationData;
    })
    .catch(error => console.log('error', error));

  return Promise.all([travelerData, tripsData, destinationData])
    .then(totalData => {
      let totalFetchedData = {};
      totalFetchedData.travelerData = totalData[0];
      totalFetchedData.tripsData = totalData[1];
      totalFetchedData.destinationData = totalData[2];
      return totalFetchedData;
    })
    .catch(error => console.log('error', error));
};

export const postData = (data) => {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("error!", error))
}


// Come back and add an error message for each?
