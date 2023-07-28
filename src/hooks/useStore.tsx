import { create } from 'zustand';
import { BearState } from '../types/Bear';

//只要更動state就需要呼叫set參數
const useBear = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  reset: () => set(() => ({ bears: 0 })),
}));

export default useBear;
