// Add your code here


//fetch information from the server
//info comes in as a string then is converted into json
// fetch("http://localhost:3000/users", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(uName, uEmail) {
  const formData = {
    name: uName,
    email: uEmail,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch("http://localhost:3000/users",configurationObject)
  //response from server being parsed as a json object
  .then(res => res.json())
  //change the html to add the id from the object
  .then((obj) => document.body.innerHTML= obj['id'])
  .catch(function (error) {
    document.body.innerHTML = error.message;
  });

}