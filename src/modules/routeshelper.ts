import { Router } from 'express';

import GenericController from './genericController';


class RoutesHelper {
  public initControllerRoutes(expressRouter: Router, controllers: GenericController[]): Router[] {
        
        const routes: Router[] = [];
        controllers.forEach(controller => {
            controller.initRoutes(expressRouter).forEach((route: Router) => {
                routes.push(route);
            });
        });
        return routes;
    }
}

export default new RoutesHelper();