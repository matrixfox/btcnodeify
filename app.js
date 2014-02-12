var mongodb = require('mongodb');
var request = require('request');

var header = {
    url: 'https://www.bitstamp.net/api/ticker/',
    headers: {
        'User-Agent': 'nbtc'
    }
};

var server = new mongodb.Server("127.0.0.1", 27017, {});

new mongodb.Db('bitcoin', server, {w: 1}).open(function (error, client) {
	if (error) throw error;

	var collection = new mongodb.Collection(client, 'bitstamp');

	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			var info = JSON.parse(body);

			collection.insert(info, {safe:false}, function(err, objects) {
				if (err) console.warn(err.message);
				if (err && err.message.indexOf('E11000 ') !== -1) {
				// this _id was already inserted in the database
				}
				console.log('Bitstamp USD : ' + info.volume);
				console.log('+----------------+');
				console.log('| Last : $' + info.last + ' |');
				console.log('| High : $' + info.high + ' |');
				console.log('| Low  : $' + info.low + ' |');
				console.log('| Ask  : $' + info.ask + ' |');
				console.log('| Bid  : $' + info.bid + ' |');
				console.log('+----------------+');
				client.close();
			});
    	}
	}

request(header, callback);

});