// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCardActRela from '../../../app/model/cardActRela';
import ExportCardActivity from '../../../app/model/cardActivity';
import ExportCardCardRela from '../../../app/model/cardCardRela';
import ExportCardInfo from '../../../app/model/cardInfo';
import ExportCardUser from '../../../app/model/cardUser';
import ExportGreeting from '../../../app/model/greeting';
import ExportHomeProduct from '../../../app/model/homeProduct';
import ExportHomeUser from '../../../app/model/homeUser';
import ExportIndex from '../../../app/model/index';
import ExportInsInfo from '../../../app/model/insInfo';
import ExportInsUser from '../../../app/model/insUser';
import ExportLoanProducts from '../../../app/model/loanProducts';
import ExportLoanUsers from '../../../app/model/loanUsers';

declare module 'egg' {
  interface IModel {
    CardActRela: ReturnType<typeof ExportCardActRela>;
    CardActivity: ReturnType<typeof ExportCardActivity>;
    CardCardRela: ReturnType<typeof ExportCardCardRela>;
    CardInfo: ReturnType<typeof ExportCardInfo>;
    CardUser: ReturnType<typeof ExportCardUser>;
    Greeting: ReturnType<typeof ExportGreeting>;
    HomeProduct: ReturnType<typeof ExportHomeProduct>;
    HomeUser: ReturnType<typeof ExportHomeUser>;
    Index: ReturnType<typeof ExportIndex>;
    InsInfo: ReturnType<typeof ExportInsInfo>;
    InsUser: ReturnType<typeof ExportInsUser>;
    LoanProducts: ReturnType<typeof ExportLoanProducts>;
    LoanUsers: ReturnType<typeof ExportLoanUsers>;
  }
}
