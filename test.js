const noble = require('noble');

noble.on('stateChange', function(state){
	if(state === 'poweredOn'){
		noble.startScanning();
	} else {
		noble.stopScanning();
	}
});

noble.on('discover', function(peripheral) {
	let advertisement = peripheral.advertisement;
	let macAddress = peripheral.uuid;
	let rssi = peripheral.rssi;
	let localName = advertisement.localName;
	let realUuid = advertisement.manufacturerData;
	console.log("Beacon detected: " + macAddress + " " + rssi + " " + localName);
	console.log("----" + realUuid + "-----");
});
