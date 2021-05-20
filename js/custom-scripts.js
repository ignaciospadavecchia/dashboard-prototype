
// TOOGLE DARK THEME

function onToggleNightMode() {
   let element = document.body;
   element.classList.toggle("dark-mode"); //classList permite controlar el Atributo de la Clase del elemento.
}

function onEditToogle() {
   let hideEdits = element.div;
   hideEdits.classList.toggle("editContainer"); //classList permite controlar el Atributo de la Clase del elemento.
}

// ADD INPUT

function onAddText() {
   let text = document.getElementById("textAreaId1").innerHTML;
   console.log("text");
   const words = text.split(', ');
                                   // console.log(words);
   words.sort();
                                   // console.log(words);
   /* document.getElementById("textAreaId2").innerHTML = words;    */
   onClickInsert(words);
}

function onReset() {
   document.getElementById("textAreaId1").innerHTML = " ";   
   /* document.getElementById("textAreaId2").innerHTML = " ";   */ 
}



