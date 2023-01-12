
// ADDING AN ALERT TO EACH BUTTON EVERY TIME IT IS CLICKED
// for (let i = 0; i <arrOfButtons.length; i++){
//   arrOfButtons[i].addEventListener("click",function () {
//     alert("I got clicked");
//   })
// }



// I TRIED TO ADD SOUNDS IN THIS WAY BUT IT IS WRONG
// var audio = new Audio('sounds/tom-1.mp3');
//
// for (let i = 0; i <arrOfButtons.length; i++){
//   arrOfButtons[i].addEventListener("click",audio.play())
// }

var arrOfButtons = document.querySelectorAll("button.drum");

for (let i = 0; i < arrOfButtons.length; i++) {
  arrOfButtons[i].addEventListener("click", function() {
      // this.style.color = "white";
      var buttonInnerHTML = this.innerHTML /*this is the identity of the current button, its properties, in this case : its class name (w,a,s,etc..)*/
        /*onde we clicked in that button, this.innerHTML identifies what button was pressed and send it to the makeSound function*/
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

  });
}

// ANGELA DID THIS IN THIS WAY

// for (var i = 0; i < numberOfDrumButtons; i++) {
//
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//
//     var buttonInnerHTML = this.innerHTML;
//
//     makeSound(buttonInnerHTML);
//
//     buttonAnimation(buttonInnerHTML);
//
//   });
//
// }


document.addEventListener/*we add the EventListener in all the document*/("keypress", function(event) {
  /*keydown is the property that tells us a key was pressed*/
  alert("key was pressed");
  makeSound(event.key); /* event is when something happens, in this case we´re talking about keys, event.key tells us what key was pressed*/
  buttonAnimation(event.key);
});

// document.addEventListener("keypress", function(event) {
//
//   makeSound(event.key);
//
//   buttonAnimation(event.key);
//
// });


function makeSound(key) /*we pass the key that event.key identified into the function*/{
  switch (key) {
    case "w":
      var audio1 = new Audio('sounds/crash.mp3');
      audio1.play();
      break;

    case "a":
      var audio2 = new Audio('sounds/kick-bass.mp3');
      audio2.play();
      break;

    case "s":
      var audio3 = new Audio('sounds/snare.mp3');
      audio3.play();
      break;

    case "d":
      var audio4 = new Audio('sounds/tom-1.mp3');
      audio4.play();
      break;

    case "j":
      var audio5 = new Audio('sounds/tom-2.mp3');
      audio5.play();
      break;

    case "k":
      var audio6 = new Audio('sounds/tom-3.mp3');
      audio6.play();
      break;

    case "l":
      var audio7 = new Audio('sounds/tom-4.mp3');
      audio7.play();
      break;


  }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {

    activeButton.classList.remove("pressed");
     }, 100);


}



// function buttonAnimation(currentKey) {
//
//   var activeButton = document.querySelector("." + currentKey);
//
//   activeButton.classList.add("pressed");
//
//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);
//
// }
