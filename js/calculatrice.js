function addition(a,b) {
    return a+b
}
addition(564, 634)

function soustration(a,b) {
    return a-b
}
soustration(9867, 6547)

function multiplication(a,b) {
    return a*b
}
multiplication(345, 657)

function division(a,b) {
    return a/b
}
division (345, 76)

let calculatrice = '+'

switch(calculatrice) {
    case '+':
        addition(50, 50);
        break;
    case '-':
        soustration(200, 100);
        break;
    case '*':
        multiplication(10, 10);
        break;
    case '/':
        division(1000, 100);
        break;

}

