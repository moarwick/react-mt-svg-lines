/*
 * Clamp a number within the specified min-max range
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/*
 * Round a float to 2 decimal places
 */
export function trimFloat(value) {
  return Math.round(value * 100) / 100;
}

/*
 * Determine if Microsoft browser (IE8+ or Edge)
 */
export function isMsBrowser() {
  return Boolean(document.documentMode || /Edge/.test(navigator.userAgent));
}
