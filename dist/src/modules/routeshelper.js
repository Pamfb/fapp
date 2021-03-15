"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoutesHelper {
    initControllerRoutes(expressRouter, controllers) {
        const routes = [];
        controllers.forEach(controller => {
            controller.initRoutes(expressRouter).forEach((route) => {
                routes.push(route);
            });
        });
        return routes;
    }
}
exports.default = new RoutesHelper();
//# sourceMappingURL=routeshelper.js.map