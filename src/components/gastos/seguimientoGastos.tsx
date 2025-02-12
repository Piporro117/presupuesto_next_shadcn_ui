import { Button } from "../ui/button";
import GraficaGastos from "./graficaGastos";
import MostradorCantidad from "./mostradorCantidad";

export default function SeguidorGastos() {
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center">
                <GraficaGastos />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <Button className="w-full uppercase">
                    Resetear App
                </Button>

                <MostradorCantidad
                    label="Presupuesto"
                    cantidad={300}
                />

                <MostradorCantidad
                    label="Disponible"
                    cantidad={200}
                />

                <MostradorCantidad
                    label="Gastado"
                    cantidad={100}
                />
            </div>



        </div>
    )
}