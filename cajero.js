var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];
var numeroDeCuenta;

function ingresarCuenta(nombreDeLaCuenta) {
    if (nombreDeLaCuenta.toLowerCase() == cuentas[0].nombre.toLowerCase()) {
        return numeroDeCuenta = 0;
    } else if (nombreDeLaCuenta.toLowerCase() == cuentas[1].nombre.toLowerCase()){
        return numeroDeCuenta = 1;
    } else if (nombreDeLaCuenta.toLowerCase() == cuentas[2].nombre.toLowerCase()) {
        return numeroDeCuenta = 2;
    } else {
        alert("¡La cuenta no existe! Ingresa una cuenta valida.")
    }
}

var account = prompt("Ingresar nombre de usuario:");
ingresarCuenta(account)

function verificarcontrasena(contrasenaDeLaCuenta) {

    let validarElemento = true; ///Asumimos el valor de una condicion

    while(validarElemento){
        if (contrasenaDeLaCuenta == cuentas[numeroDeCuenta].password){
            validarElemento=false;
            return accesoAutorizado = true;
        } else {
            console.log("password incorrecto")
            contrasenaDeLaCuenta = prompt("contrasena incorrecta, vuelve a intentarlo.");
        }
    }
}

var password = prompt(`Hola ${cuentas[numeroDeCuenta].nombre}\n ingresa tu contrasena:`);
verificarcontrasena(password)

function listaDeOpciones(accederAlMenu){
    if (accederAlMenu) {
        opcionSelecionada = parseInt(prompt("Selcciona una opcion.\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto\nClic en cancelar para salir."));  
        return opcionSelecionada;
    } else {
        console.log ("Salir del Menu");
    }
}

listaDeOpciones(accesoAutorizado)

function opcionSeleccionadaUno(opcionUsuario) {
    if (opcionUsuario == 1) {
        console.log(`Tu saldo es de: $${cuentas[numeroDeCuenta].saldo} MXN`)
    } else if(opcionUsuario == 2){
        var depositar = parseInt(prompt('Ingresa la cantidad a depositar:'))
        return deposito(depositar);
    } else if(opcionUsuario == 3){
        var retiro = parseInt(prompt('Ingresa la cantidad a retirar:'))
        return retiroUsuario(retiro);
    } else {
        console.log('Salir');
    }
}

opcionSeleccionadaUno(opcionSelecionada)

function deposito(depositarCuenta) {
    let validarElemento = true;

    while(validarElemento){
        if (cuentas[numeroDeCuenta].saldo + depositarCuenta <=900){
            validarElemento=false;
            console.log(`Retiraste: ${depositarCuenta}`)
            cuentas[numeroDeCuenta].saldo = cuentas[numeroDeCuenta].saldo + depositarCuenta;
            console.log(`Tu saldo actual es de: $${cuentas[numeroDeCuenta].saldo} MXN`)
        } else if (cuentas[numeroDeCuenta].saldo + depositarCuenta > 900){
            depositarCuenta = parseInt(prompt(`No puedes tener mas de $900 MXN en tu cuenta.\nTu saldo actual es: $${cuentas[numeroDeCuenta].saldo} MXN\nIngresa otra cantidad a depositar:`))
        } else{
            return 'Salir'
        }
    }
}

function retiroUsuario(retirarDeLaCuenta) {

    let validarElemento = true;

    while(validarElemento){
        if (retirarDeLaCuenta <= cuentas[numeroDeCuenta].saldo && cuentas[numeroDeCuenta].saldo - retirarDeLaCuenta >=10){
            validarElemento=false;
            console.log(`Retiraste: ${retirarDeLaCuenta}`)
            cuentas[numeroDeCuenta].saldo = cuentas[numeroDeCuenta].saldo - retirarDeLaCuenta;
            console.log(`Tu saldo actual es de: $${cuentas[numeroDeCuenta].saldo} MXN`)
        } else if (retirarDeLaCuenta <= cuentas[numeroDeCuenta].saldo && cuentas[numeroDeCuenta].saldo - retirarDeLaCuenta < 10){
            retirarDeLaCuenta = parseInt(prompt(`Tu cuenta no puede tener menos de $10 MXN.\nTu saldo actual es: $${cuentas[numeroDeCuenta].saldo} MXN\nIngresa otra cantidad:`))
        } else if (retirarDeLaCuenta > cuentas[numeroDeCuenta].saldo) {
            console.log(`La cantidad a retirar es mayor a tu saldo actual: $${cuentas[numeroDeCuenta].saldo} MXN`)
            retirarDeLaCuenta = parseInt(prompt('Ingresa otra cantidad:'))
        } else{
            return 'Salir'
        }
    }
}