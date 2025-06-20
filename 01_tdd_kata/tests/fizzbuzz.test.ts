import {describe, expect, test} from "@jest/globals";
import {
    FizzBuzz,
    FizzBuzzRules,
} from "../src/fizzbuzz";

function FizzBuzzConfig(config: number, number: number): FizzBuzzRules {
    const configObject = [
        {
            rules:
                [
                    {rule: number % 3 === 0, output: "Fizz"},
                    {rule: number % 5 === 0, output: "Buzz"},
                ]
        },
        {
            rules:
                [
                    {rule: number % 3 === 0, output: "Fizz"},
                    {rule: number.toString().includes("3"), output: "Fizz"},
                    {rule: number % 5 === 0, output: "Buzz"},
                    {rule: number.toString().includes("5"), output: "Buzz"},
                ]
        },
        {
            rules: [
                {rule: number % 7 === 0, output: "Bizz"},
                {rule: number % 3 === 0, output: "Fizz"},
            ]
        }
    ]

    return configObject[config]
}

describe("StageOneFizzBuzz", () => {
    const divisibleByNeither = [1, 2, 98, 64, 73]
    const divisibleByThree = [3, 6, 99, 12, 18]
    const divisibleByFive = [5, 10, 100, 40, 65]
    const divisibleByThreeAndFive = [15, 30, 90, 45, 75]

    const stage = 0;

    test("divisible by neither", () => {
        for (const number of divisibleByNeither) {
            expect(FizzBuzz(number, FizzBuzzConfig(stage, number))).toBe(number.toString());
        }
    })

    test("divisible by 3", () => {
        for (const number of divisibleByThree) {
            expect(FizzBuzz(number, FizzBuzzConfig(stage, number))).toBe("Fizz");
        }
    })

    test("divisible by 5", () => {
        for (const number of divisibleByFive) {
            expect(FizzBuzz(number, FizzBuzzConfig(stage, number))).toBe("Buzz");
        }
    })

    test("divisible by 3 and 5", () => {
        for (const number of divisibleByThreeAndFive) {
            expect(FizzBuzz(number, FizzBuzzConfig(stage, number))).toBe("FizzBuzz");
        }
    })
})

describe("StageTwoFizzBuzz", () => {
    const stage = 1;

    test("divisible by neither", () => {
        expect(FizzBuzz(1, FizzBuzzConfig(stage, 1))).toBe("1");
    })

    test("divisible by 3", () => {
        expect(FizzBuzz(21, FizzBuzzConfig(stage, 21))).toBe("Fizz");
    })

    test("contains 3", () => {
        expect(FizzBuzz(31, FizzBuzzConfig(stage, 31))).toBe("Fizz");
    })

    test("divisible and contains 3", () => {
        expect(FizzBuzz(33, FizzBuzzConfig(stage, 3))).toBe("FizzFizz");
    })

    test("divisible by 5", () => {
        expect(FizzBuzz(10, FizzBuzzConfig(stage, 10))).toBe("Buzz");
    })

    test("contains 5", () => {
        expect(FizzBuzz(52, FizzBuzzConfig(stage, 52))).toBe("Buzz");
    })

    test("divisible and contains 5", () => {
        expect(FizzBuzz(5, FizzBuzzConfig(stage, 5))).toBe("BuzzBuzz");
    })


    test("divisible and contains 5, and divisible by 3", () => {
        expect(FizzBuzz(53, FizzBuzzConfig(stage, 53))).toBe("FizzBuzz");
        expect(FizzBuzz(35, FizzBuzzConfig(stage, 35))).toBe("FizzBuzzBuzz");
        expect(FizzBuzz(51, FizzBuzzConfig(stage, 51))).toBe("FizzBuzz");
        expect(FizzBuzz(33, FizzBuzzConfig(stage, 33))).toBe("FizzFizz");
    })
})

describe("StageThree", () => {
    const stage = 2;

    test("divisible by neither", () => {
        expect(FizzBuzz(1, FizzBuzzConfig(stage, 1))).toBe("1");
    })

    test("divisible by 7", () => {
        expect(FizzBuzz(7, FizzBuzzConfig(stage, 7))).toBe("Bizz");
    })

})