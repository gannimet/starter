const textfeld = document.getElementById('textfeld');
const knopf = document.getElementById('knopf');
const liste = document.getElementById('liste');

knopf.addEventListener('click', clickHandler);

function clickHandler() {
  const neuesElement = document.createElement('li');
  const inhalt = document.createTextNode(textfeld.value);
  neuesElement.appendChild(inhalt);
  
  liste.appendChild(neuesElement);
  
  textfeld.value = '';
}