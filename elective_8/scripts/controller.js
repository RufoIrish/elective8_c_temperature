$(document).ready(function () {
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
	// client.subscribe(["elective_c","bargs/jane", "aspire/device","Hannah/Patrick","group1/temperature","sensor/temperature/tanilon","genjess","lalaine/jake","rivastibs"]);
	client.subscribe({
		"elective_c":{qos:1},
		"bargs/jane":{qos:1},
		"aspire/device":{qos:1},
		"Hannah/Patrick":{qos:1},
		"group1/temperature":{qos:1},
		"sensor/tanilonnadela":{qos:1},
		"genjess":{qos:1},
		"lalaine/jake":{qos:1},
		"paho/temperature":{qos:1}
	})

	client.on("message", function (topic, payload) {
		if (topic == "group1/temperature") {
			$("#rat").text(payload)
		}
		if (topic == "mogal") {
			$("#sugal").text(payload)
		}
		if (topic == "z") {
			$("#marion").text(payload)
		}
		if (topic == "princechan") {
			$("#gigante").text(payload)
		}
		if (topic == "bargs/jane") {
			$("#jane").text(payload)
		}
		if (topic == "Hannah/Patrick") {
			$("#Patrick").text(payload)
		}
		if (topic == "sensor/tanilonnadela") {
			$("#tanilon").text(payload)
		}
		if (topic == "genjess") {
			$("#genjess").text(payload)
		}
		if (topic == "lalaine/jake") {
			$("#jake").text(payload)//here
		}
		if (topic == "elective_c") {
			$("#irish-redgie").text(payload)
		}

		if (topic == "paho/temperature") {
			$("#rivastibs").text(payload)
		}
		if (topic ==  "aspire/device") {
			$("#device").text(payload)
		}

	});


});