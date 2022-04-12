

// ye apna click select krega

for ( var i= 0; i< document.querySelectorAll(".drum").length ; i++   )
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
          var word = this.innerHTML;
           // ye apna word lega w , a etc jo ki
           makeSound(word);
          buttonAnimation(word);

         });
}




//  ye apna keyboard se key lega

document.addEventListener("keypress",function(event)
{
      makeSound(event.key);
      buttonAnimation(event.key);
});



// apan idhr loop na lga ke sbko alag alag bi likh skta the pr usse time bauth lgta islye apan ne loop lagay
// apan switch ki jagah if ka bi use kr skte the but usse apna code bauth bada ho jata

function makeSound(key)
{
  switch (key) {
      case "w":
      var audio  = new Audio("sounds/crash.mp3");
      audio.play();
      break;

      case "a" :
      var audio  = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

      case "s":
      var audio  = new Audio("sounds/snare.mp3");
      audio.play();
      break;

      case"d":
      var audio  = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

      case"j":
      var audio  = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

      case"k":
      var audio  = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

      case"l":
      var audio  = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;


    default: console.log(word);
  }

  };


  // ab apan enimation karna chata hai to uske liye apan ne naya function bnaya


  function buttonAnimation(currentkey)
  {
    var activeButton = document.querySelector("." + currentkey);
     activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
  }
