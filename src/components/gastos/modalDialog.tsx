import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Plus } from 'lucide-react'
import FormularioGasto from "./formularioGasto"

export default function ModalDialog() {

    return (
        <Dialog>
            <DialogTrigger className="bg-blue-600 rounded-full p-4 text-white">
                <Plus className="text-4xl" />  
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="uppercase text-center"> Nuevo Gasto </DialogTitle>
                </DialogHeader>

                <FormularioGasto />

                <DialogClose className="w-7">
                    <p className="bg-black text-white font-bold uppercase w-fit h-fit rounded-lg p-1 text-sm"> Cancelar </p>
                </DialogClose>

            </DialogContent>


            <DialogFooter>
                
            </DialogFooter>


        </Dialog>

    )
}