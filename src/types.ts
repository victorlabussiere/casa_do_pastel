
export type Category = {
    title: string,
    description: string,
    img_url: string,
    info: CategoryInfo
}

export type CategoryInfo = {
    kind: PlatesKinds,
    group: PlateGroups,
    name: string
}

export type PlateGroups = 'pastel' | 'tapioca' | 'acai'
export type PlatesKinds = 'doce' | 'salgado'

export type Plate = {
    id: number,
    title: string,
    description: string,
    category: {
        kind: PlatesKinds
        group: PlateGroups
    },
    price: number
}

export type OrderForm = {
    name: string,
    quantity: number,
    observations: string
}