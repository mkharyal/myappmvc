(function () {
    var hubServer = $.connection.myAppHub.server;
    var hubClient = $.connection.myAppHub.client;

    $.connection.hub.start()
    .done(function () {
        console.log('Connected!');        
    })
    .fail(function (err) {
        console.log();
    });    

    hubClient.alert = function (err) {
        writeToDisplay(err);
    }

    var writeToDisplay = function (message) {
        console.log(message);
    };
})();