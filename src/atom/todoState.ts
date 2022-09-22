import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { v1 } from 'uuid';

const { persistAtom } = recoilPersist();

export const todoState = atom({
  key: `todoListState/${v1}`,
  default: {
    day: new Date(),
    title: '',
    content: '',
  },
  effects_UNSTABLE: [persistAtom],
});
