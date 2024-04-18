// get the modal
var modal = document.getElementById('rulesModal');
// get the button that opens the modal
var btn = document.getElementById('rulesBtn');
// get the span element that closes the modal
var span = document.getElementsByClassName('close')[0];
// when the user clicks the button it opens the modal
btn.onclick = function() {
  modal.style.display = "block"
}
// when the user clocks on span closes the modal 
span.onclick = function() {
  modal.style.display = "none"
}
// when the user clicks anywhere else closes the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}