describe('any', () => {
    it ('should support in typescript', () => {
        const person: any = {
            id: 1,
            name: "Ahdian Mirza Azri",
            age: 30
        }

        person.age = 35;
        person.address = "Indonesia";

        console.info(person);
    })
})