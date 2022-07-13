const lista = document.querySelector('#lista'); // chamando ul

const elementoLi = document.createElement('li'); // criando elemento li
elementoLi.textContent = 'Um novo item na lista';


// lista.className ="novoponteiro" add nova class 

// lista.removeAttribute('class'); remove class

//   lista.style.color ='red'; controlando style


// lista.appendChild(elementoLi);



// const filhoDaLista = lista.querySelectorAll('li');  removendo os filhos da ul, no caso, as li.
// for(filho of filhoDaLista){
    // lista.removeChild(filho);
// }

// lista.remove();


//function de manibulação de elemntos da DOm, nesse caso, BTN.
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
        lista.remove();
}
);

console.log(lista);