import { fizzbuzz } from "../src/scripts/FizzBuzz";

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

    
});