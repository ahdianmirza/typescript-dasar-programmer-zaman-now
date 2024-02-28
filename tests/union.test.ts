describe('Union Type', () => {
    it ('should support in typescript', () => {
        let sample: number | string | boolean = "Ahdian";
        console.info("Ahdian: ", sample);

        sample = 100;
        console.info("100: ", sample);

        sample = true;
        console.info("true: ", sample);
    })

    it ('should support typeof operator', () => {
        const process = (value: number | string | boolean) => {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Ahdian")).toBe("AHDIAN");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    })
})