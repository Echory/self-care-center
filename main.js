var image = 'assets/meditate.svg';

var affirmations = [
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.'
];

var mantras = [
'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
'Don’t let yesterday take up too much of today.',
'Every day is a second chance.',
'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.'
];

var receiveMsgBtn = document.querySelector('.receive-message');
var viewFavBtn = document.querySelector('.view-favorites');
var saved = document.querySelector('.messages-saved');
var choosePage = document.querySelector('.main-body');
var backBtn = document.querySelector('.back-to-main');

receiveMsgBtn.addEventListener('click', showMessage);
viewFavBtn.addEventListener('click', showFavs)
backBtn.addEventListener('click', backToMain);

var savedMessages = [];
var randomMsg;

function showMessage() {
  setMessage()
  
  document.getElementById("message-container").innerHTML = `<p>${randomMsg}</p> <button class="save">Save to favorites</button>`;

  var saveBtn = document.querySelector('.save');
  saveBtn.addEventListener('click', saveMsg);
}

function setMessage() {
  var msgOption = document.querySelector('input[name="message"]:checked').value;

  if(msgOption === 'affirmation'){
    randomMsg = affirmations[Math.floor(Math.random()*affirmations.length)];
  } else {
    randomMsg = mantras[Math.floor(Math.random()*mantras.length)];
  }
}

function saveMsg() {
  savedMessages.push(randomMsg);

  document.querySelector('.messages-saved').innerHTML = `<p>${savedMessages}</p>`;
}

function showFavs() {
  saved.classList.remove('hidden');
  choosePage.classList.add('hidden');
  backBtn.classList.remove('hidden');
}

function backToMain(){
  saved.classList.add('hidden');
  choosePage.classList.remove('hidden');
  backBtn.classList.add('hidden');
}
