/**
 * Archivo donde se rrealizan funciones que se utilizaran en varios programas
 */

export function formatCurrency(cantidad: number){
    return new Intl.NumberFormat('es-US', { style: 'currency', currency:'USD'}).format(cantidad)
}