// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.

require.config({
	hbs : {
		templateExtension : 'hbs',
		// if disableI18n is `true` it won't load locales and the i18n helper
		// won't work as well.
		disableI18n : true
	},
	"paths": {
		tmpl: "../templates"
	},
	"shim": {
		jquery_ujs: ["jquery"],
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ["underscore"],
			exports: "Backbone",
			callback: function() {
				require(["backbone_rails_sync", "backbone_datalink"]);
			}
		},
		"handlebars": {
			exports: "Handlebars",
			callback: function() {
				require("handlebars.runtime");
				HandlebarsTemplates = {};
			}
		}
	}
});

define(["jquery_ujs", "backbone", "hbs", "handlebars"], function() {
	console.log("application");
});