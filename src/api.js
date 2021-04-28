export const checkForErr = (response) => {
  if(!response) {
    throw new Error('Something went wrong! Please try again later.')
  } else {
    return response.json()
  }
}

export const fetchData = () => {
  let travelerData = fetch("http://localhost:3001/api/v1/travelers/")
    .then(checkForErr)
    .then(travelerData => {
      return travelerData;
    })
    .catch(error => alert("Sorry! Something went wrong."))

  let tripsData = fetch("http://localhost:3001/api/v1/trips")
    .then(checkForErr)
    .then(tripsData => {
      return tripsData;
    })
    .catch(error => alert("Sorry! Something went wrong."))

  let destinationData = fetch("http://localhost:3001/api/v1/destinations")
    .then(checkForErr)
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

export const postNewTrip = (data) => {
  return fetch("http://localhost:3001/api/v1/trips",
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(checkForErr)
    .then(newData => {
      allData.tripsData.append(newData)
    })
    .catch(error => "Sorry! We're having some trouble. Please try back later!")
}
