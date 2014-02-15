var request = require('request');

var header = {
    url: 'https://btc-e.com/api/2/btc_usd/ticker',
    headers: {
        'User-Agent': 'nbtc'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);

            console.log('btc-e USD : ' + info.ticker.vol);
            console.log('----------------');
            console.log('Last : $' + info.ticker.last);
            console.log('High : $' + info.ticker.high);
            console.log('Low  : $' + info.ticker.low);
            console.log('Avg  : $' + info.ticker.avg);
            console.log('Ask  : $' + info.ticker.sell);
            console.log('Bid  : $' + info.ticker.buy);

    }
}
request(header, callback);