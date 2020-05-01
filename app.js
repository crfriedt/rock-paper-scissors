// Define UI variables
const btnOne = document.getElementById('btn1'),
      btnTwo = document.getElementById('btn2'),
      btnThree = document.getElementById('btn3'),
      computerTxt = document.getElementById('computerText'),
      computerChoiceImg = document.getElementById('computerChoiceImg'),
      alert = document.getElementById('alert');



// Event Handlers
btnOne.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1){
    alert.className = 'alert-dark';
    alert.innerHTML = 'It\'s a tie !'
    computerChoiceImg.src = 'images/rock.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  } else if (randomNumber === 2){
    alert.className = 'alert-danger';
    alert.innerHTML = 'You lost !'
    computerChoiceImg.src = 'images/paper.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  } else if (randomNumber === 3){
    alert.className = 'alert-success';
    alert.innerHTML = 'You won !'
    computerChoiceImg.src = 'images/scissors.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  }
});

btnTwo.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1){
    alert.className = 'alert-success';
    alert.innerHTML = 'You won !'
    computerChoiceImg.src = 'images/rock.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  } else if (randomNumber === 2){
    alert.className = 'alert-dark';
    alert.innerHTML = 'It\'s a tie !'
    computerChoiceImg.src = 'images/paper.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  } else if (randomNumber === 3){
    alert.className = 'alert-danger';
    alert.innerHTML = 'You lost !'
    computerChoiceImg.src = 'images/scissors.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  }
});

btnThree.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1){
    alert.className = 'alert-danger';
    alert.innerHTML = 'You lost !'
    computerChoiceImg.src = 'images/rock.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  } else if (randomNumber === 2){
    alert.className = 'alert-success';
    alert.innerHTML = 'You won !'
    computerChoiceImg.src = 'images/paper.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  } else if (randomNumber === 3){
    alert.className = 'alert-dark';
    alert.innerHTML = 'It\'s a tie !'
    computerChoiceImg.src = 'images/scissors.png';
    computerChoiceImg.style = "height: 300px";
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    setTimeout(function(){
      computerChoiceImg.src = '';
      alert.className = '';
      alert.innerHTML = '';
      btnOne.disabled = false;
      btnTwo.disabled = false;
      btnThree.disabled = false;
    }, 2000);
  }
});


