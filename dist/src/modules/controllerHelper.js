"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadControllers = void 0;
const firstController_1 = __importDefault(require("./firstModule/firstController"));
function loadControllers() {
    return [
        firstController_1.default
    ];
}
exports.loadControllers = loadControllers;
//# sourceMappingURL=controllerHelper.js.map