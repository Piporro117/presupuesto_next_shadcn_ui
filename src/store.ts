// archivo donde se almacena el store del presupuetos
import { create } from 'zustand'

// definimos los types de los states que tendra el storage
type PresupuestoState = {
    budget: number,
    setBudget:(budget: number) => void
}


// creamos el store inicializnaod los states y dando las funciones
export const usePresupuestoStore = create<PresupuestoState>((set) => ({
    // state de presupuesto
    budget: 0,
    setBudget: (budget) => set({budget})
}))

