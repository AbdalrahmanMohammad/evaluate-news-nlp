import { checkForUrl } from "../src/client/js/urlChecker";

describe("Testing the URL checker functionality", () => {
    
    test("checkForUrl is defined", () => {
        expect(checkForUrl).toBeDefined();
    });

    test("Testing with an empty string", () => {
        const input = "";
        const result = checkForUrl(input);
        expect(result).toBe(false);
    });

    test("Testing with a valid URL", () => {
        const input = "https://facebook.com";
        const result = checkForUrl(input);
        expect(result).toBe(true);
    });

    test("Testing with an invalid URL", () => {
        const input = "htps://facebook.com"; // Misspelled 'https'
        const result = checkForUrl(input);
        expect(result).toBe(false);
    });
});
