var square = document.getElementsByClassName('square');

for(var i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}

var menu = document.getElementById('menu');
var secondcontainer = document.getElementById('secondcontainer');
var scposition = secondcontainer.getBoundingClientRect();
var profilpicture = document.getElementById('profilpicture');

document.addEventListener("scroll", function(event) {
	if(window.pageYOffset >= scposition.top-150){
  	menu.style.opacity="0";
  }
  if (window.pageYOffset <= scposition.top-150){
    menu.style.opacity="1";
  }

	if(window.pageYOffset >= scposition.top-100){
  	profilpicture.classList.add('profilpicture-animation');
  }
  if(window.pageYOffset <= scposition.top-600){
  	profilpicture.classList.remove('profilpicture-animation');
  }
});
