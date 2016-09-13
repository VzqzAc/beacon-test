var Estimote = require('bleacon').Estimote;

var uuid = 'b9407f30-f5f8-466e-aff9-25556b57fe6d';
var major = 0;
var minor = 0;
(function(){
	Estimote.discover(function(e){
		console.log(e);
	});
})();
//Esti.startS
