// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportCreditCard from '../../../app/service/creditCard';
import ExportHome from '../../../app/service/home';
import ExportIns from '../../../app/service/ins';
import ExportLoan from '../../../app/service/loan';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    creditCard: ExportCreditCard;
    home: ExportHome;
    ins: ExportIns;
    loan: ExportLoan;
  }
}
