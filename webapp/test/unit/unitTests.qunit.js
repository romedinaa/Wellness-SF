/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"wellness-sf/Wellness-SF/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});