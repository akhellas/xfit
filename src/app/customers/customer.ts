export class Customer {
    public name: string;
    public surname: string;
    public contactInfo: ContactInfo[];
    public birthDay: Date;
    public address: Address;
}
export class ContactInfo {
    public description: ContactTypes;
    public phone: string;
}

export class Address {
    public address: string;
    public number: number;
    public postalCode: number;
    public Region: string;
}
export enum ContactTypes {
    Mobile = 0,
    Home = 1,
    Work = 2,
    Emergency = 3
}