import { create } from 'zustand';

interface MasteryState {
  autoVerify: boolean;
  toggleVerificationMode: () => void;
}

export const useMasteryStore = create<MasteryState>((set) => ({
  autoVerify: false,
  toggleVerificationMode: () => set((state) => ({ autoVerify: !state.autoVerify })),
}));