"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const genericController_1 = __importDefault(require("../genericController"));
class FirstController extends genericController_1.default {
    initRoutes(expressRouter) {
        const routes = [];
        routes.push(expressRouter.get('/', (req, res) => {
            res.send('Olá!');
            console.info('Olá respondido');
        }));
        routes.push(expressRouter.get('/v1/firstroute', this.firstfunction));
        return routes;
    }
    async firstfunction(req, res) {
        try {
            res.send('ok');
        }
        catch (err) {
            console.log(err);
            res.send(err.message);
        }
    }
}
exports.default = new FirstController();
//# sourceMappingURL=firstController.js.map