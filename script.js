var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("propertyDetails");
var bn = document.getElementById("propertyDetail");
var bt = document.getElementById("propertyDetais");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}
bn.onclick = function() {
	modal.style.display = "block";
}
bt.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
setTimeout(function() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'block';
    
    var closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', function() {
      popupContainer.style.display = 'none';
    });
  }, 30000);