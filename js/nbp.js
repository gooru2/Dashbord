const api_url = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/?format:json'
    async function eurRate() {
        const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/eur/?format:json');
        const data = await response.json();
        console.log(data);
    }