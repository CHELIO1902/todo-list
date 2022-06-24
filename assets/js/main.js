const myLanguages = [
  { name: "Javascript", complete: false, start: true },
  { name: "Python", complete: false, start: true },
  { name: "PHP", complete: false, start: true },
  { name: "Java", complete: false, start: true },
  { name: "Swift", complete: false, start: true },
  { name: "Ruby", complete: false, start: true },
  { name: "C#", complete: false, start: true },
  { name: "C++", complete: false, start: true },
  { name: "Go", complete: false, start: true },
  { name: "Dart", complete: false, start: true },
  { name: "Cobol", complete: false, start: true },
];



const listLanguagesElement = document.querySelector("#list-languages");
const languagePendingElement = document.querySelector("#language-pending");
const languageCompleteElement = document.querySelector("#language-complete");
const languageAllElement = document.querySelector("#language-all");

const languageComplete = myLanguages.filter(
  ({ complete }) => complete === true
);
const languagePending = myLanguages.length - languageComplete.length;






const renderElementList = ({ name, complete, start }) => {
  // Crear elementos necesario
  let listElement = document.createElement("li");
  let iconBox = document.createElement("div");
  let iconPlay = document.createElement("i");
  let iconPause = document.createElement("i");
  let iconCheck = document.createElement("i");
  // Asignamos las clases correspondientes a los iconos
  iconPlay.classList.add("bi", "bi-play-circle-fill", "text-primary");
  iconCheck.classList.add("bi", "bi-check-circle-fill", "text-success");
  iconPause.classList.add("bi", "bi-pause-circle-fill", "text-warning");

  listElement.innerText = name;
  listElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between"
  );
  // Insertar li en ul
  listLanguagesElement.appendChild(listElement);
  // Insertar div en li
  listElement.appendChild(iconBox);
  // Insertar i en div
  if (complete) {
    iconBox.appendChild(iconCheck);
  } else if (start && !complete) { // start && complete === false
    iconBox.appendChild(iconPlay);
  } else {
    iconBox.appendChild(iconPause);
  }
};














myLanguages.forEach(renderElementList);
languagePendingElement.innerText = languagePending;
languageCompleteElement.innerText = languageComplete.length;
languageAllElement.innerText = myLanguages.length;

// Diferentes manera de escribir condicionales
// const aprendido = false
// aprendido && console.log(aprendido)
// aprendido ? console.log(aprendido) : console.log('no aprendido')
// if (aprendido === true ){
//   console.log(aprendido)
// } else {
//   console.log('no aprendido')
// }

// Ejemplo de destructuración
// const {name, complete} = myLanguages[4]
// console.log(myLanguages[4].name, myLanguages[4].complete)
// console.log(name, complete)
// console.table(myLanguages)
























// const listLanguages = document.querySelector('#list-languages');

// const renderElementList = (name) => {
//   console.log(name)
// }

// myLanguages.forEach(myLanguage => {
//   let language = document.createElement("li"); //definir el elemento en una variable
//   language.innerText = i + 1; // modificar elementos o atributos
//   language.classList.add(
//     "list-group-item",
//     "d-flex",
//     "justify-content-between"
//   );
//   listLanguages.appendChild(language); //crea un elemento por medio del appendChild seleccionando el ID en este caso "listLanguages"
//   renderElementList(myLanguage)
// })



// for (var i = 0; i < 10; i++) {
  
// }


