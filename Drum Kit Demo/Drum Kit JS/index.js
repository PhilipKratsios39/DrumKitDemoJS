let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

let buttonInnerHTML = this.innerHTML;

switch(buttonInnerHTML) {
    case "D":
let tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();
    break;

    case "R":
    let tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "U":
    let tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();

break;


case "M":
let tom4 = new Audio("sounds/tom-4.mp3");
tom4.play();
break;

case "K":
let kickBass = new Audio("sounds/kick-bass.mp3");
kickBass.play();
    break;

    case "I":
    let snare = new Audio("sounds/snare.mp3");
    snare.play();
        break;

        case "T":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
            break;


    default:concosole.log(buttonInnerHTML);
}

});

}


