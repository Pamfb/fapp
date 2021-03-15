import GenericController from './genericController';
import firstController from './firstModule/firstController';

export function loadControllers(): GenericController[] {
  return [
    firstController
  ];
}