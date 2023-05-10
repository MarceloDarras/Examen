var myHeaders = new Headers();
myHeaders.append("apikey", "OkO5fwS7tOOhOGVjrtBRwEmZy6AKbl93");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));





