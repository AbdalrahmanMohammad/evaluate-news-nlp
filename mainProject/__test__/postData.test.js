import { postData } from "../src/client/js/formHandler"

describe("Testing the posting Data functionality", () => {
    test("Testing the postData() function", () => {
        expect(postData).toBeDefined();
    })
});