export class UtilitesService {

    constructor() {

    }

    static splitCamelCase(str: string) {
        var newWord = str[0];

        for (let i = 1; i < str.length; i++) {
            var nextIsUpperCase = str[i + 1] == null || str[i + 1] == str[i + 1].toUpperCase();
            if (!nextIsUpperCase && str[i] == str[i].toUpperCase()) {
                newWord += " ";
            }
            newWord += str[i];
        }
        return newWord;
    }

    static enumToString<T extends number>(_enum: any, index: number) {
        return this.splitCamelCase(_enum[index]);
    }

    static convertNamesAndValues<T extends number>(_enum: any) {
        return this.convertEnumString(_enum).map(n => ({ Description: this.splitCamelCase(n), id: _enum[n] as T }));
    }

    static convertEnumString(_enum: any) {
        return this.getValues(_enum).filter(v => typeof v === "string") as string[];
    }

    static convertEnumNumber<T extends number>(_enum: any) {
        return this.getValues(_enum).filter(v => typeof v === "number") as T[];
    }

    private static getValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }

    public formatDate(_date: Date): string {
        var newDate = new Date(_date);
        return newDate.getFullYear() + "-" + ("0" + (newDate.getMonth() + 1)).slice(-2) + "-" + ("0" + newDate.getDate()).slice(-2);
    }

    public addMonths(_date: string, months: number): Date {
        if (_date && months) {
            var date = new Date(_date);
            date.setMonth(date.getMonth() + months);
            return date;
        }
        return new Date();

    }

}