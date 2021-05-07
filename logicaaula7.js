
var idade = prompt("digite sua idade")
if (idade>=18)
{
    console.log("é maior de idade");
}else
{
    console.log("é menor de idade");
}

function maior()
{

var num1 = prompt("digite o valor 1");
var num2 = prompt("digite o valor 2");

num1 = parseInt(num1);
num2 = parseInt(num2);

console.log (num1);
console.log (num2);

    if (num1==num2)
    {
        console.log("os valores são iguais");
        
    }
    else if (num1 > num2)
    { 
    console.log("o valor" + num + "é o maior");
    } else
    {
        console.log("o valor" + num2 + "é o maior");
    }

}