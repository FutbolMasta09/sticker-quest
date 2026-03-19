import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FamilyMember {
  name: string;
  role: string;
}

interface UserState {
  childName: string;
  parentName: string;
  phoneticName: string;
  currentGrade: 'K' | 'G1' | 'G2' | 'G3';
  activeHabit: string;
  stars: number;
  familyMembers: FamilyMember[];
  // 0 = home spotlight, 1 = quest motor task, 2 = quest star buttons, 3 = done
  tutorialStep: number;
  _hasHydrated: boolean;
  _hydrationError: string | null;
  seedLibbyData: () => void;
  setProfile: (child: string, parent: string, phonetic: string, grade: 'K' | 'G1' | 'G2' | 'G3') => void;
  updateHabit: (habit: string) => void;
  addStars: (amount: number) => void;
  advanceTutorial: () => void;
  skipTutorial: () => void;
  setHasHydrated: (hydrated: boolean) => void;
  setHydrationError: (error: string | null) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      childName: '',
      parentName: '',
      phoneticName: '',
      currentGrade: 'K',
      activeHabit: 'Tidying Up',
      stars: 0,
      familyMembers: [],
      tutorialStep: 0,
      _hasHydrated: false,
      _hydrationError: null,

      seedLibbyData: () => set({
        childName: 'Libby',
        parentName: 'Ryan',
        phoneticName: 'Lib-ee',
        currentGrade: 'K',
        familyMembers: [
          { name: 'Amber', role: 'Mother' },
          { name: 'Brandon', role: 'Father' }
        ]
      }),

      setProfile: (child, parent, phonetic, grade) => set({
        childName: child,
        parentName: parent,
        phoneticName: phonetic,
        currentGrade: grade
      }),

      updateHabit: (habit) => set({ activeHabit: habit }),

      addStars: (amount: number) => set((state) => ({ stars: state.stars + amount })),

      advanceTutorial: () => set((state) => ({ tutorialStep: Math.min(state.tutorialStep + 1, 3) })),
      skipTutorial: () => set({ tutorialStep: 3 }),

      setHasHydrated: (hydrated: boolean) => set({ _hasHydrated: hydrated }),
      setHydrationError: (error: string | null) => set({ _hydrationError: error }),
    }),
    {
      name: 'user-storage', // unique name for the storage key
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state, error) => {
        // Always mark hydration as complete, even if there's an error
        if (state) {
          state.setHasHydrated(true);
        }
        
        if (error) {
          console.error('Error during store hydration:', error);
          if (state) {
            state.setHydrationError(String(error));
          }
        } else {
          console.log('Store Hydrated', state ? `with stars: ${state.stars}` : 'no state');
          if (state) {
            state.setHydrationError(null);
          }
        }
        // Verify AsyncStorage is available
        if (typeof AsyncStorage !== 'object') {
          console.error('AsyncStorage is not properly linked');
          if (state) {
            state.setHydrationError('AsyncStorage not linked');
          }
        }
      },
    }
  )
);