var tet = document.getElementById("Tether");
var doge = document.getElementById("Dogecoin");
var eth = document.getElementById("Ethereum");
var btc = document.getElementById("Bitcoin");

var liveprice = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=tether%2Cdogecoin%2Cethereum%2Cbitcoin&vs_currencies=USD",
    "method": "GET",
    "headers": {}
};

$.ajax(liveprice).done(function (response) {
    if (response.tether && response.tether.usd) {
        tet.innerHTML = response.tether.usd;
    } else {
        tet.innerHTML = "N/A"; // or handle the missing data in a different way
    }

    if (response.dogecoin && response.dogecoin.usd) {
        doge.innerHTML = response.dogecoin.usd;
    } else {
        doge.innerHTML = "N/A"; // or handle the missing data in a different way
    }

    if (response.ethereum && response.ethereum.usd) {
        eth.innerHTML = response.ethereum.usd;
    } else {
        eth.innerHTML = "N/A"; // or handle the missing data in a different way
    }

    if (response.bitcoin && response.bitcoin.usd) {
        btc.innerHTML = response.bitcoin.usd;
    } else {
        btc.innerHTML = "N/A"; // or handle the missing data in a different way
    }
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error fetching data from the API: " + textStatus);
});