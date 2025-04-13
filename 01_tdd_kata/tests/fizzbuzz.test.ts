import {describe, expect, test} from "@jest/globals";
import {StageOneFizzbuzz, StageTwoFizzBuzz} from "../src/fizzbuzz";

describe("StageOneFizzBuzz", () => {
    const divisibleByNeither = [1, 2, 98, 64, 73]
    const divisibleByThree = [3, 6, 99, 12, 18]
    const divisibleByFive = [5, 10, 100, 40, 65]
    const divisibleByThreeAndFive = [15, 30, 90, 45, 75]

    test("divisible by neither", () => {
        for (const number of divisibleByNeither) {
            expect(StageOneFizzbuzz(number)).toBe(number.toString());
        }
    })

    test("divisible by 3", () => {
        for (const number of divisibleByThree) {
            expect(StageOneFizzbuzz(number)).toBe("Fizz");
        }
    })

    test("divisible by 5", () => {
        for (const number of divisibleByFive) {
            expect(StageOneFizzbuzz(number)).toBe("Buzz");
        }
    })

    test("divisible by 3 and 5", () => {
        for (const number of divisibleByThreeAndFive) {
            expect(StageOneFizzbuzz(number)).toBe("FizzBuzz");
        }
    })
})

describe("StageTwoFizzBuzz", () => {
    test("divisible by neither", () => {
        expect(StageTwoFizzBuzz(1)).toBe("1");
    })

    test("divisible by 3", () => {
        expect(StageTwoFizzBuzz(21)).toBe("Fizz");
    })

    test("contains 3", () => {
        expect(StageTwoFizzBuzz(31)).toBe("Fizz");
    })

    test("divisible and contains 3", () => {
        expect(StageTwoFizzBuzz(33)).toBe("FizzFizz");
    })

    test("divisible by 5", () => {
        expect(StageTwoFizzBuzz(10)).toBe("Buzz");
    })

    test("contains 5", () => {
        expect(StageTwoFizzBuzz(52)).toBe("Buzz");
    })

    test("divisible and contains 5", () => {
        expect(StageTwoFizzBuzz(5)).toBe("BuzzBuzz");
    })

    test("divisible and contains 5, and divisible by 3", () => {
        expect(StageTwoFizzBuzz(53)).toBe("FizzBuzz");
        expect(StageTwoFizzBuzz(35)).toBe("FizzBuzzBuzz");
        expect(StageTwoFizzBuzz(51)).toBe("FizzBuzz");
        expect(StageTwoFizzBuzz(33)).toBe("FizzFizz");
    })
})