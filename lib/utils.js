"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;
exports.trimFloat = trimFloat;
exports.isMsBrowser = isMsBrowser;
/*
 * Clamp a number within the specified min-max range
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/*
 * Round a float to 2 decimal places
 */
function trimFloat(value) {
  return Math.round(value * 100) / 100;
}

/*
 * Determine if Microsoft browser (IE8+ or Edge)
 */
function isMsBrowser() {
  return Boolean(document.documentMode || /Edge/.test(navigator.userAgent));
}