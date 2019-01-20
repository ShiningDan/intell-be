// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGreeting from '../../../app/model/greeting';
import ExportIndex from '../../../app/model/index';
import ExportInsInsInfo from '../../../app/model/ins/insInfo';
import ExportInsInsUser from '../../../app/model/ins/insUser';

declare module 'egg' {
  interface IModel {
    Greeting: ReturnType<typeof ExportGreeting>;
    Index: ReturnType<typeof ExportIndex>;
    Ins: {
      InsInfo: ReturnType<typeof ExportInsInsInfo>;
      InsUser: ReturnType<typeof ExportInsInsUser>;
    }
  }
}
