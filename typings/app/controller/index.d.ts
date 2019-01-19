// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLoan from '../../../app/controller/loan';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    loan: ExportLoan;
  }
}
