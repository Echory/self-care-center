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

var savedMessages = [];
var randomMsg;

var receiveMsgBtn = document.querySelector('.receive-message');
var viewFavBtn = document.querySelector('.view-favorites');
var saved = document.querySelector('.messages-saved');
var choosePage = document.querySelector('.main-body');

receiveMsgBtn.addEventListener('click', showMessage);
viewFavBtn.addEventListener('click', showFavs)


function showMessage() {
  var msgOption = document.querySelector('input[name="message"]:checked').value;

  if(msgOption === 'affirmation'){
    randomMsg = affirmations[Math.floor(Math.random()*affirmations.length)];
  } else {
    randomMsg = mantras[Math.floor(Math.random()*mantras.length)];
  }
  document.getElementById("message-container").innerHTML = `<p>${randomMsg}</p> <button class="save">Save to favorites</button>`;

  var saveBtn = document.querySelector('.save');

  saveBtn.addEventListener('click', saveMsg);
}

function saveMsg() {
  savedMessages.push(randomMsg);

  var savedPage = document.querySelector('.messages-saved').innerHTML = `<p>${savedMessages}</p>`;
}

function showFavs() {
saved.classList.remove('hidden');
choosePage.classList.add('hidden');
}


// function saveMsg() {
  // savedMessages.push(randomMsg);

  // hide current html
  // show favorite list html


  // insert savedMessages array into html

  // GOOGLE how to insert array of strings into HTML
// }





//Add a favorite button when message appears
//When user clicks fav button, message is saved to favorites array
//Add button to main page that will take user to favorites page
//User should be able to remove message by clicking a button
//There should be a button back to main page
