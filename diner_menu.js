//describir menus

const mainMenu = {
    menuDesayuno: {
        nombre: "Menú Desayuno",
        horario: "08:00 - 12:00",
        primero: {
            tostadas: {
                nombre: "Tostadas con huevo, jamón y tomate",
                precio: 6.0
            },
            croissant: {
                nombre: "Croissant con jamón y queso a la plancha",
                precio: 4.0
            },
            yogur: {
                nombre: "Yogur con fruta y avena",
                precio: 4.0
            }
        },
        bebida: {
            cafe: {
                nombre: "Café con leche",
                precio: 1.5
            },
            zumo: {
                nombre: "Zumo de naranja natural",
                precio: 2.0
            },
            te: {
                nombre: "Infusión",
                precio: 1.8
            }
        }
    },

    menuComida: {
        nombre: "Menú Comida",
        horario: "13:00 - 15:00",

        primero: {
            crema: {
                nombre: "Crema de calabaza",
                precio: 6.5
            },
            ensalada: {
                nombre: "Ensalada César",
                precio: 5.0
            },
            risotto: {
                nombre: "Risotto de setas",
                precio: 6.0
            },
            pasta: {
                nombre: "Espaguetis a la carbonara",
                precio: 7.0
            }   
        },


        segundo: {
            solomillo: {
                nombre: "Solomillo de cerdo",
                precio: 17.0,
            },
            salmon: {
                nombre: "Salmón a la plancha",
                precio: 17.0,
            },
            hamburguesa: {
                nombre: "Hamburguesa gourmet",
                precio: 14.0,
            }
        },

        postre: {
            brownie: {
                nombre: "Brownie con helado",
                precio: 4.0
            },
            fruta: {
                nombre: "Fruta de temporada",
                precio: 2.5
            },

            yogur: {
                nombre: "Yogur de frutos del bosque",
                precio: 2.0
            }
        },

        bebida: {
            agua: {
                nombre: "Agua mineral",
                precio: 2.5
            },
            té: {
                nombre: "Té de manzanilla",
                precio: 1.6
            },
            cerveza: {
                nombre: "Cerveza artesana",
                precio: 3.4
            },          
            vino: {
                nombre: "Vino tinto",
                precio: 3.8
            }
        }
    },

    menuCena: {
        nombre: "Menú Cena",
        horario: "20:00 - 23:00",

        primero: {
            crema: {
                nombre: "Crema de calabaza",
                precio: 7.5
            },
            ensalada: {
                nombre: "Ensalada César",
                precio: 6.0
            },
            risotto: {
                nombre: "Risotto de setas",
                precio: 7.0
            },
            pasta: {
                nombre: "Espaguetis a la carbonara",
                precio: 6.0
            }   
        },

        segundo: {
            solomillo: {
                nombre: "Solomillo de cerdo",
                precio: 15.0,
            },
            salmon: {
                nombre: "Salmón a la plancha",
                precio: 16.0,
            },
            hamburguesa: {
                nombre: "Hamburguesa gourmet",
                precio: 12.0,
            }
        },

        postre: {
            brownie: {
                nombre: "Brownie con helado",
                precio: 5.0
            },
            fruta: {
                nombre: "Fruta de temporada",
                precio: 3.5
            },

            yogur: {
                nombre: "Yogur de frutos del bosque",
                precio: 2.0
            }
        },

        bebida: {
            agua: {
                nombre: "Agua mineral",
                precio: 2.0
            },
            té: {
                nombre: "Té de manzanilla",
                precio: 1.5
            },
            cerveza: {
                nombre: "Cerveza artesana",
                precio: 3.0
            },          
            vino: {
                nombre: "Vino tinto",
                precio: 3.5
            }
        }
    }
}; 



let acompañamientos = {
    patatas: {
        nombre: "Patatas fritas",
        precio: 2.5

    },

    nachos: {
        nombre: "Nachos con salsa agria, pico de gallo y guacamole",
        precio: 6.0
    },

    pimientos: {
        nombre: "Pimientos asados con sal",
        precio: 3.0
    },

    arroz: {
        nombre: "Arroz blanco",
        precio: 2.5
    }

}


//inicio del prompt preguntar que hora es (formato hora y minuto. 'HH : MM')

let bienvenida = alert("¡Bienvenido a Bottega Diner!");
const hora = prompt("¿Qué hora es? (Introduce la hora en formato HH:MM)");


const partes = hora.split(":");

const horas = parseInt(partes[0]);
const minutos = parseInt(partes[1]);
// Convertimos todo a minutos desde medianoche
const horaTotal = horas * 60 + minutos;

const inicioDesayuno = 8 * 60;          // 08:00
const finDesayuno = 12 * 60;            // 12:00

const inicioComida = 13 * 60;           // 13:00
const finComida = 15 * 60;              // 15:00

const inicioCena = 20 * 60;             // 20:00
const finCena = 23 * 60;                // 23:00

let menuActual;


if (horaTotal >= inicioDesayuno && horaTotal < finDesayuno) {
    menuActual = mainMenu.menuDesayuno;

} else if (horaTotal >= inicioComida && horaTotal < finComida) {
    menuActual = mainMenu.menuComida;

} else if (horaTotal >= inicioCena && horaTotal < finCena) {
    menuActual = mainMenu.menuCena;

} else { //si no mete la franja horaria correcta, saldrá un error
    alert("Lo sentimos, en este momento la cocina está cerrada.");
    throw new Error("Restaurante cerrado");
}


// para que " Pasta ", "PASTA" o "pasta" sean tratados igual.
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}

//  comentario aleatorio del camarero.
function randomComentario() {
    const comentarios = [
        "La especialidad de la casa.",
        "Una excelente elección.",
        "Es de lo mejor que encontrarás hoy.",
        "Te va a encantar.",
        "¡Delicioso!"
    ];

    const lista = Math.floor(Math.random() * comentarios.length);
    return comentarios[lista];
}

// Genera un texto con todas las opciones y sus precios. 
function mostrarOpciones(categoria) {
    let mensaje = "";

    for (let clave in categoria) {  
        const item = categoria[clave];
        mensaje += `${clave} → ${item.nombre} (${item.precio.toFixed(2)} €)\n`; 
    }

    return mensaje;
}

// Pide al usuario que elija una opción válida. Si escribe algo incorrecto, vuelve a preguntar. bucle while
function elegirPlato(categoria, titulo) {
    let eleccion;

    while (true) {
        eleccion = prompt(`${titulo}\n\n${mostrarOpciones(categoria)}`);

        // Si el usuario cancela nos devuelve null
        if (eleccion === null) {
            return null;
        }

        eleccion = normalizarTexto(eleccion);

        if (categoria[eleccion]) {
            return categoria[eleccion];
        }

        alert("Lo sentimos, ese plato no existe.");
    }
}

// Muestra la carta completa.
function mostrarCarta(menu) {
    let mensaje = `${menu.nombre}\n`;
    mensaje += `Horario: ${menu.horario}\n\n`;

    mensaje += "PRIMEROS\n";
    mensaje += mostrarOpciones(menu.primero) + "\n";

    if (menu.segundo) {
        mensaje += "SEGUNDOS\n";
        mensaje += mostrarOpciones(menu.segundo) + "\n";
    }

    if (menu.postre) {
        mensaje += "POSTRES\n";
        mensaje += mostrarOpciones(menu.postre) + "\n";
    }

    mensaje += "BEBIDAS\n";
    mensaje += mostrarOpciones(menu.bebida);

    alert(mensaje);
}


// Estructura del ticket
const ticket = {
    lineas: [], 
    total: 0 
};

// Añade una línea al ticket y suma el precio.
function añadirAlTicket(ticket, item, categoria) {
    ticket.lineas.push(
        `${categoria}: ${item.nombre} - ${item.precio.toFixed(2)} €`
    );

    ticket.total += item.precio;
}




// Despues de poner la hora:

// Mostramos la carta completa del menú disponible
mostrarCarta(menuActual);


// PRIMER PLATO comentario

const primero = elegirPlato(
    menuActual.primero,
    "Elige un primer plato"
);

if (primero) {
    alert(randomComentario());
    añadirAlTicket(ticket, primero, "Primer plato");
}


// SEGUNDO PLATO comentario

if (menuActual.segundo) {
    const segundo = elegirPlato(
        menuActual.segundo,
        "Elige un segundo plato"
    );

    if (segundo) {
        alert(randomComentario());
        añadirAlTicket(ticket, segundo, "Segundo plato");
    }
}


// POSTRE comentario

if (menuActual.postre) {
    const postre = elegirPlato(
        menuActual.postre,
        "Elige un postre"
    );

    if (postre) {
        alert(randomComentario());
        añadirAlTicket(ticket, postre, "Postre");
    }
}


// BEBIDA comentario

const bebida = elegirPlato(
    menuActual.bebida,
    "Elige una bebida"
);

if (bebida) {
    alert(randomComentario());
    añadirAlTicket(ticket, bebida, "Bebida");
}


// ¿DESEA ACOMPAÑAMIENTO?

if (menuActual !== mainMenu.menuDesayuno) { // No nos interesa el sides menu por la mañana, por lo que si el menú no es el de desayuno... ejecutamos bucle if
  const quiereAcompañamiento = prompt(
    "¿Desea añadir un acompañamiento? (sí / no)"
  );
  
  if (
    quiereAcompañamiento && //AND
    normalizarTexto(quiereAcompañamiento) === "sí" || //OR acepta respuesta con tilde o sin tilde
    normalizarTexto(quiereAcompañamiento) === "si"
  ) {
    const acompañamiento = elegirPlato(
        acompañamientos,
        "Elige un acompañamiento"
    );
    
    if (acompañamiento) {
        alert(randomComentario());
        añadirAlTicket(ticket, acompañamiento, "Acompañamiento");
    }
  }
} 


// MOSTRAR TICKET FINAL

let ticketFinal = "===== TICKET =====\n\n";

for (let linea of ticket.lineas) { //mostramos las lineas que se han añadido antes a la variable ticket. recorrer ticket.lineas
    ticketFinal += linea + "\n";
}

ticketFinal += `\nTOTAL: ${ticket.total.toFixed(2)} €`;  

alert(ticketFinal);