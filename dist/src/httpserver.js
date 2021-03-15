"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const routeshelper_1 = __importDefault(require("./modules/routeshelper"));
class HttpServer {
    constructor() {
        this.routes = [];
        this.express = express_1.default();
    }
    use(fn) {
        return this.express.use(fn);
    }
    registerUse(fns) {
        if (fns.length > 0) {
            for (const fn of fns) {
                this.use(fn);
            }
        }
    }
    async init(port, controllers) {
        const routes = routeshelper_1.default.initControllerRoutes(express_1.default.Router(), controllers);
        this.addRoute(routes);
        this.server = http_1.default.createServer(this.express);
        this.registerUse(this.routes);
        this.express.set('port', port);
        this.server.listen(port);
        this.server.on('listening', () => {
            console.log(`O servidor esta rodando na porta ${port}`);
        });
        this.server.on('error', (error) => {
            console.error(`Ocorreu um erro no servidor, code: ${error.code} erroNo: ${error.errno}, message: ${error.message}, syscall: ${error.syscall}`);
        });
        process.on('unhandledRejection', (reason, p) => {
            console.error(`Ocorreu um Reject nao tratado (unhandledRejection), reason: ${reason}`);
            console.error(reason);
            console.error(p);
        });
    }
    addRoute(fn) {
        this.routes.push(fn);
        return this;
    }
}
exports.default = new HttpServer();
//# sourceMappingURL=httpserver.js.map