"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Connection_1 = __importDefault(require("./Connection"));
class GetItems {
    constructor() {
        this.connection = new Connection_1.default();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.connection.query('select * from ccca.item', []);
            const output = [];
            for (const item of items) {
                output.push({ description: item.description, price: parseFloat(item.price) });
            }
            return items;
        });
    }
}
exports.default = GetItems;
