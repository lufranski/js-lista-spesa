// Lista della spesa

// Settare l'array contenente le cose da comprare
let listaSpesa = ['Latte' , 'Acqua' , 'Uova' , 'Pane' , 'Biscotti'];
const container = document.getElementById('wishlist');

console.log(listaSpesa , container);

// Stampare gli elementi tramite ciclo for
for(let i = 0; i < listaSpesa.length; i++){

    console.log(listaSpesa[i]);

    container.innerHTML += `
        <div>${listaSpesa[i]}</div>
    `;

}
// Stampare gli elementi tramite ciclo while