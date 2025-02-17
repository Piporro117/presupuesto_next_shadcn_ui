/** Archivo donde se encuntran los types utilizados 
 * para varios componenetes de este programa
 */

// type de un gasto
export type Gasto = {
    id: string, 
    nombreGasto: string,
    cantidad: number,
    categoria: string
    fechaGasto: Date
}

// creamos un type para gasto de borrador sin id
export type GastoBorrador = Omit<Gasto, 'id'>

// type de categoria
export type Categoria = {
    id: string,
    nombre: string,
    icon: string
}