 // Obtém o modal
 var modal = document.getElementById("myModal");

 // Obtém o link que abre o modal
 var btn = document.getElementById("openModal");
 
 // Obtém o elemento <span> que fecha o modal
 var span = document.getElementsByClassName("close")[0];
 
 // Quando o usuário clicar no link, abre o modal
 btn.onclick = function() {
     modal.style.display = "block";
 }
 
 // Quando o usuário clicar no <span> (x), fecha o modal
 span.onclick = function() {
     modal.style.display = "none";
 }
 
 // Quando o usuário clicar em qualquer lugar fora do modal, também fecha
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }