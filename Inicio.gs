
//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Empezar ahora!!', 'menuItem1')
      .addItem('Funcion 2', 'menuItem2')
      .addToUi();
}

function menuItem1() {
  //Definimos una variable donde vamos a registrar un input:
  var input = Browser.inputBox("Por favor, introduce tu nombre:");
  //Esta linea muestra un mensaje de hola mundo!! al ejecutar el menuItem1
  Browser.msgBox('Bienvenido a tu primer Script con GAS '+input);
  //Añado este nuevo comentario sobre el código desde Github!!!
  //Para usar el log de GAS solo tenemos que hacer CTRL+Enter y añadir esta linea
  Logger.log("Es una prueba de Log del nombre "+ input);
}

//Esta función lo que hará será mostrar el nombre de la HCG
function menuItem2(){
  //Obtenemos en una variable el nombre de HCG
  var name= SpreadsheetApp.getActive().getName();
  //Mostramos la variable en el log
  Logger.log("Nombre de la HCG " + name);
}