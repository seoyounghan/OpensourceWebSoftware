const downloadCharacterSheet = () => {

  const node = document.getElementById('id-card');

  html2canvas(node).then(canvas => {
    // document.body.appendChild(canvas)
    // var img    = canvas.toDataURL("image/png");
    // document.write('<img src="'+img+'"/>');
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL();
    link.click();
  });

};

const bindInputToElement = (inputEl, elementEl) => {
  inputEl.addEventListener('change', () => {
    elementEl.textContent = inputEl.value;
  });
};

document.
getElementById('download-button').
addEventListener('click', downloadCharacterSheet);

document.
querySelector('.id-card__subject-id').
textContent = md5('something').slice(0, 8);

// Bind name
const nameEl = document.getElementById('name');
bindInputToElement(
nameEl,
document.getElementById('id-card-name'));

nameEl.
addEventListener('change', () => {
  document.
  querySelector('.id-card__subject-id').
  textContent = md5(nameEl.value).slice(0, 8);
});

// Bind date of birth
bindInputToElement(
document.getElementById('date-of-birth'),
document.getElementById('id-card-date-of-birth'));


// Bind gender
bindInputToElement(
document.getElementById('gender'),
document.getElementById('id-card-gender'));


// Bind height
bindInputToElement(
document.getElementById('company'),
document.getElementById('id-card-company'));


// Bind weight
bindInputToElement(
document.getElementById('number'),
document.getElementById('id-card-number'));


// Bind mugshot
document.
getElementById('mugshot').
addEventListener('change', function () {
  if (this.files && this.files[0]) {
    var FR = new FileReader();
    FR.onload = function (e) {
      var img = document.getElementById('id-card-mugshot');
      img.src = e.target.result;
    };
    FR.readAsDataURL(this.files[0]);
  }
});

function colorChange(indexnum) {

  var color = ["#c6e2ff", "#ed8a8a", "#d5ccde", "#eae7dc", "#f3f3f3", "#747474","#a0d6b4","#fddeca","#bb7fe3","#23c710"];

  var idcard = document.getElementById("id-card");
  idcard.style.backgroundImage = "url('')";
  idcard.style.backgroundColor = color[indexnum];
}

function bgChange(indexnum) {
  var card = ["./img/1.png","./img/2.jpeg","./img/3.png","./img/4.jpeg","./img/5.jpeg","./img/6.jpeg"];

  var idcard = document.getElementById("id-card");

  idcard.style.backgroundImage = "url('" + card[indexnum] + "')";
}
function ltcolorChange(indexnum){
  var ltcolor = ["#000000","#696969","#2F4F4F","#663399","#191970","#006400","#8B0000","#8B4513","#1E90FF","#4B0082"];
  var idcard_name = document.getElementById("id-card-name");
  var idcard_birth = document.getElementById("id-card-date-of-birth");
  var idcard_number = document.getElementById("id-card-number");
  var idcard_gender = document.getElementById("id-card-gender");
  var idcard_company = document.getElementById("id-card-company");
  idcard_name.style.color = ltcolor[indexnum];
  idcard_birth.style.color = ltcolor[indexnum];
  idcard_number.style.color = ltcolor[indexnum];
  idcard_gender.style.color = ltcolor[indexnum];
  idcard_company.style.color = ltcolor[indexnum];
}
function ltChange(indexnum){
  var ltfont = ['Black Han Sans','Do Hyeon','Hahmlet','Noto Serif KR','Single Day'];
  var idcard_name = document.getElementById("id-card-name");
  var idcard_birth = document.getElementById("id-card-date-of-birth");
  var idcard_number = document.getElementById("id-card-number");
  var idcard_gender = document.getElementById("id-card-gender");
  var idcard_company = document.getElementById("id-card-company");
  idcard_name.style.fontFamily = ltfont[indexnum];
  idcard_birth.style.fontFamily = ltfont[indexnum];
  idcard_number.style.fontFamily = ltfont[indexnum];
  idcard_gender.style.fontFamily = ltfont[indexnum];
  idcard_company.style.fontFamily = ltfont[indexnum];
}
