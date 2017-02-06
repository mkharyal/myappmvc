(function () {
    var hubServer = $.connection.myAppHub.server;
    var hubClient = $.connection.myAppHub.client;

    $.connection.hub.start()
    .done(function () {
        console.log('Connected!');
        hubServer.hello();
    })
    .fail(function (err) {
        console.log();
    });    

    hubClient.hello = function () {
        writeToDisplay();
    }

    var writeToDisplay = function (message) {
        console.log("hello");
    };
})();