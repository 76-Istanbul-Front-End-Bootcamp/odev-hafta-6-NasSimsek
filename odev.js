
//window.mockApiUrl = "https://5ff193d0db1158001748b15e.mockapi.io/pets/";
window.mockApiUrl = "https://5ff1a7b3db1158001748b39e.mockapi.io/pets/";
window.removePet = (id) => {
  console.log(id) // remove the pet with given id
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE"

  }).then(() => window.location.reload(false));
};

/*window.openPetDetail = (id) => {
    console.log(id); // show details of the pet with given id
};*/


window.openPetDetail = (id) => {
  console.log(id); // show details of the pet with given id
  fetch(`${window.mockApiUrl}${id}`, {

    method: "GET"


  }).then((response) => response.json()).then((petsss) => {
    
    console.log(petsss);
    /*veriyi doğru bir şekilde çekmeme rağmen 
    Bootstrap kullanamadım.Dolayısıyla sadece veriyi başarılı getirmemi görmeniz adına consola yazdırdım*/

  });
};



