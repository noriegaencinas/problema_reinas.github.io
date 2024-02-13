var reinasPorColocar = 8;
var reinasColocadas = 0;
var DEF_RED = "#f00000"
var RED_INK = "#010000"

function colocarReina(celda) {
  /*alert("Le dieron click a la celda"+celda);*/

  //esto pasa si NO hay reina en la celda
  if (window.getComputedStyle(celda).backgroundImage == "none") {
    if (reinasColocadas < 8) {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      /* Bloqueamos renglon */
      var tablero = document.getElementById("tabla");
      //alert(renglon + " " + columna);
      for (let i = 0; i < 8; i++) {
        if (columna != i) { //columnas
          new_cell = tablero.rows[renglon].cells[i]
          if (new_cell.style.backgroundColor == "" || new_cell.style.backgroundColor == "#FFFFFF") {
            new_cell.style.backgroundColor = DEF_RED;
            new_cell.removeAttribute("onclick");
          }
          else{              
            old_color = rgbToHex(window.getComputedStyle(new_cell).backgroundColor)
            new_color = addHexColors(old_color, RED_INK);            
            new_cell.style.backgroundColor = new_color;
          }
        }
        if (renglon != i) { //filas
          new_cell = tablero.rows[i].cells[columna]
          if (new_cell.style.backgroundColor == "" || new_cell.style.backgroundColor == "#FFFFFF") {
            new_cell.style.backgroundColor = DEF_RED;
            new_cell.removeAttribute("onclick");
          }
          else{              
            old_color = rgbToHex(window.getComputedStyle(new_cell).backgroundColor)
            new_color = addHexColors(old_color, RED_INK);            
            new_cell.style.backgroundColor = new_color;
          }
        }
      }

      /* Recorremos diagonales */
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (i+j == renglon+columna || i-j == renglon-columna) {
            new_cell = tablero.rows[i].cells[j]            
            if (new_cell.style.backgroundColor == "" || new_cell.style.backgroundColor == "#FFFFFF") {
              new_cell.style.backgroundColor = DEF_RED;
              new_cell.removeAttribute("onclick");
            }
            else{              
              old_color = rgbToHex(window.getComputedStyle(new_cell).backgroundColor)
              new_color = addHexColors(old_color, RED_INK);            
              new_cell.style.backgroundColor = new_color;
            }
          }
        }
      }
      
      tablero.rows[renglon].cells[columna].setAttribute("onclick", "colocarReina(this)");

      reinasPorColocar--;
      reinasColocadas++;
    }

    //caso en el que SI hay reina en la celda
  } else {
    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;
    
    /* Bloqueamos renglon */
    var tablero = document.getElementById("tabla");

    //var backgroundColor = window.getComputedStyle(celda).backgroundColor;
    
    //alert(DEF_RED + RED_INK)

    //alert(renglon + " " + columna);
    for (let i = 0; i < 8; i++) {
      new_cell = tablero.rows[renglon].cells[i]
      //columnas
      /* esto esta volviendo a regresar a las celdas a su normalidad */ 
      //alert(rgbToHex(window.getComputedStyle(new_cell).backgroundColor) + " " + DEF_RED)     
      if (rgbToHex(window.getComputedStyle(new_cell).backgroundColor) == DEF_RED) {
        new_cell.setAttribute("onclick", "colocarReina(this)");
        new_cell.style.backgroundColor = "";
      }            
      else {
        old_color = rgbToHex(window.getComputedStyle(new_cell).backgroundColor)
        new_color = subtractHexColors(old_color, RED_INK);            
        new_cell.style.backgroundColor = new_color;  
      }
      new_cell = tablero.rows[i].cells[columna]
      //filas
      /* esto esta volviendo a regresar a las celdas a su normalidad */
      if (rgbToHex(window.getComputedStyle(new_cell).backgroundColor) == DEF_RED) {
        new_cell.setAttribute("onclick", "colocarReina(this)");
        new_cell.style.backgroundColor = "";
      }
      else {
        old_color = rgbToHex(window.getComputedStyle(new_cell).backgroundColor)
        new_color = subtractHexColors(old_color, RED_INK);            
        new_cell.style.backgroundColor = new_color;  
      }
    }
    //recorrer ambas diagonales
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (i+j == renglon+columna || i-j == renglon-columna) {
          new_cell = tablero.rows[i].cells[j]
          if (rgbToHex(window.getComputedStyle(new_cell).backgroundColor) == DEF_RED) {
            new_cell.setAttribute("onclick", "colocarReina(this)");
            new_cell.style.backgroundColor = "";
          }
          else {
            old_color = rgbToHex(window.getComputedStyle(new_cell).backgroundColor)
            new_color = subtractHexColors(old_color, RED_INK);            
            new_cell.style.backgroundColor = new_color;  
          }
        }
      }
    }
    reinasPorColocar++;
    reinasColocadas--;
    celda.style = "background-image: none";
  }
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;

}


function solucion1(valor) {

  var celdas = document.getElementById("tabla");
  limpiar();

  switch (valor) {
    case "1":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "2":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "3":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "4":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "5":
      celdas.rows[0].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "6":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    default:
      alert("Esa solucion no te la ando manejando");
      break;
  }
}

function limpiar() {

  var tablero = document.getElementById("tabla");

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      var celda = tablero.rows[i].cells[j];
      celda.removeAttribute("style");
      celda.setAttribute("onclick", "colocarReina(this)");
    }
  }
} 


function rgbToHex(rgb) {
  // Split the RGB values
  var rgbValues = rgb.match(/\d+/g);
  // Convert each RGB value to hexadecimal
  var hexValues = rgbValues.map(function(value) {
    var hex = Number(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  });
  // Combine the hexadecimal values
  return "#" + hexValues.join("");
}

function addHexColors(hex1, hex2) {
  // Convert hex to decimal
  var decimal1 = parseInt(hex1.substring(1), 16);
  var decimal2 = parseInt(hex2.substring(1), 16);

  // Add decimals
  var decimalResult = decimal1 + decimal2;

  // Ensure the result is within the valid range for a hex color (0-16777215)
  decimalResult = Math.min(decimalResult, 16777215);

  // Convert decimal back to hex
  var hexResult = decimalResult.toString(16);

  // Pad with zeros to ensure the result has six digits (RGB format)
  while (hexResult.length < 6) {
    hexResult = "0" + hexResult;
  }

  return "#" + hexResult;
}


function subtractHexColors(hex1, hex2) {
  // Convert hex to decimal
  var decimal1 = parseInt(hex1.substring(1), 16);
  var decimal2 = parseInt(hex2.substring(1), 16);

  // Subtract decimals
  var decimalResult = decimal1 - decimal2;

  // Ensure the result is not negative
  decimalResult = Math.max(0, decimalResult);

  // Convert decimal back to hex
  var hexResult = decimalResult.toString(16);

  // Pad with zeros to ensure the result has six digits (RGB format)
  while (hexResult.length < 6) {
    hexResult = "0" + hexResult;
  }

  return "#" + hexResult;
}