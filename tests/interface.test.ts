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
    })
})