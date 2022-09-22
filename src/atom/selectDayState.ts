import { atom } from 'recoil';
import { v1 } from 'uuid';

export const selectDayState = atom({
  key: `selectDay/${v1}`,
  default: new Date(),
});
