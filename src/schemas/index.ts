/**
 * Archivo donde se encontraran los distontos Schemas para las cosas
 */
import { z } from'zod'

// Schema para el formulario de definir presupuesto
export const formularioDefinicionSchema = z.object({
    presupuesto: z.string().min(1, "El presupuesto es obligatorio")
})

// Schema para el formulario de creacion de un nuevo Gasto
export const formularioNuevoGastoSchema = z.object({
    nombreGasto: z.string().min(1, "El nombre del gasto es obligatorio"),
    cantidad: z.string().min(1, "La cantidad es necesaria"),
    categoria: z.string().min(1, "Debes seleccionar una categoria")
})