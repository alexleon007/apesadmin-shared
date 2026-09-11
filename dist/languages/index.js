"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zhTW = exports.en = exports.es = exports.languages = void 0;
const es_json_1 = __importDefault(require("./es.json"));
exports.es = es_json_1.default;
const en_json_1 = __importDefault(require("./en.json"));
exports.en = en_json_1.default;
const zh_TW_json_1 = __importDefault(require("./zh-TW.json"));
exports.zhTW = zh_TW_json_1.default;
exports.languages = { es: es_json_1.default, en: en_json_1.default, "zh-TW": zh_TW_json_1.default };
//# sourceMappingURL=index.js.map