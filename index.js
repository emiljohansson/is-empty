'use strict';

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isNumber(value) {
    return typeof value === 'number';
}

function keys(object) {
    const result = [];
    let key;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}

function isEmpty(value) {
    if (value && !isNumber(value.length)) {
        return keys(value).length === 0;
    }
    if (!isDefined(value)) {
        return false;
    }
    return value.length === 0;
}

module.exports = isEmpty;
