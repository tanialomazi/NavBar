const links = document.querySelector(".links-box");
const bt = document.querySelector(".bt");


bt.addEventListener("click", function () {
    //console.log(links.classList);//mostra quais são as classes do elemento

    /*
    if (links.classList.contains("show-links-box")) { //o método contains devolve false/true
        links.classList.remove('show-links-box');
    } else {
        links.classList.add('show-links-box');
    }*/

    links.classList.toggle('show-links-box'); //método toggle faz a mesma coisa que o if acima
})



