



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}




document.querySelector(".start-page-img-mann").addEventListener("mouseover", function () {
    var audio = new Audio("audio/click.wav");
    audio.play();
})

document.querySelector(".start-page-img-frau").addEventListener("mouseover", function () {
    var audio = new Audio("audio/click.wav");
    audio.play();
})

