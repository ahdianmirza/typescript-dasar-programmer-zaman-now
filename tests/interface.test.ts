import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller"

describe ('Interface', () => {
    it ('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: "Toko ABC",
            nib: "123123",
            npwp: "32464"
        };

        seller.name = "Toko Ahdian",
        console.info(seller);
    });

    it ('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(2,2)).toBe(4);
    });

    it ('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Ahdian", "Mirza", "Azri"];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });

    it ('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            name: "Ahdian",
            address: "Bogor"
        };

        expect(dictionary["name"]).toBe("Ahdian");
        expect(dictionary["address"]).toBe("Bogor");
    });

    it ('should support extending interface', () => {
        const employee: Employee = {
            id: "1",
            name: "Ahdian",
            division: "IT"
        };
        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Mirza",
            division: "IT",
            numberOfEmployees: 10,
        };
        console.info(manager);
    });

    it ('should support function in interface', () => {
        interface Person {
            name: string;
            sayHello(name: string): string
        }

        const person: Person = {
            name: "Ahdian",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Budi"));
    });

    it ('should support intersection interface', () => {
        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Ahdian"
        }

        console.info(domain);
    })
})