var myHeaders = new Headers();
myHeaders.append("apikey", "gp9Frst3F3G0sRlTVfgTt8iiG3fWPqGx");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function cambioMoneda(){
  if(document.getElementsByClassName('option').value = 1){
    console.log("Divisa por defecto");
  }else if(document.getElementsByClassName('option').value = 2){
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=CLP&amount=15000", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
}





  
  





