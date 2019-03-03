// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCreditCard from '../../../app/controller/creditCard';
import ExportHome from '../../../app/controller/home';
import ExportIns from '../../../app/controller/ins';
import ExportLoan from '../../../app/controller/loan';

declare module 'egg' {
  interface IController {
    creditCard: ExportCreditCard;
    home: ExportHome;
    ins: ExportIns;
    loan: ExportLoan;
  }
}
