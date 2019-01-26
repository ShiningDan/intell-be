// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/service/home';
import ExportLoan from '../../../app/service/loan';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    home: ExportHome;
    loan: ExportLoan;
    test: ExportTest;
  }
}
