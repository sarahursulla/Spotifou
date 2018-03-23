
 
document.getElementById('mp31').onclick = function () {

  var mp31 = document.getElementById("mp31"); //on attrape l'element html complet cliqué
console.log(mp31.innerHTML);

player = document.getElementById("audiomp3");  // on met dans la balise source contenu de l'élément cliqué
player.src = mp31.innerHTML;
player.play();

}


document.getElementById('mp32').onclick = function () {

  var mp32 = document.getElementById("mp32"); //on attrape l'element html complet cliqué
console.log(mp32.innerHTML);
document.getElementById("audiomp3").src=mp32.innerHTML; // on met dans la balise source contenu de l'élément cliqué
}

document.getElementById('mp33').onclick = function () {

  var mp33 = document.getElementById("mp33"); //on attrape l'element html complet cliqué
console.log(mp33.innerHTML);
document.getElementById("audiomp3").src=mp33.innerHTML; // on met dans la balise source contenu de l'élément cliqué
}

document.getElementById('wiki').onclick = function () {

  var wiki = document.getElementById("wiki"); //on attrape l'element html complet cliqué
console.log(mp31.innerHTML);



}
