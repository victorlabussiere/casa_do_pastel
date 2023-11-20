import { OrderForm, Plate, PlateGroups, PlatesKinds } from "src/types";

export class CostumerPlate {
    private readonly _name: string;
    private readonly _group: PlateGroups;
    private readonly _kind: PlatesKinds;
    private readonly _observations: string;
    private readonly _quantity: number;
    private readonly _price: number;

    constructor(plate: Plate, costumerForm: OrderForm) {
        this._name = plate.title
        this._group = plate.category.group
        this._kind = plate.category.kind
        this._observations = costumerForm.observations
        this._quantity = costumerForm.quantity
        this._price = plate.price * costumerForm.quantity
    }

    get name() { return this._name }
    get price() { return this._price }
    get kind() { return this._kind }
    get group() { return this._group }
    get observations() { return this._observations }
    get quantity() { return this._quantity }
}