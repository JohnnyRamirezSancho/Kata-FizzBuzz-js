import { fizzbuzz, fizzbuzz2 } from "../src/scripts/FizzBuzz";

describe('FizzBuzz', () => {
    test('should return Fizz is divisible by three', () => {
        // Given
        const numb = 3;
        // When
        const result = fizzbuzz(numb);
        // Then
        expect(result).toBe("Fizz");
    });

    test('should return Buzz is divisible by five', () => {
        // Given
        const numb = 10;
        // When
        const result = fizzbuzz(numb);
        // Then
        expect(result).toBe("Buzz");
    });

    test('should return FizzBuzz is divisible by three and divisible for five', () => {
        // Given
        const numb = 15;
        // When
        const result = fizzbuzz(numb);
        // Then
        expect(result).toBe("FizzBuzz");
    });

    test('should return Fizz is divisible by three or have a three inside', () => {
        // Given
        const numb = 32;
        // When
        const result = fizzbuzz2(numb);
        // Then
        expect(result).toBe("Fizz");
    });

    test('should return Buzz is divisible by five or have a five inside', () => {
        // Given
        const numb = 52;
        // When
        const result = fizzbuzz2(numb);
        // Then
        expect(result).toBe("Buzz");
    });

    test('should return FizzBuzz', () => {
        // Given
        const numb = 53;
        // When
        const result = fizzbuzz2(numb);
        // Then
        expect(result).toBe("FizzBuzz");
    });


});