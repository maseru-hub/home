
function checkMyForm() {
  var myName = document.getElementById("fullName").value;
  var myMail = document.getElementById("myEmail").value;
  var myPhone = document.getElementById("myPhone").value;
  var firstPass = document.getElementById("firstPass").value;
  var secondPass = document.getElementById("secondPass").value;
  var note = document.getElementById("note");

  if (myName === "") {
    note.textContent = "Please write your full name first.";
    return false;
  }
  if (myMail === "" || myMail.indexOf("@") < 0) {
    note.textContent = "Your email looks wrong, it needs @.";
    return false;
  }
  if (myPhone.length < 8) {
    note.textContent = "Phone number is too short for Lesotho.";
    return false;
  }
  if (firstPass.length < 8) {
    note.textContent = "Password must be 8 letters or more.";
    return false;
  }
  if (firstPass !== secondPass) {
    note.textContent = "The two passwords are not the same.";
    return false;
  }

  note.style.color = "green";
  note.textContent = "Thanks " + myName + ", your form is correct. We will call you.";
  return false;
}


var myPics = ["snow.jpg", "onthe rocks.jpg", "lion.jpg", "snow.jpg"];
var place = 0;

function showPic(num) {
  place = num;
  document.getElementById("bigPhoto").src = myPics[num];
}

function goNext() {
  place = place + 1;
  if (place >= myPics.length) { place = 0; }
  document.getElementById("bigPhoto").src = myPics[place];
}

function goBack() {
  place = place - 1;
  if (place < 0) { place = myPics.length - 1; }
  document.getElementById("bigPhoto").src = myPics[place];
}