let currentIndex = 0;

function changeSlide(n) {
    currentIndex += n;
    showSlide(currentIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentIndex) ? 'block' : 'none';
    });
}

// Initial display
showSlide(currentIndex);
function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('.p1').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
  $('.p2').css({
		'background-position' : '50% ' + (-scrollPos/8)+"px"
	});
  $('.p3').css({
		'background-position' : '70% ' + (-scrollPos/16)+"px"
	});
	$('.parallax-text').css({
		'margin-top': (scrollPos/2)+"px",
		'opacity': 1-(scrollPos/230)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});
function openPopup() {
	var popup = document.getElementById("popup");
	var formFrame = document.getElementById("formFrame");
  
	// Wait for the iframe content to load before showing the popup
	formFrame.onload = function() {
	  popup.style.display = "block";
	};
	formFrame.src = formFrame.src; // Reload iframe to trigger onload event
  }
  
  // Close the popup
  function closePopup() {
	var popup = document.getElementById("popup");
	popup.style.display = "none";
  }
  
  // Ensure the popup stays at the bottom right even when scrolling
  window.onscroll = function() {
	var popup = document.getElementById("popup");
	var openBtn = document.getElementById("openBtn");
	var yOffset = window.pageYOffset;
	var rightOffset = document.documentElement.clientWidth - (popup.offsetWidth + 40); // 20px right margin
  
	popup.style.bottom = (20 - yOffset) + "px";
	popup.style.right = (rightOffset) + "px";
	openBtn.style.bottom = (20 - yOffset) + "px";
	openBtn.style.right = (rightOffset) + "px";
  };
  const jobListings = document.querySelectorAll('.job-listing');

  jobListings.forEach(listing => {
	  listing.addEventListener('click', () => {
		  listing.classList.toggle('active');
	  });
  });
  document.addEventListener("DOMContentLoaded", function() {
	const serviceListings = document.querySelectorAll(".service-listing");

	serviceListings.forEach(function(serviceListing) {
		const serviceHeader = serviceListing.querySelector(".service-header");
		const serviceDescription = serviceListing.querySelector(".service-description");

		serviceHeader.addEventListener("click", function() {
			serviceListing.classList.toggle("collapsed");
			serviceListing.classList.toggle("expanded");
		});
	});
});
