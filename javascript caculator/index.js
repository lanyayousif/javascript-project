let input=document.getElementById('input');
let  button=Array.from(document.querySelectorAll('button'));

let buttonText;
let inputvalue;
let resuldisaplay=false;
// operator
button.map(element => {
    element.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        switch(buttonText){
            case 'C':
                input.innerText='';
                break;
            case '=':
                calculate(input.innerText);
                break;
            default:
                input.innerText+=buttonText;
               break; 
        }

        console.log(buttonText);

    });
    
});



function calculate(number){
    
        const element = number;  
        var operators = element.replace(/[0-9]|\./g, "").split("");
        var numbers = element.split(/\+|\-|\×|\÷/g);

        let divide=operators.indexOf("÷");

        while (divide != -1) {
            numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
            numbers.push(numbers);
            operators.splice(divide, 1);
            divide = operators.indexOf("÷");
            
        }

        //   multiply
        let multiply=operators.indexOf('×');
        while (multiply  !=-1) {
            numbers.splice(multiply,2,numbers[multiply] * numbers[multiply+1]);
            numbers.push(numbers);
            operators.splice(multiply,1);
            multiply=operators.indexOf('×'); 
            
            console.log( "result 4 " + numbers.splice(multiply,2,numbers[multiply] * numbers[multiply+1]))
        }

        // subtract
        let subtract=operators.indexOf('-');
        while (subtract !=-1) {
            numbers.splice(subtract,2,numbers[subtract] - numbers[subtract+1]);
            numbers.push(numbers);
            operators.splice(subtract,1);
            subtract=operators.indexOf('-')
        }

        // add
        let add=operators.indexOf('+');
        while (add != -1) {
            numbers.splice(add,2,parseFloat(numbers[add]) + parseFloat(numbers[add+1]));
            numbers.push(numbers);
            operators.splice(add,1)
            add=operators.indexOf('+');
        }

        console.log("number  "+numbers)

        input.innerHTML=numbers[0];
        resuldisaplay=true;
}
