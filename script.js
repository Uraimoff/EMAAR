var modal = document.getElementById("myModal");
var CtaModal = document.getElementById("myCtaModal");

// Get the button that opens the modal
var btn = document.getElementById("propertyDetails");
var bn = document.getElementById("propertyDetail");
var bt = document.getElementById("propertyDetais");
var seeMore = document.getElementById("seeMore");

// Get the <span> element that closes the modal
var secClose = document.getElementById("secondClose");
var ctaClose = document.getElementById("CTAclose");

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
	console.log("error");
}
bn.onclick = function() {
	modal.style.display = "block";
}
bt.onclick = function() {
	modal.style.display = "block";
}
seeMore.onclick = function() {
	CtaModal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
secClose.onclick = function() {
	modal.style.display = "none";
}
ctaClose.onclick = function() {
	CtaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
window.onclick = function(event) {
	if (event.target == CtaModal) {
		CtaModal.style.display = "none";
	}
}
setTimeout(function() {
	var popupContainer = document.getElementById('popup-container');
	popupContainer.style.display = 'block';
    
    var closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', function() {
      popupContainer.style.display = 'none';
    });
  }, 1000);
AOS.init({disable: 'mobile'});
AOS.init({
	disable: function() {
	  var maxWidth = 800;
	  return window.innerWidth < maxWidth;
	}
  });
  