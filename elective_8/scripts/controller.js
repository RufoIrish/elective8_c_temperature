$(document).ready(function () {
	var num = 1;
	
	$("button").attr("disabled", true)
	$("#btnConnect").attr("disabled", false)
	$("input").attr("disabled", true)
	$("#brokerAddress").attr("disabled", false)
	$("#btnConnect").click(function () {
		let address = $("#brokerAddress").val()
		client = mqtt.connect(address)
		//client.subscribe(["elective_c","group1-temperature"]);
		$("#status").text("Connecting.....")
		$("#status").css("color", "rgb(230, 230, 0)")
		client.on("connect", function () {
			$("button").attr("disabled", false)
			$("input").attr("disabled", false)
			$("#status").css("color", "green")
			$("#status").text("Successfully connected!");
		});
		client.on("message", function (topic, payload) {
			if(topic == "group1-temperature"){
				$("#bu-rat").text(payload)
			}
			if(topic == "mogal"){
				$("#morre-sugal").text(payload)
			}
			if(topic == "z"){
				$("#ivy-marion").text(payload)
			}
			if(topic == "princechan"){
				$("#duran-gigante").text(payload)
			}
			if(topic == "bargs-jane"){
				$("#bargs-jane").text(payload)
			}
			if(topic == "Hannah/Patrick"){
				$("#Hannah/Patrick").text(payload)
			}
			if(topic == "sensor/temperature/tanilon"){
				$("#sensor/temperature/tanilon").text(payload)
			}
			if(topic == "genjess"){
				$("#genjess").text(payload)
			}
			if(topic == "lalaine/jake"){
				$("#lalaine/jake").text(payload)//here
			}
			if(topic == "aspire/device"){
				$("#aspire/device").text(payload)
			}
			if(topic == "rivastibs"){
				$("#rivastibs").text(payload)
			}
			if(topic == "elective_c"){
				$("#irish-redgie").text(payload)
			}

		});
	});
	$("#btnDisconnect").click(function () {
		client.end();
		$("#status").css("color", "red")
		$("#status").text("Disconnected!")
		$("button").attr("disabled", true)
		$("#btnConnect").attr("disabled", false)
		$("input").attr("disabled", true)
		$("#brokerAddress").attr("disabled", false)
	});	
	$("#btnSubscribe").click(function () {
		//client.subscribe($("#topicToSubscribe").val());
		alert("subscribed")
		//client.subscribe("sensor/temperature/tanilon");
		client.subscribe("elective_c");
		client.subscribe("lalaine/jake");
		
	});
	$("#btnPublish").click(function () {
		client.publish($("#topicToPublish").val(), $("#payloadToPublish").val());
	});
	$("#btnUnsubscribe").click(function () {
		client.unsubscribe($("#topicToSubscribe").val());
	});
	$("#clearsms").click(function(){
		$("#tbodyContainer").empty();
	});
});