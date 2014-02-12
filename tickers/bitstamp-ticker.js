var request = require('request');

var header = {
    url: 'https://www.bitstamp.net/api/ticker/',
    headers: {
        'User-Agent': 'nbtc'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
            console.log('Bitstamp USD : ' + info.volume);
            console.log('+----------------+');
            console.log('| Last : $' + info.last + ' |');
            console.log('| High : $' + info.high + ' |');
            console.log('| Low  : $' + info.low + ' |');
            console.log('| Ask  : $' + info.ask + ' |');
            console.log('| Bid  : $' + info.bid + ' |');
            console.log('+----------------+');
    }
}
request(header, callback);