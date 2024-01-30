import { sayHello } from "../src/say-hello";

describe('sayHello', function () {
    it("should return hello ahdian", function () {
        expect(sayHello("ahdian")).toBe("Hello ahdian");
    })
})