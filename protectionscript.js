
let clue = document.getElementById("clue_text");
clue.style.display = "none";
let s = "";
s = prompt("please enter the password");
if(s == "clean"){
    clue.style.display = "block";
}else {
    alert('Incorrect password-try again');
}