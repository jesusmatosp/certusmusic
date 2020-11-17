var http = require('http');
var url = 'http://localhost:3800/api/song';

exports.getNonData = function(test){
    http.get(url + '0', function(res){
        console.time('call-service');
        var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
            var fbResponse = JSON.parse(body);
            console.log("Got a response: ", fbResponse);
            test.expect(1);
            test.strictEqual(body, '{}');
            test.done();
        });
        console.timeEnd('call-service');
    }).on('error', function(err){
        console.error('Ocurrio un error en la invocación: '+ err.message);
    });    
};

exports.getDataTestSucces = function(test){
    http.get(url + '1', function(res){
        console.time('call-service');
        var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });
        res.on('end', function(){
            var fbResponse = JSON.parse(body);
            console.log("Got a response: ", fbResponse);
            test.expect(1);
            test.notStrictEqual(body, null);
            test.done();
        });
        console.timeEnd('call-service');
    }).on('error', function(err){
        console.error('Ocurrio un error en la invocación: '+ err.message);
    });
};