import { PlateGroups, PlatesKinds } from "../../../plates"

export type Category = {
    title: string,
    description: string,
    img_url: string,
    category: {
        kind: PlatesKinds,
        group: PlateGroups
        name: string
    }
}

export const CATEGORIES: Category[] = [
    {
        title: 'Pastel',
        description: "Pastéis doces e salgadas feitos na hora!",
        img_url: 'assets/PNGs/pasteis_icon.png',
        category: {
            kind: 'salgado',
            group: 'pastel',
            name: 'Pastéis'
        }
    },
    {
        title: 'Tapioca',
        description: "Tapiocas doces e salgadas feitas na hora!",
        img_url: 'assets/PNGs/tapioca_icon.png',
        category: {
            kind: 'salgado',
            group: 'tapioca',
            name: 'Tapiocas'
        }
    },
    {
        title: 'Açaí',
        description: "Diversos acompanhamentos para seu açaí!",
        img_url: 'assets/PNGs/acai_icon.png',
        category: {
            kind: 'doce',
            group: 'acai',
            name: 'Açaí'
        }
    },
]
