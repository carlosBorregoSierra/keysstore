const contenedor = document.querySelector(".flex-container");

function crearLlave (nombre, modelo, precio){
    img = `<img src="/components/llave.jpeg">`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();

for (var i =0; i < 10; i++) {
    let modeloRandom = Math.random()*10000;
    let precioRandom = Math.random()*10+30;
    let llave = crearLlave(`llave ${i+1}`, `modelo ${modeloRandom.toFixed(0)}`, `${precioRandom.toFixed(2)}`);
    let div = document.createElement("DIV"); //Crea una variable div con un <div>
    div.tabIndex = i; //Hace al elemento div focusiable
    div.classList.add(`item-${i}`,`flex-item`); //agrega dos clases
    //al div => item-1, item-2... y una flex-item a cada div
    div.innerHTML = llave[0] + llave[1] +llave[2] + llave[3]; //Esta línea está 
    //estableciendo el contenido HTML del elemento div
    documentFragment.appendChild(div); //va agregando los div y despues se 
    //agregan todos al DOM. 
}

contenedor.appendChild(documentFragment);