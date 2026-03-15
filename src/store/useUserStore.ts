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
  _hasHydrated: boolean;
  _hydrationError: string | null;
  seedLibbyData: () => void;
  setProfile: (child: string, parent: string, phonetic: string, grade: 'K' | 'G1' | 'G2' | 'G3') => void;
  updateHabit: (habit: string) => void;
  addStars: (amount: number) => void;
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

      setHasHydrated: (hydrated: boolean) => set({ _hasHydrated: hydrated }),
      setHydrationError: (error: string | null) => set({ _hydrationError: error }),
    }),
    {
      name: 'user-storage', // unique name for the storage key
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.error('Error during store hydration:', error);
          if (state) {
            state.setHydrationError(String(error));
          }
        } else {
          console.log('Store Hydrated', state ? `with stars: ${state.stars}` : 'no state');
          if (state) {
            state.setHasHydrated(true);
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