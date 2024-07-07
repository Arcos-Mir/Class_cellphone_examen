class Cellphone {
    constructor(color, brand, battery, screen ) {
        this.color = color;
        this.brand = brand;
        this.battery = battery;
        this.screen = screen;
    }

    call() {

        let numberCell = prompt("Ingresa un número de teléfono");

        if(numberCell == 9216587256 ) {

            console.log(numberCell, "LLamando a amig@ 1...");
            console.log("-------- CONTESTAR LLAMADA --------");
            console.log("-------- CONVERSACIÓN --------");
            console.log("-------- FINALIZAR LLAMADA --------");
        }else if (numberCell == 9216389568 ) {
            console.log(numberCell, "LLamando a amig@ 2...");
            console.log("-------- CONTESTAR LLAMADA --------");
            console.log("-------- CONVERSACIÓN --------");
            console.log("-------- FINALIZAR LLAMADA --------");
        }else {
            console.log(numberCell);
            console.log("-------- RECHAZAR LLAMADA (NÚMERO EQUIVOCADO) --------");
        }

    }

    receiveCall() {

        let numCell = prompt("Ingresa un número de teléfono");

        if(numCell == parseInt(9214562145)) {
            console.log(numCell, "Mamá esta llamando...");
            console.log("-------- CONTESTAR LLAMADA --------");
            console.log("-------- CONVERSACIÓN --------");
            console.log("-------- FINALIZAR LLAMADA --------");
        }else if (numCell == parseInt(9212262759)) {
            console.log(numCell, "Papá esta llamando...");
            console.log("-------- CONTESTAR LLAMADA --------");
            console.log("-------- CONVERSACIÓN --------");
            console.log("-------- FINALIZAR LLAMADA --------");
        }else {
            console.log(numCell, "Número desconocido...");
            console.log("-------- RECHAZAR LLAMADA --------");
        }

    }

    sendMessage() {
        console.log("-------- ABRIR APP MENSAJE --------");
        console.log("Escribir mensaje: Hola MARY, ¿como estas?");
        console.log("-------- ESPERANDO RESPUESTA --------")
        console.log("mensaje recibido: Hola KIRIATH, bien y tu");
        console.log("-------- CONVERSACIÓN --------");
        console.log("-------- CERRAR APP MENSAJE --------");
    }


    receiveMessage() {
        console.log("-------- NOTIFICACIÓN: TE LLEGÓ UN MENSAJE --------");
        console.log("-------- ABRIR APP MENSAJE --------");
        console.log("Hola KIRIATH, vamos al cine?");
        console.log("-------- CONVERSACIÓN --------");
        console.log("-------- CERRAR APP MENSAJE --------");
    }

}

let cell1 = new Cellphone('black', 'Samsung', 4500, 6.5);
let cell2 = new Cellphone('midnigth blue', 'Huawei', 5500, 6.8);
let cell3 = new Cellphone('red', 'LG', 4200, 6.2);

console.log(cell1);
console.log(cell2);
console.log(cell3);

console.log("-------- MÉTODO LLAMAR --------");
console.log(cell1.brand);
cell1.call();
console.log(cell2.brand);
cell2.call();
console.log(cell3.brand);
cell3.call();

console.log("-------- ********** --------");
console.log("-------- MÉTODO RECIBIR LLAMADA --------");
console.log(cell1.brand);
cell1.receiveCall();
console.log(cell2.brand);
cell2.receiveCall();
console.log(cell3.brand);
cell3.receiveCall();

console.log("-------- ********** --------");
console.log("-------- MÉTODO ENVIAR MENSAJE --------");
console.log(cell1.brand);
cell1.sendMessage();
console.log(cell2.brand);
cell2.sendMessage();
console.log(cell3.brand);
cell3.sendMessage();

console.log("-------- ********** --------");
console.log("-------- MÉTODO RECIBIR MENSAJE --------");
console.log(cell1.brand);
cell1.receiveMessage();
console.log(cell2.brand);
cell2.receiveMessage();
console.log(cell3.brand);
cell3.receiveMessage();