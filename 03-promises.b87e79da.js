!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("iU1Pc");function u(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o(e,n):r(e,n)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=Number(document.querySelector('[name="delay"]').value),o=Number(document.querySelector('[name="step"]').value),r=Number(document.querySelector('[name="amount"]').value);if(t<0||o<0||r<1)return void e(i).Notify.failure("All values must be bigger than zero",{position:"center-center"});for(var c=0;c<r;c+=1)u(c,t).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"),{position:"center-center"})})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"),{position:"center-center"})})),t+=o}))}();
//# sourceMappingURL=03-promises.b87e79da.js.map
