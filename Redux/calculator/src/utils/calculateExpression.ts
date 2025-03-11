const calculateExpression = (expression: string): number => {
    const applyOperator = (a: number, b: number, operator: string): number => {
        switch (operator) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/":
                if (b === 0) throw new Error();
                return a / b;
            case "%":
                if (b === 0) throw new Error();
                return a % b;
            default: throw new Error();
        }
    };

    const evaluate = (expression: string): number => {
        let numbers: number[] = [];
        let operators: string[] = [];
        let number = "";

        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];
            if ((char >= "0" && char <= "9") || char === ".") {
                number += char;
            } else if (char === "(") {
                let end = i, openBrackets = 1;
                while (end + 1 < expression.length && openBrackets > 0) {
                    end++;
                    if (expression[end] === "(") openBrackets++;
                    if (expression[end] === ")") openBrackets--;
                }
                if (openBrackets !== 0) throw new Error();

                let innerResult = evaluate(expression.substring(i + 1, end));
                numbers.push(innerResult);
                i = end;
            } else {
                if (number !== "") {
                    numbers.push(parseFloat(number));
                    number = "";
                }
                if (char === ")") continue;
                operators.push(char);
            }
        }

        if (number !== "") numbers.push(parseFloat(number));
        if (numbers.length === 0) throw new Error();

        let i = 0;
        while (i < operators.length) {
            if (operators[i] === "*" || operators[i] === "/" || operators[i] === "%") {
                let result = applyOperator(numbers[i], numbers[i + 1], operators[i]);
                numbers.splice(i, 2, result);
                operators.splice(i, 1);
            } else {
                i++;
            }
        }

        let result = numbers[0];
        for (let j = 0; j < operators.length; j++) {
            result = applyOperator(result, numbers[j + 1], operators[j]);
        }

        return Number(result.toFixed(10));
    };

    return evaluate(expression);
};

export default calculateExpression;
