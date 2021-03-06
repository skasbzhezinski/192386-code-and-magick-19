'use strict';

var userDialog = document.querySelector('.setup');

var reveal = function (hiddenElement) {
  hiddenElement.classList.remove('hidden');
};

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var eyes = ['black', 'red', 'blue', 'yellow', 'green'];
var coats = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var getRandomToMax = function (maxNum) {
  return Math.floor(Math.random() * (maxNum));
};

var generateWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      fullName: names[getRandomToMax(names.length)] + ' ' + lastNames[getRandomToMax(lastNames.length)],
      coatColor: coats[getRandomToMax(coats.length)],
      eyesColor: eyes[getRandomToMax(eyes.length)]
    };
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.fullName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var addElement = function (array) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i]));
  }
  return fragment;
};

var displaySettingsWindow = function () {
  similarListElement.appendChild(addElement(generateWizards()));
  reveal(userDialog);
  reveal(userDialog.querySelector('.setup-similar'));
};

displaySettingsWindow();
