
interface FizzRule {
    rule: boolean;
    output: string;
}

export interface FizzBuzzRules {
    rules: FizzRule[]
}

export function FizzBuzz(number: number, rules: FizzBuzzRules) {
    let returnString = ""

    for (const rule of rules.rules) {
        if (rule.rule)
            returnString += rule.output;
    }

    if (!returnString)
        returnString += number;

    return returnString;
}