import { formatCurrency } from "@/utils"

type MostradorCantidadProps = {
    label: string,
    cantidad: number
}

export default function MostradorCantidad({ label , cantidad } : MostradorCantidadProps){
    return (
        <p className="text-2xl text-blue-600 font-bold">
            {label} {' '}
            <span className="font-black">{ formatCurrency( cantidad)}</span>
        </p>
    )
}