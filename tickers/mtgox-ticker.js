var request = require('request');

var header = {
    url: 'https://data.mtgox.com/api/2/BTCUSD/money/ticker',
    headers: {
        'User-Agent': 'nbtc'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log('Mt. Gox USD : ' + info.data.vol.value);
        console.log('+----------------+');
        console.log('| Last : ' + info.data.last_local.display + ' |');
        console.log('| High : ' + info.data.high.display + ' |');
        console.log('| Low  : ' + info.data.low.display + ' |');
        console.log('| Bid  : ' + info.data.buy.display + ' |');
        console.log('| Buy  : ' + info.data.sell.display + ' |');
        console.log('+----------------+'+'\n');
    }
}
request(header, callback);