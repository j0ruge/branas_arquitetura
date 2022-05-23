"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const CONNECTION_STRING = 'postgres://postgres:123456@localhost:5432/app';
class Connection {
    constructor() {
        this.postgresPromisse = (0, pg_promise_1.default)()(CONNECTION_STRING);
    }
    query(statement, parameters) {
        return this.postgresPromisse.query(statement, parameters);
    }
}
exports.default = Connection;
