// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCreditCardProducts from '../../../app/model/creditCardProducts';
import ExportGreeting from '../../../app/model/greeting';
import ExportHomeProduct from '../../../app/model/homeProduct';
import ExportHomeUser from '../../../app/model/homeUser';
import ExportIndex from '../../../app/model/index';
import ExportLoanProducts from '../../../app/model/loanProducts';
import ExportLoanUsers from '../../../app/model/loanUsers';

declare module 'egg' {
  interface IModel {
    CreditCardProducts: ReturnType<typeof ExportCreditCardProducts>;
    Greeting: ReturnType<typeof ExportGreeting>;
    HomeProduct: ReturnType<typeof ExportHomeProduct>;
    HomeUser: ReturnType<typeof ExportHomeUser>;
    Index: ReturnType<typeof ExportIndex>;
    LoanProducts: ReturnType<typeof ExportLoanProducts>;
    LoanUsers: ReturnType<typeof ExportLoanUsers>;
  }
}
