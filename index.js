var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var x = this.innerHTML;
    sound(x);
    buttonAnimation(x);
  });
}
document.addEventListener("keydown",function (event){
  sound(event.key);
  buttonAnimation(event.key);
});
function sound(x)
{
  switch (x) {
    case "l" :
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k" :
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "j" :
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d" :
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s" :
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "a" :
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "w" :
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();

  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
