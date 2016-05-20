
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    channel = require('cordova/channel');


var Payleven = function() {
};

Payleven.close = function() {	
    exec(null, null, "Payleven", "close", []);
};

Payleven.show = function() {
    exec(null, null, "Payleven", "show", []);
};

Payleven.disableScroll = function(disable) {
    exec(null, null, "Payleven", "disableScroll", [disable]);
};

channel.onCordovaReady.subscribe(function() {
    exec(success, null, 'Payleven', 'init', []);

    function success(msg) {
        alert(msg);
    }
});

module.exports = Payleven;



