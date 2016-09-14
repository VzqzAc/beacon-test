const noble = require('noble');

noble.startScanning();

noble.on('discover', function(peripheral) {
	let macAddress = peripheral.uuid;
	let rss = peripheral.rssi;
	let localName = advertisement.localName;
	let realUuid = advertisement.manufacturerData;
	console.log("Beacon detected: " + macAddress + " " rss + " " + localName);
	console.log("----" + realUuid + "-----");
});