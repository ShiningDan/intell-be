// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportIns from '../../../app/controller/ins';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    ins: ExportIns;
  }
}
