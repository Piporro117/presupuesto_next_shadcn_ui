"use client"
import Carta from "@/components/gastos/cartas";
import FormularioDefinirPresupuesto from "@/components/gastos/formularioDefinirPresu";
import ModalDialog from "@/components/gastos/modalDialog";
import SeguidorGastos from "@/components/gastos/seguimientoGastos";
import { usePresupuestoStore } from "@/store";
import { useMemo } from "react";

export default function PageControlGastos() {

    // treamos del context para controlar que se muestra
    const budget = usePresupuestoStore(state => state.budget)

    // validamos que si haya presupuesto, cambia si cambia el presupuesto
    const presupuestoValido = useMemo(() => budget > 0, [budget])

    return (
        <div className="relative">

            <header className="bg-blue-600 py-8 max-h-72">
                <h1 className="uppercase text-center font-black text-4xl text-white">
                    Planififcador de Gastos
                </h1>
            </header>

            <div className="flex justify-center mt-6">

                {presupuestoValido ? (
                    <>
                        <Carta title="Seguimiento de Gastos">
                            <SeguidorGastos />
                        </Carta>
                        <div className="absolute top-[550px] right-20">
                            <ModalDialog />

                        </div>
                    </>
                )
                    :
                    (
                        <Carta title="Definir Presupuesto">
                            <FormularioDefinirPresupuesto />
                        </Carta>
                    )}


            </div>



        </div>
    )
}