// Lista della spesa

// Settare l'array contenente le cose da comprare
let listaSpesa = ['Latte' , 'Acqua' , 'Uova' , 'Pane' , 'Biscotti'];
const container = document.getElementById('wishlist');

console.log(listaSpesa , container);

// Stampare gli elementi tramite ciclo for
// for(let i = 0; i < listaSpesa.length; i++){

//     console.log(listaSpesa[i]);

//     container.innerHTML += `
//         <div>${listaSpesa[i]}</div>
//     `;

// }

// Stampare gli elementi tramite ciclo while
let i = 0;

while(i < listaSpesa.length){

    console.log(listaSpesa[i]);

    container.innerHTML += `
        <div>${listaSpesa[i]}</div>
    `;
    
    i++;
    
}

const textField = document.querySelector('input');
let newItem = textField.value;


const button = document.querySelector('button');

console.log(textField , button);

button.addEventListener('click', function(){

        listaSpesa.push(newItem);    
        
        container.innerHTML += `
            <div>${newItem}</div>
        `;

        console.log(listaSpesa);
    }
);
