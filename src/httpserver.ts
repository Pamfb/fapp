import http, { Server } from 'http';
import express, { Application, Router } from 'express';
import GenericController from './modules/genericController';
import routeshelper from './modules/routeshelper';

class HttpServer {

    public server?: Server;
    protected express: Application;
    protected routes: any[] = [];

    constructor() {
        this.express = express();
    }

    private use(fn: any): Application {
        return this.express.use(fn);
    }

    private registerUse(fns: any[]): void {
        if (fns.length > 0) {
            for (const fn of fns) {
                this.use(fn);
            }
        }
    }

    public async init(port: number, controllers: GenericController[]): Promise<void> {
        const routes: Router[] = routeshelper.initControllerRoutes(express.Router(), controllers);
        this.addRoute(routes);

        this.server = http.createServer(this.express);

        this.registerUse(this.routes);

        this.express.set('port', port);
        this.server.listen(port);

        this.server.on('listening', () => {
            console.log(`O servidor esta rodando na porta ${port}`);
        });

        this.server.on('error', (error: NodeJS.ErrnoException) => {
            console.error(`Ocorreu um erro no servidor, code: ${error.code} erroNo: ${error.errno}, message: ${error.message}, syscall: ${error.syscall}`);
        });

        process.on('unhandledRejection', (reason, p) => {
            console.error(`Ocorreu um Reject nao tratado (unhandledRejection), reason: ${reason}`);
            console.error(reason);
            console.error(p);
        });
    }

    public addRoute(fn: any): this {
        this.routes.push(fn);
        return this;
    }
}

export default new HttpServer();
