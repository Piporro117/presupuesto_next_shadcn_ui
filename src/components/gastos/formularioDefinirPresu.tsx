"use client"
import { z } from 'zod'


import { useForm } from "react-hook-form"
import { formularioDefinicionSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { usePresupuestoStore } from '@/store'

export default function FormularioDefinirPresupuesto(){

    // importamos el state de nuestro store
    const budget = usePresupuestoStore(state => state.budget)
    const setBudegt = usePresupuestoStore(state => state.setBudget)

    // definimos nuestro formulario con el schema que le asiganos
    const formulario = useForm<z.infer<typeof formularioDefinicionSchema>>({
        resolver: zodResolver(formularioDefinicionSchema),
        defaultValues: {
            presupuesto: ''
        }
    })

    // funcion handelerSubmit
    const onSubmit = (values: z.infer<typeof formularioDefinicionSchema>) => {
        
        // le pasamos el dinero al statet global de budegt
        setBudegt(+values.presupuesto)
        
        // resetamos nuestro formulario
        formulario.reset()
    }


    return (
        <Form {...formulario} >
            <form onSubmit={formulario.handleSubmit(onSubmit)} className='space-y-8'>

                {/** campo de presupuesto */}
                <FormField
                    control={formulario.control}
                    name='presupuesto'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel> Define tu Presupuesto: </FormLabel>
                            <FormControl>
                                <Input type='number' placeholder='Ejem. 300 ' {...field} />
                            </FormControl>

                            < FormMessage />
                        </FormItem>
                    )}
                />

                <Button type='submit' className='w-full uppercase font-bold'> Definir </Button>

            </form>
        </Form>
    )
}