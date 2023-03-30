export class Phonecases {

    public id?: number;
    public name: string;
    public quantity: number;
    public price: number;
    public employeeName: string;

    constructor(name: string, quantity: number, price: number, employeeName: string, id?: number) {
        if (id) {
            this.id = id;
        }
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.employeeName = employeeName;
    }

}