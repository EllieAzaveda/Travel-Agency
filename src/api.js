var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3001/api/v1/travelers/", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));


fetch("http://localhost:3001/api/v1/trips	", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


fetch("http://localhost:3001/api/v1/destinations	", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
