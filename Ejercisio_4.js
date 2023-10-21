// Programa 1: Cálculo del costo de una entrada al cine
const calcularCostoEntrada = (edad, dia) => {
    const costoBase = 100; // Precio base de la entrada
    let descuento = 0;

    if (edad < 12) {
        descuento = 0.5; // 50% de descuento para menores de 12 años
    } else if (edad >= 60) {
        descuento = 0.3; // 30% de descuento para mayores de 60 años
    }

    if (dia === 'miercoles') {
        descuento += 0.1; // 10% de descuento adicional los miércoles
    }

    return costoBase * (1 - descuento);
}
console.log(calcularCostoEntrada(11, "miercoles")); // 45 (50% de descuento por edad y 10% por día)

// Programa 2: Determinar el rango de un número
const determinarRango = (numero) => {
    if (numero >= 1 && numero <= 100) {
        return "Rango normal";
    } else if (numero >= 101 && numero <= 1000) {
        return "Rango ampliado";
    } else {
        return "Rango fuera de límites";
    }
}
console.log(determinarRango(150)); // Rango ampliado

// Programa 3: Determinar si un número es cuadrado perfecto
const esCuadradoPerfecto = (numero) => {
    const raiz = Math.sqrt(numero);
    return Number.isInteger(raiz);
}
console.log(esCuadradoPerfecto(25)); // true

// Programa 4: Determinar el día de la semana
const diaDeLaSemana = (numero) => {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    return dias[numero - 1] || "Número no válido";
}
console.log(diaDeLaSemana(3)); // Miércoles

// Programa 5: Determinar si un número es positivo, negativo o cero
const determinarSigno = (numero) => {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}
console.log(determinarSigno(-5)); // Negativo
