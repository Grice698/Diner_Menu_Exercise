const menuDesayuno = {
    nombre: "Menú Desayuno",
    horario: "08:00 - 12:00",

    primero: {
        tostadas: {
            nombre: "Tostadas con huevo, jamón y tomate",
            precio: 6.0
        },

        croissant: {
            nombre: "Croissant con jamón y queso",
            precio: 3.5
        },

        yogur: {
            nombre: "Yogur con fruta y avena",
            precio: 4.0
        }
    },

    bebida: {
        cafe: {
            nombre: "Café con leche",
            precio: 1.6
        },

        zumo: {
            nombre: "Zumo de naranja",
            precio: 2.4
        },

        te: {
            nombre: "Infusión",
            precio: 1.8
        }
    }
};

const menuComida = {
    nombre: "Menú Comida",
    horario: "13:00 - 15:00",

    primero: {
        crema: {
            nombre: "Crema de calabaza",
            precio: 7.0
        },

        ensalada: {
            nombre: "Ensalada César",
            precio: 4.0
        },

        pasta: {
            nombre: "Espaguetis carbonara",
            precio: 6.0
        }
    },

    segundo: {
        solomillo: {
            nombre: "Solomillo de cerdo",
            precio: 16.0
        },

        salmon: {
            nombre: "Salmón a la plancha",
            precio: 15.0
        },

        hamburguesa: {
            nombre: "Hamburguesa gourmet",
            precio: 14.0
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
            precio: 2.5
        }      
    },

    bebida: {
        agua: {
            nombre: "Agua mineral",
            precio: 2
        },

        cerveza: {
            nombre: "Cerveza artesana",
            precio: 2.5
        },

        vino: {
            nombre: "Vino tinto",
            precio: 3.6
        }
    }
};

const menuCena = {
    nombre: "Menú Cena",
    horario: "20:00 - 23:00",

    primero: {
        crema: {
            nombre: "Crema de calabaza",
            precio: 7.0
        },

        ensalada: {
            nombre: "Ensalada César",
            precio: 6.0
        },
      risotto: {
        nombre: "Risotto de setas",
        precio: 7.0
      }    
      
    },
    segundo: {
        salmon: {
            nombre: "Salmón a la plancha",
            precio: 15.0
        },

        hamburguesa: {
            nombre: "Hamburguesa gourmet",
            precio: 12.0
        },
      solomillo: {
        nombre: "Solomillo de cerdo",
        precio: 13.0,
      }      
    },

    postre: {
        brownie: {
            nombre: "Brownie con helado",
            precio: 4.0
        },

        fruta: {
            nombre: "Fruta de temporada",
            precio: 2.50
        },
        yogur: {
            nombre: "Yogur de frutos del bosque",
            precio: 2.5
        }      
    },

    bebida: {
        agua: {
            nombre: "Agua mineral",
            precio: 2.0
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
};

const acompanamientos = {
    patatas: {
        nombre: "Patatas fritas",
        precio: 2.5
    },

    nachos: {
        nombre: "Nachos con guacamole",
        precio: 6.0
    },

    arroz: {
        nombre: "Arroz blanco",
        precio: 2.5
    }
};

// COMENTARIO RANDOM DEL CAMARERO

function randomComentario() {

    const comentarios = [
        "Excelente elección.",
        "Muy buena elección.",
        "Eso está delicioso.",
        "Es una especialidad de la casa.",
        "Te va a encantar."
    ];
  const indice = Math.floor(Math.random() * comentarios.length);
  return comentarios[indice];
}


// marcar horas en formato HH

alert("Bienvenido al restaurante El Elefante");

const hora = parseInt(
    prompt("¿Qué hora es? (9, 11, 14, 21...)")
);

let menuActual;
let nombreMenu;

// Selección de menú según hora

if (hora >= 8 && hora < 12) {
  menuActual = menuDesayuno;
  nombreMenu = "Desayuno";

} else if (hora >= 13 && hora < 16) {
  menuActual = menuComida;
  nombreMenu = "Comida";

} else if (hora >= 20 && hora < 23) {
  menuActual = menuCena;
  nombreMenu = "Cena";

} else {
  alert("La cocina está cerrada.");
  throw new Error("Restaurante cerrado");
}

// para que " Pasta ", "PASTA" o "pasta" sean tratados igual.
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}


// Muestra la carta completa.

function mostrarCarta(menu) {
  let mensaje = `${menu.nombre}\n`;
  mensaje += `Horario: ${menu.horario}\n\n`;
  
  for (let categoria in menu) {
    if (categoria !== "nombre" && categoria !== "horario") {
      mensaje += `--- ${categoria.toUpperCase()} ---\n`;
      for (let plato in menu[categoria]) {
        mensaje += `${plato} -> ${menu[categoria][plato].nombre} (${menu[categoria][plato].precio} €)\n`;
      }
      mensaje += "\n";
    }
  }
  alert(mensaje);
}

mostrarCarta(menuActual);


// ESTRUCTURA TICKET

let total = 0;
let ticket = "------- TICKET -------\n\n";
ticket += `MENÚ ${nombreMenu}\n\n`;


// FUNCIÓN ELEGIR ELEMENTO. Si escribe algo incorrecto, vuelve a preguntar. bucle while

function elegirElemento(titulo, categoria) {
  let mensaje = `${titulo}\n\n`;
  for (let plato in categoria) {
    mensaje += `${plato} -> ${categoria[plato].nombre} (${categoria[plato].precio} €)\n`;
  }
  
  let eleccion = prompt(mensaje);
  if (eleccion) {
    eleccion = normalizarTexto(eleccion);
  }
  
  while (!categoria[eleccion]) {
    if (eleccion === null) {
      alert ("Pedido cancelado")
      throw new Error("Pedido cancelado");
    }
    eleccion = alert("Ese plato no existe. Inténtalo de nuevo\n\n");
    eleccion = prompt(mensaje);
    
    if (eleccion) {
      eleccion = normalizarTexto(eleccion);
    }
  }
  
  alert(randomComentario());
  return categoria[eleccion];
}

// RECORRER CATEGORÍAS Y ALMACENARLO EN TICKET

for (let categoria in menuActual) {

    if (categoria !== "nombre" && categoria !== "horario") { //ignorar nombre y horario

        const platoElegido = elegirElemento(
            `Elige ${categoria}:`,
            menuActual[categoria]
        );

        total += platoElegido.precio;
        ticket += `${platoElegido.nombre} - ${platoElegido.precio.toFixed(2)} €\n`;
    }
}

// ACOMPAÑAMIENTO para menus que no son desayuno

if (nombreMenu !== "Desayuno") {
  let respuesta = prompt(
    "¿Deseas acompañamiento? (si/no)"
  );
  
  if (respuesta) {
    respuesta = respuesta.trim().toLowerCase();
  }
  
  if (respuesta === "si" || respuesta === "sí") {
    const acomp = elegirElemento("Elige acompañamiento:", acompanamientos);
    total += acomp.precio;
    ticket +=
      `${acomp.nombre} - ${acomp.precio.toFixed(2)} €\n`;
  }
}

// TOTAL TICKET

ticket += `\nTOTAL: ${total.toFixed(2)} €`;

alert(ticket);
alert("¡Gracias, vuelve pronto!")

console.log(ticket);