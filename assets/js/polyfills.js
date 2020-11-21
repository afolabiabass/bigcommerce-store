import 'core-js';
import 'core-js/modules/es6.promise';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import objectFitImages from 'object-fit-images';

require('formdata-polyfill');

document.addEventListener('DOMContentLoaded', () => {
    objectFitImages();
});
