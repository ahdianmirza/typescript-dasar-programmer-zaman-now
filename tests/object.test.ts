describe ('Object', () => {
    it ('should support in typescript', () => {
        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Ahdian"
        };

        console.info("Person: ", person);

        person.id = "2";
        person.name = "Mirza"
        console.info("Person: ", person);
    })
})