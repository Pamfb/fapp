// import { Request, Router } from 'express';
import { Router } from 'express';

abstract class GenericController {
    
    public abstract initRoutes(expressRouter: Router): Router[];

    // public getAuthentication(req: Request): string {
    //   // utilizar para pegar dados do header e autenticação
    // }
}


export default GenericController;