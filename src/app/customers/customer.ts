export class Customer {
    public name: string;
    public surname: string;
    public contactInfo: ContactInfo;
    public birthday: Date;
    public residenceInfo: Address;
    constructor() {
        this.residenceInfo = new Address();
        this.contactInfo = new ContactInfo();
        this.contactInfo.description = ContactTypes.Κινητό;
    }
}
export class ContactInfo {
    public description: ContactTypes;
    public phone: string;
    constructor() {
       
    }
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