"use strict";
var utils = require('../utils');
var MemoryStorage = (function () {
    function MemoryStorage() {
        this.store = {};
    }
    MemoryStorage.prototype.get = function (id, callback) {
        if (this.store.hasOwnProperty(id)) {
            callback(null, utils.clone(this.store[id]));
        }
        else {
            callback(null, null);
        }
    };
    MemoryStorage.prototype.save = function (id, data, callback) {
        this.store[id] = utils.clone(data || {});
        if (callback) {
            callback(null);
        }
    };
    MemoryStorage.prototype.delete = function (id) {
        if (this.store.hasOwnProperty(id)) {
            delete this.store[id];
        }
    };
    return MemoryStorage;
}());
exports.MemoryStorage = MemoryStorage;
