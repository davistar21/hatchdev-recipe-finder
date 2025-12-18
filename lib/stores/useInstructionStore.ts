import {create} from "zustand";
import {nanoid}  from "nanoid";

export interface Instruction {
    id: string;
    text: string;
}

interface InstructionStore {
    instruction: Instruction[];

    addInstruction: () => Promise<void>;
    updateInstruction: (id: string, text: string) => Promise<void>;
    deleteInstruction: (id: string) => Promise<void>;
};

export const useInstructionStore = create<InstructionStore>((set) => ({
   instruction: [
         {id: nanoid(), text: "Initial instruction"}
   ],

   addInstruction: async () => {
       set((state) => ({
           instruction: [...state.instruction, {id: nanoid(), text: ""}]
       }));
   },

   updateInstruction: async (id: string, text: string) => {
       set((state) => ({
           instruction: state.instruction.map((inst) =>
               inst.id === id ? {...inst, text} : inst
           )
       }));
   },

   deleteInstruction: async (id: string) => {
       set((state) => ({
           instruction: state.instruction.filter((inst) => inst.id !== id)
       }));
   },
}));