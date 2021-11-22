'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const shortid = require("shortid");
class DB {
    constructor(name = 'blog.json') {
        this.name = name;
    }
    getUniqueId() {
        return shortid.generate();
    }
    get(collectionName) {
        return null;
    }
    query(collectionName, json) {
        return null;
    }
    add(collectionName, json) {
        return null;
    }
    update(collectionName, where, json) {
        return null;
    }
    delete(collectionName, field) {
        return null;
    }
    getPager(collectionName, condition) {
        return null;
    }
}
exports.default = DB;
