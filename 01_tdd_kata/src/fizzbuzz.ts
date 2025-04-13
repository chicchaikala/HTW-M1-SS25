export function StageOneFizzbuzz(number: number): string {
    const divisibleByThree = number % 3 === 0;
    const divisibleByFive = number % 5 === 0;

    if (divisibleByThree && divisibleByFive)
        return "FizzBuzz";

    if (divisibleByFive)
        return "Buzz";

    if (divisibleByThree)
        return "Fizz";

    return number.toString();
}

export function StageTwoFizzBuzz(number: number): string {
    const numberString = number.toString();

    const divisibleByThree = number % 3 === 0;
    const divisibleByFive = number % 5 === 0;
    const containsThree = numberString.includes("3");
    const containsFive = numberString.includes("5");

    let returnString = "";

    if (divisibleByThree)
        returnString += "Fizz";

    if (containsThree)
        returnString += "Fizz";

    if (divisibleByFive)
        returnString += "Buzz";

    if (containsFive)
        returnString += "Buzz";

    if (!returnString)
        returnString += numberString;

    return returnString;
}