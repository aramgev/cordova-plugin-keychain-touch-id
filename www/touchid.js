var argscheck = require('cordova/argscheck'),
               exec = require('cordova/exec');

var touchid = {
	isAvailable: function(successCallback, errorCallback){
		exec(successCallback, errorCallback, "TouchID", "isAvailable", []);
	},
	save: function(key,password, successCallback, errorCallback) {
		exec(successCallback, errorCallback, "TouchID", "save", [key,password]);
	},
	verify: function(key,message,successCallback, errorCallback){
		exec(successCallback, errorCallback, "TouchID", "verify", [key,message]);
	},
	has: function(key,successCallback, errorCallback){
		exec(successCallback, errorCallback, "TouchID", "has", [key]);
	},
	deleteKey: function(key,successCallback, errorCallback){
		exec(successCallback, errorCallback, "TouchID", "delete", [key]);
	},
	setLocale: function(locale,successCallback, errorCallback){
		exec(successCallback, errorCallback, "TouchID", "setLocale", [locale]);
	}
};

module.exports = touchid;
