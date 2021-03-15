"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const httpserver_1 = __importDefault(require("./httpserver"));
const controllerHelper_1 = require("./modules/controllerHelper");
const initApplication = async () => {
    try {
        await httpserver_1.default.init(3000, controllerHelper_1.loadControllers());
    }
    catch (err) {
        console.error(`FATAL: Erro na inicializacao do servidor http, o servidor nao sera iniciado, desc: ${err}`, '');
        process.exit(2);
    }
};
initApplication();
//# sourceMappingURL=application.js.map