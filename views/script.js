function fill_galerie(elemente) {
    hanorace = elemente;
    var galerie = document.getElementById("galerie");
    //queryselector
    for (let i = 0; i < hanorace.length; i++) {
        console.log(hanorace.length)
        path = "imgs/" + hanorace[i];
        var div = document.createElement("div");

        var figure = document.createElement("figure")
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.className = "box";

        img.src = path;
        img.alt = "hanorac";

        // var div_overlay = document.createElement("div");
        // div_overlay.className = "overlay";
        // div_overlay.innerText = "Cumpara!";
        // figure.appendChild(div_overlay);
        figcaption.textContent = hanorace[i].slice(0, -4);
        figcaption.style.fontSize = "1em";


        figure.appendChild(img);
        figure.appendChild(figcaption);
        div.appendChild(figure);
        galerie.appendChild(div);


    }
}

function onclick_hanorace() {
    hanorace = ["hanorac1.png", "hanorac2.png", "hanorac3.png","hanorac1.png", "hanorac2.png", "hanorac3.png","hanorac1.png", "hanorac2.png", "hanorac3.png"];
    delete_elements();
    fill_galerie(hanorace);
}
function onclick_sosete() {
    sosete = ["sosete1.png", "sosete2.png", "sosete3.png", "sosete2.png"];
    delete_elements();
    fill_galerie(sosete);
}

function delete_elements() {
    var x = document.getElementsByClassName("items")[0];
    console.log(x);
    //x.innerHTML = "";
    while (x.firstChild) {
        x.removeChild(x.firstChild);
    }
}