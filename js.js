
function site(){
    document.location.href = "https://www.google.by/";
}

const conteiner = document.getElementById('conteiner');
const conteiner3 = document.getElementById('conteiner3');
const wrapper = document.getElementById('wrapper');
const btn3 = document.getElementById('btn2');

function smena()
{
    if(conteiner.style.display == "none")
    {
        conteiner.style.display = "";

    }
    else
    {
        conteiner.style.display = "none";
    }
}

btn3.addEventListener('click', function(){

    if (wrapper.style.display == "")

    {
        wrapper.style.display = "none";
        conteiner3.style.display = "";
    }

    else

    {
        wrapper.style.display = "";
    }
})



conteiner3.addEventListener('click', function(){

    if(conteiner3.style.display == "")

    {
        conteiner3.style.display = "none";
        wrapper.style.display = "";
    }

    else

    {
        conteiner3.style.display = "";
    }
})

let i = 0;
let b = 0;

let max = 0;

var term = {

    Canada: 10,
    Germany: 13,
    Spain: 22,
    Spain1: 23,
    sasdasdas: 100,
    asdasdasdasdas: 500
    
}

    for (let key in term) {

       console.log(term[key]),
        b = b + term[key];
        i++;
        
      }

      for (let key in term) {

          if(max<term[key])

          {
            max = term[key];
          }

      }

console.log('Среднее значение: ' + b/i);
console.log('Максимальное значение: ' + max);


