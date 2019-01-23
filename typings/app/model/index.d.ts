// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGreeting from '../../../app/model/greeting';
import ExportIndex from '../../../app/model/index';
import ExportCreditCardCardActivity from '../../../app/model/creditCard/cardActivity';
import ExportCreditCardCardActRela from '../../../app/model/creditCard/cardActRela';
import ExportCreditCardCardCardRela from '../../../app/model/creditCard/cardCardRela';
import ExportCreditCardCardInfo from '../../../app/model/creditCard/cardInfo';
import ExportCreditCardCardUser from '../../../app/model/creditCard/cardUser';
import ExportInsInsInfo from '../../../app/model/ins/insInfo';
import ExportInsInsUser from '../../../app/model/ins/insUser';

declare module 'egg' {
  interface IModel {
    Greeting: ReturnType<typeof ExportGreeting>;
    Index: ReturnType<typeof ExportIndex>;
    CreditCard: {
      CardActivity: ReturnType<typeof ExportCreditCardCardActivity>;
      CardActRela: ReturnType<typeof ExportCreditCardCardActRela>;
      CardCardRela: ReturnType<typeof ExportCreditCardCardCardRela>;
      CardInfo: ReturnType<typeof ExportCreditCardCardInfo>;
      CardUser: ReturnType<typeof ExportCreditCardCardUser>;
    }
    Ins: {
      InsInfo: ReturnType<typeof ExportInsInsInfo>;
      InsUser: ReturnType<typeof ExportInsInsUser>;
    }
  }
}
