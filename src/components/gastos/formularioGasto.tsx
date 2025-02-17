"use client"
import { formularioNuevoGastoSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, ToastFormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select"
import { SelectValue } from "@radix-ui/react-select"
import { categorias } from "@/data"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar } from "../ui/calendar"
import { CalendarPlus2 } from "lucide-react"

export default function FormularioGasto() {

    // inferimos el type con zod
    const formulario = useForm<z.infer<typeof formularioNuevoGastoSchema>>({
        resolver: zodResolver(formularioNuevoGastoSchema),
        defaultValues: {
            nombreGasto: '',
            cantidad: '',
            categoria: '',
            fechaGasto: new Date()
        }
    })

    // funcion de onSubmit del formulario
    function onSubmit(values: z.infer<typeof formularioNuevoGastoSchema>) {
        // valores de ejenplo
        formulario.reset({
            nombreGasto: 'Gasto Ejemplo',
            cantidad: '30000',
            categoria: '1',
            fechaGasto: new Date(2023, 0, 1)
        })

        //  convertir el tipado de la fecha de string a fecha
        const fechaGasto = new Date(values.fechaGasto)

        console.log(fechaGasto)

        console.log(values)
    }

    

    return (
        <Form {...formulario}>
            <form className="flex flex-col gap-2" onSubmit={formulario.handleSubmit(onSubmit)}>

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

                            <ToastFormMessage />
                        </FormItem>
                    )}
                />

                {/** Campo para poner la cantidad */}
                <FormField
                    control={formulario.control}
                    name="cantidad"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel> Cantidad de dinero </FormLabel>

                            <FormControl>
                                <Input type="number" placeholder="Ejem.300" {...field} />
                            </FormControl>

                            <ToastFormMessage />
                        </FormItem>
                    )}
                />

                {/** Select de categoria  */}
                <FormField
                    control={formulario.control}
                    name="categoria"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel> Categoria: </FormLabel>

                            <Select onValueChange={field.onChange} value={field.value}>
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

                            <ToastFormMessage />

                        </FormItem>
                    )}
                />

                {/** Calendario  */}
                <FormField
                    control={formulario.control}
                    name="fechaGasto"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel> Fecha del Gasto: </FormLabel>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button variant={"outline"} className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                            {field.value ? (
                                                format(field.value, "dd/MMMM/yyyy")
                                            ) : (
                                                <span> Escoge una fecha </span>
                                            )}
                                            <CalendarPlus2 />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>


                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-02")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>

                            <ToastFormMessage />
                        </FormItem>
                    )}
                />

                {/** Boton de enviar */}
                <Button type="submit" className="uppercase font-bold">  Registrar Gasto </Button>

            </form>
        </Form>
    )
}