import { create } from 'zustand'
import {
   evaluate
  } from 'mathjs'
interface CalculationState {
  num: string;
  add: (newnum: string) => void;
  reset:()=>void;
  calculate:()=>void;
}

export const calculationStore = create<CalculationState>((set) => ({
  num: "",
  add: (newnum) => set((state) => ({ num: state.num + newnum })),
  reset:()=>set(()=>({num:""})),
  calculate:()=>set((state)=>({num:evaluate(state.num.replace("x","*").replace("%","/0.01"))}))
}));
