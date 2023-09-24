function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  let sliderIndex = 0;
const slider = document.querySelector(".slider");
const slideCount = slider.children.length;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 50}%)`;
}

function nextSlide() {
  sliderIndex = (sliderIndex + 1) % slideCount;
  showSlide(sliderIndex);
}

// Set interval for automatic slide change
setInterval(nextSlide, 1000); // Change slide every 3 seconds (adjust as needed)

const navigation = document.querySelector(".navigation");

// Function to add the "scrolled" class to the navigation when the page is scrolled
function handleScroll() {
  if (window.scrollY > 0) {
    navigation.classList.add("scrolled");
  } else {
    navigation.classList.remove("scrolled");
  }
}

// Add a scroll event listener to the window
window.addEventListener("scroll", handleScroll);
