var Estimote = require('bleacon').Estimote;
console.log("done");
var uuid = 'b9407f30-f5f8-466e-aff9-25556b57fe6d';
var major = 0;
var minor = 0;
Estimote.discoverAll(function(e){
	console.log(e);
});
