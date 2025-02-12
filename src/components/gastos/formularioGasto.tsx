"use client"
import { formularioNuevoGastoSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select"
import { SelectValue } from "@radix-ui/react-select"
import { categorias } from "@/data"
import { Button } from "../ui/button"

export default function FormularioGasto(){
    
    // inferimos el type con zod
    const formulario = useForm<z.infer<typeof formularioNuevoGastoSchema>>({
        resolver: zodResolver(formularioNuevoGastoSchema),
        defaultValues: {
            nombreGasto: '',
            cantidad: '',
            categoria: ''
        }
    })

    // funcion de onSubmit del formulario
    function onSubmit(values: z.infer<typeof formularioNuevoGastoSchema>){
        console.log(values)
    }
    
    return (
        <Form {...formulario}>
            <form className="flex flex-col gap-2">

                {/** Campo de nombre del gasto */}
                <FormField 
                    control={formulario.control}
                    name="nombreGasto"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel> Nombre del Gasto </FormLabel>

                            <FormControl>
                                <Input placeholder="Ejem. Tamales, Cine" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/** Campo para poner la cantidad */}
                <FormField 
                    control={formulario.control}
                    name="cantidad"
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel> Cantidad de dinero </FormLabel>

                            <FormControl>
                                <Input type="number" placeholder="Ejem.300" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/** Select de categoria  */}
                <FormField 
                    control={formulario.control}
                    name="categoria"
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel> Categoria: </FormLabel>

                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona la catagoria" />
                                    </SelectTrigger>
                                </FormControl>

                                <SelectContent>
                                    {categorias.map(categoria => (
                                        <SelectItem key={categoria.id} value={categoria.id}> {categoria.nombre} </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <FormMessage />

                        </FormItem>
                    )}
                />

                {/** Boton de enviar */}
                <Button type="submit" className="uppercase font-bold">  Registrar Gasto </Button>

            </form>
        </Form>
    )
}