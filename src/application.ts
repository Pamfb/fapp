import 'reflect-metadata';
import Httpserver from './httpserver';
import { loadControllers } from './modules/controllerHelper';

const initApplication = async (): Promise<void> => {
  // try {
  //   await connectionHelper.connect();
  // } catch (err) {
  //   console.error(
  //     `FATAL: Erro na inicializacao do servidor http, o servidor nao sera iniciado, desc: ${err}`, ''
  //   );
  //   process.exit(1);
  // }
  
  try {
    await Httpserver.init(3000, loadControllers());
  } catch (err) {
    console.error(
      `FATAL: Erro na inicializacao do servidor http, o servidor nao sera iniciado, desc: ${err}`, ''
    );
    process.exit(2);
  }
};

initApplication();