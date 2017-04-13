export class Customer {
    public name: string;
    public surname: string;
    public contactInfo: ContactInfo;
    public birthday: Date;
    public address: Address;
    constructor() {
        this.contactInfo = new ContactInfo();
        this.address = new Address();
    }
}
export class ContactInfo {
    public description: string;
    public phone: string;
}

export class Address {
    public address: string;
    public number: string;
    public postalCode: number;
    public Region: string;
}
export enum ContactTypes {
    Κινητό = 0,
    Σπίτι = 1,
    Εργασίας = 2,
    Ανάγκης = 3
}