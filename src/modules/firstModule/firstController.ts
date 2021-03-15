import { Request, Response, Router } from 'express';
import GenericController from '../genericController';

class FirstController extends GenericController {

  public initRoutes(expressRouter: Router): Router[] {
    const routes: Router[] = [];
    routes.push(expressRouter.get('/', (req: Request, res: Response) => {
      res.send('Olá!');
      console.info('Olá respondido');
    }));
    routes.push(expressRouter.get('/v1/firstroute', this.firstfunction));
    
    return routes;
  }

  public async firstfunction(req: Request, res: Response): Promise<any> {
    try {
      res.send('ok');
    } catch (err) {
      console.log(err)
      res.send(err.message);
    }
  }
}

export default new FirstController();
