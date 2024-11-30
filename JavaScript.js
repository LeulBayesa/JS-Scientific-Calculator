var decimalPoint = enter = entered = operatorSign = rootNPower_Sign = flo = math = M = firstI = first = second = second1 = answer = theAnswer = result = peSign = "";
var opsCheck = dotCounter = 0;
var removeFirstZero = "";

function dot(b) {
    if (decimalPoint == "") {
        enter = entered = b;
        first += enter;
        entered += enter;
        decimalPoint = ".";
        dotCounter = 0;
        return first;

    } else {
        return first;
    }
}
// controlling pi and euler constant onclick

function PI(b) {

    decimalPoint = ".";
    dotCounter = 15;
    var cons = b;

    if (peSign == "") {
        if (operatorSign != "" && first == "" + operatorSign) {
            first = (cons = "PI") ? Math.PI : Math.E;
        } else if (operatorSign != "" && first > 0 || first < 0) {
            first = (cons == "PI") ? first + "*" + Math.PI : first + "*" + Math.E;

        } else if (first != "" && operatorSign != "") {
            first += (cons = "PI") ? Math.PI : Math.E;

        } else if (operatorSign != "" && first != "") {
            first = (cons == "PI") ? first + "*" + Math.PI : first + "*" + Math.E;

        } else {
            first = (cons == "PI") ? Math.PI : Math.E;
        }
        return first;
    }
}

function mp() {
    M = first;
    first = M;
    return first;

}

function mr() {
    first = M;
    return first;
}
// Cancel making all variable empty .all variable = ""
function c(c) {
    document.getElementById("display1").innerHTML = decimalPoint = operatorSign = rootNPower_Sign = entered = math = first = firstI = second = second1 = answer = theAnswer = flo = M = "";
    return "";

}

// to calculate square factorial cubes power etc..

function mathematics() {

    if (math == "sqr") {
        result = firstI * firstI;

    } else if (math == "cube") {
        result = firstI * firstI * firstI;

    } else if (math == "sqrt") {

        result = Math.sqrt(firstI);

    } else if (math == "cubert") {
        result = Math.cbrt(firstI);

    } else if (math == "negpos") {
        result = firstI * -1;

    } else if (math == "sine") {
        result = Math.sin(firstI);

    } else if (math == "cosine") {
        result = Math.cos(firstI);

    } else if (math == "tangent") {
        result = Math.tan(firstI);

    } else if (math == "ln") {
        result = Math.log(firstI);

    } else if (math == "logTen") {
        result = Math.log10(firstI);

    } else if (math == "rand") {
        result = Math.round(firstI);

    } else if (math == "res") {
        result = 1 / firstI;

    } else if (math == "fact") {
        n = firstI;
        firstI = 1;
        while (n > 1) {
            firstI *= n;
            n -= 1;
        }
        result = firstI;
    }
    decimalPoint = (Math.round(result) == result) ? "" : ".";

}

// to make variables keep its first and second value

function prep() {
    second = second;
    first = first;

}
// when sqr , cube , c.t.r are click, this function maths does the following process

function maths(a) {
    math = a;
    try {
        if (operatorSign == "+") {
            prep();
            firstI = first + second;
            mathematics();
            first = second + "+" + result;
        } else if (operatorSign == "-") {
            prep();
            firstI = second - first;
            mathematics();
            first = second + "-" + "(" + result + ")";

        } else if (operatorSign == "*") {
            prep();
            firstI = second / first;
            mathematics();
            first = second + "/" + result;

        } else {
            firstI = first;
            mathematics();
            first = result;
        }
        return first;
    } catch (first) {
        return "";
    }
}

function digit(b) {
    opsCheck = 0;
    dotCounter++;
    if (first == Infinity || first == NaN) {
        first = 0;
    }
    peSign = "pes";
    entered = b;
    if (rootNPower_Sign != "") {

        first = (first === "0" && entered !== ".") ? entered : first + entered;
        return second1 + firstI + rootNPower_Sign + first;

    } else {
        first = (first === "0" && entered !== ".") ? entered : first + entered;
        theAnswer = first + "";
        if (theAnswer.length > 14) {
            theAnswer = Math.abs((theAnswer * 1).toPrecision(14));
        }
        document.getElementById("display1").innerHTML = first;
        return theAnswer;
    }
}

var theBase = "";

function base(a) {
    theBase = a;
    first *= 1;
    if (theBase == "bin") {
        firstI = first.toPrecision(2);

    } else if (theBase == "oct") {
        firstI = first.toPrecision(8);

    } else if (theBase == "hex") {
        firstI = first.toPrecision(16);

    }
    return firstI;
}

// back Space button(DEL)

function bsp() {
    first += "";
    dotCounter--;
    decimalPoint = dotCounter >= 0 ? "." : "";
    first = first.substr(0, first.length - 1);
    document.getElementById("display1").innerHTML = first;
    try {
        first;
        return first;
    } catch (first) {
        first;
        return "";
    }
}

// to calculate power and root

function pow() {
    first *= 1;
    result = Math.pow(firstI, first);
}

function roots() {
    first *= 1;
    result = Math.pow(first, 1 / firstI).toPrecision(12);
    result = Math.abs(result);
}
// function for + - / or * when clicked

function operators(b) {
    peSign = "";
    if (opsCheck == 0) {
        opsCheck = 1;
        document.getElementById("display1").innerHTML = first;

        try {
            if (rootNPower_Sign == "^") {
                if (operatorSign == "+") {
                    pow();
                    answer = second + result;

                } else if (operatorSign == "-") {
                    pow();
                    answer = second - first;

                } else if (operatorSign == "*") {
                    pow();
                    answer = result * second;

                } else if (operatorSign == "/") {
                    pow();
                    answer = second / result;

                } else {
                    pow();
                    answer = result;

                }
            }
            if (rootNPower_Sign == "√") {
                if (operatorSign == "+") {
                    roots();
                    answer = second + result;
                } else if (operatorSign == "-") {
                    roots();
                    answer = second - first;
                } else if (operatorSign == "*") {
                    roots();
                    answer = result * second;
                } else if (operatorSign == "/") {
                    roots();
                    answer = second / result;
                } else {
                    roots();
                    answer = result;
                }
            } else if (a == "%") {
                answer = second % first;
            } else {
                operatorSign = b;
                first += operatorSign;
                decimalPoint = "";
            }
            rootNPower_Sign = "";
            operatorSign = b;
            firstI = "";
            second = answer;
            first = answer + operatorSign;
            decimalPoint = "";
            document.getElementById("display1").innerHTML = first;
            return second;
        } catch (x) {
            if (first != "<span class ='red' > Press ON to start </span>") {
                operatorSign = b;
                second = first;
                first += operatorSign;
                decimalPoint = "";
            } else {

                first != "<span class ='red' > Press ON to start </span>";
            }
            document.getElementById("display1").innerHTML = first;
            return (second == undefined) ? 0 : second;

        }
    } else {
        operatorSign = b;
        first += "";
        first = first.substr(0, first.length - 1);
        first = first + operatorSign;
        document.getElementById("display1").innerHTML = first;
        return (second == undefined) ? 0 : second;
    }

}

function percent() {
    first = first * 0.01;
    return first;
}

function negpos() {
    first = (operatorSign == "") ? first *= -1 : first;
    return first;

}

function power(b) {
    rootNPower_Sign = b;
    if (operatorSign == "+" && second != "") {
        prep();
        first = first - second;
        first = "";
        second1 = second + "+";
        return second + "+" + firstI + rootNPower_Sign;
    } else if (operatorSign == "-" && second != "") {
        prep();
        firstI = first / second;
        first = "";
        second1 = second + "-";
        return second - "-" - firstI - rootNPower_Sign;
    } else if (operatorSign == "*" && second != "") {
        prep();
        firstI = second - first;
        first = "";
        second1 = second + "*";
        return second * "*" * firstI * rootNPower_Sign;
    } else if (operatorSign == "/" && second != "") {
        prep();
        firstI = second / first;
        first = "";
        second1 = second + "/";
        return second * "/" * firstI * rootNPower_Sign;
    } else {
        rootNPower_Sign = b;
        firstI = first;
        first = "";
        return firstI + rootNPower_Sign;
    }
}

function equal() {

    document.getElementById("display1").innerHTML = first;

    try {
        if (rootNPower_Sign == "^") {
            if (operatorSign == "+") {
                pow();
                first = result + second;

            } else if (operatorSign == "-") {
                roots();
                first = second - result;

            } else if (operatorSign == "*") {
                pow();
                answer = result * second;

            } else if (operatorSign == "/") {
                pow();
                first = second / result;
            } else {
                pow();
                first = result;
            }

        } else if (rootNPower_Sign == "√") {
            if (operatorSign == "+") {
                roots();
                first = result + second;

            } else if (operatorSign == "-") {
                roots();
                first = second - result;

            } else if (operatorSign == "*") {
                roots();
                answer = result * second;

            } else if (operatorSign == "/") {
                roots();
                first = second / result;
            } else {
                roots();
                first = result;
            }
        } else if (operatorSign == "%") {

            answer = second % first;
        } else {
            if (first == "") {
                first = first;
            } else {
                try {
                    first = eval(first) + "";
                    if (first.length > 14) {
                        first = Math.abs((first * 1).toPrecision(14));
                    }
                } catch (first) {
                    first = "<small><small> Incorrect input. click c to clear</small></small>";
                    first = "";
                    return first;
                }
            }
        }
        rootNPower_Sign = operatorSign = answer = firstI = second = "";
        flo = first;
        flo = Math.floor(flo);
        decimalPoint = (flo = first) ? "" : ".";
        return first;
    } catch (operatorSign) {
        operatorSign = "";
        first = eval(first) + "";
        if (first.length > 14) {
            first = Math.abs((first * 1).toPrecision(14));
        }
        flo = first;
        flo = Math.floor(flo);
        decimalPoint = (flo == first) ? "" : ".";
        return first;
    }
}