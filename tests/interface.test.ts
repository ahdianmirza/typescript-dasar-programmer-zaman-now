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
    })
})