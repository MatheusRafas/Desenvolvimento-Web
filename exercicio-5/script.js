const pricesList = document.getElementById('prices');

function updatePrices() {
  // BTC
  fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
    .then(response => response.json())
    .then(data => {
      const btcPrice = data.ticker.last;
      const btcItem = pricesList.children[0];
      btcItem.textContent = `BTC: ${btcPrice}`;
    })
    .catch(error => console.error('Error fetching BTC price:', error));
  
  // LTC
  fetch('https://www.mercadobitcoin.net/api/LTC/ticker/')
    .then(response => response.json())
    .then(data => {
      const ltcPrice = data.ticker.last;
      const ltcItem = pricesList.children[1];
      ltcItem.textContent = `LTC: ${ltcPrice}`;
    })
    .catch(error => console.error('Error fetching LTC price:', error));
  
  // ETH
  fetch('https://www.mercadobitcoin.net/api/ETH/ticker/')
    .then(response => response.json())
    .then(data => {
      const ethPrice = data.ticker.last;
      const ethItem = pricesList.children[2];
      ethItem.textContent = `ETH: ${ethPrice}`;
    })
    .catch(error => console.error('Error fetching ETH price:', error));
  
  // DOGE
  fetch('https://www.mercadobitcoin.net/api/DOGE/ticker/')
    .then(response => response.json())
    .then(data => {
      const dogePrice = data.ticker.last;
      const dogeItem = pricesList.children[3];
      dogeItem.textContent = `DOGE: ${dogePrice}`;
    })
    .catch(error => console.error('Error fetching DOGE price:', error));
}

updatePrices();
setInterval(updatePrices, 5000);
