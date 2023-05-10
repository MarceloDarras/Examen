var myHeaders = new Headers();
myHeaders.append("apikey", "gp9Frst3F3G0sRlTVfgTt8iiG3fWPqGx");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to={JPY}&from={USD}&amount={5}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



  if ("geolocation" in navigator) {
    /* geolocation is available */
    console.log("Wena wena");
  } else {
    /* geolocation IS NOT available */
    console.log("mala mala");
  }
  
  navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
  });

  const watchID = navigator.geolocation.watchPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
  });
  
  





