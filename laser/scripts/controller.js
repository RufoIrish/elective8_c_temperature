$(document).ready(function() {
    $("button").attr("disabled", true);
    let address = "wss://test.mosquitto.org:8081/mqtt";
    client = mqtt.connect(address)
    client.on("connect", function() {
        $("#btnOn").attr("disabled", false)
    });

    $("#btnOn").click(function() {
        client.publish("elective/laser", "on");
        $("#btnOff").attr("disabled", false);
        $("#btnOn").attr("disabled", true);
        $("#status").text("The laser is currently turned on")
        $("#status").css("color", "green")
    })

    $("#btnOff").click(function() {
        client.publish("elective/laser", "off");
        $("#btnOff").attr("disabled", true);
        $("#btnOn").attr("disabled", false);
        $("#status").text("The laser is currently turned off")
        $("#status").css("color", "red")
    })
});