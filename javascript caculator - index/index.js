let input=document.getElementById('input');
let  button=Array.from(document.querySelectorAll('button'));

let buttonText;
let inputvalue;
// operator
button.map(element => {
    element.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        switch(buttonText){
            case 'C':
                input.innerText='';
                break;
            case '=':
                try{
                input.innerText=eval(input.innerText);
                }catch{
                    input.innerText="!Error"
                }
                break;
            default:
                input.innerText+=buttonText;
               break; 
        }

        console.log(buttonText);

    });
    
});



