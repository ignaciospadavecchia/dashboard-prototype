
function onSearchMenu() {
    // Declare variables
    let input, filter, ul, li, a, i;
    input = document.getElementById("searchId");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Loopea por toda la lista de items y oculta aquellos que no concuerdan con la búsqueda.

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}