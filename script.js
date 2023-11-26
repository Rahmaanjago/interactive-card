"use strict"

const surname = document.querySelector('.name');
const number = document.querySelector('.number');
const pin = document.querySelector('.pin');
const month = document.getElementById('month');
const year = document.getElementById('year');
const btnSubmit = document.querySelector('.btn-submit');
const btnContinue = document.querySelector('.btn-continue');
const inputName = document.querySelector('.input-name');
const inputNumber = document.querySelector('.input-number');
const inputCVV = document.querySelector('.input-cvv');
const form = document.getElementById('form');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');
const displaySection = document.querySelector('.display-section');
const scetionTwo = document.querySelector('.section-2'); 


form.onsubmit = function(e){
    e.preventDefault();

    // var surname = document.querySelector('.name');

    inputName.textContent = "";
    inputName.textContent = surname.value;

    inputNumber.textContent = "";
    inputNumber.textContent = number.value;

    inputCVV.textContent = "";
    inputCVV.textContent = pin.value;

    inputMonth.textContent = '';
    inputMonth.textContent = month.value;

    inputYear.textContent = "";
    inputYear.textContent = year.value;

    btnSubmit.addEventListener('click' , function(){
        displaySection.classList.remove('hidden');
        scetionTwo.classList.add('hidden');
    })
}



// btnContinue.addEventListener('click' , function(){
//      displaySection.classList.add('hidden');
//     scetionTwo.classList.remove('hidden');
//  })


