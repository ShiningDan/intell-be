// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGreeting from '../../../app/model/greeting';
import ExportIndex from '../../../app/model/index';
import ExportInsInfo from '../../../app/model/insInfo';
import ExportInsUser from '../../../app/model/insUser';

declare module 'egg' {
  interface IModel {
    Greeting: ReturnType<typeof ExportGreeting>;
    Index: ReturnType<typeof ExportIndex>;
    InsInfo: ReturnType<typeof ExportInsInfo>;
    InsUser: ReturnType<typeof ExportInsUser>;
  }
}
