import { atom } from 'recoil';
import { v1 } from 'uuid';

export const selectDayState = atom({
  key: `selectDay/`,
  default: new Date(),
});
 