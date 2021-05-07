function imprimir()
{
var inicial = 0;
var final = 5;

while (inicial <= final)
{
    console.log (inicial);
    inicial = inicial + 1;
}
}

function reverso()
{
var inicial = 0;
var final = 8;

while (final >= inicial)
{
    console.log (final);
    final = final - 1;
}
}

function imprimirfor()
{
for(var inicial = o;inicial <=5;inicial = inicial = 1)
{
console.log(inicial);
}
}
function fatorial()
{
    var num = prompt (" digite o num inicial"); //4
    num = parseInt(num);
    var total = 1;

// 4! = 4 * 3 * 2 * 1 = 24
while (num>1)
{
total = total * num;
num =num -1; // 3
//num -= 1;
// num --;
}
console.log("o valor do fatorial: " +total);
}