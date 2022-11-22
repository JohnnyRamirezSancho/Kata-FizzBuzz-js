export function fizzbuzz(numb) {
    if(numb % 3 == 0 && numb % 5 == 0) {
        return "FizzBuzz";
    }

    if(numb % 3 == 0) {
        return "Fizz";
    }

    if(numb % 5 == 0) {
        return "Buzz";
    }
}

export function fizzbuzz2(numb) {
    if((numb % 3 == 0 || numb.toString().indexOf("3") >= 0) && (numb % 5 == 0 || numb.toString().indexOf("5") >= 0)) {
        return "FizzBuzz";
    }

    if(numb % 3 == 0 || numb.toString().indexOf("3") >= 0) {
        return "Fizz";
    }

    if(numb % 5 == 0 || numb.toString().indexOf("5") >= 0) {
        return "Buzz";
    }
}