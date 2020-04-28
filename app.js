// Define UI variables
const btnOne = document.getElementById('btn1'),
      btnTwo = document.getElementById('btn2'),
      btnThree = document.getElementById('btn3'),
      computerTxt = document.getElementById('computerText'),
      computerChoiceImg = document.getElementById('computerChoiceImg');


// Event Handlers
btnOne.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber === 1){
    computerChoiceImg.src = 'images/rock.png';
    computerChoiceImg.style = "height: 300px";
  } else if (randomNumber === 2){
    computerChoiceImg.src = 'images/paper.png';
    computerChoiceImg.style = "height: 300px";
  } else if (randomNumber === 3){
    computerChoiceImg.src = 'images/scissors.png';
    computerChoiceImg.style = "height: 300px";
  }
});

btnTwo.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber === 1){
    computerChoiceImg.src = 'images/rock.png';
    computerChoiceImg.style = "height: 300px";
  } else if (randomNumber === 2){
    computerChoiceImg.src = 'images/paper.png';
    computerChoiceImg.style = "height: 300px";
  } else if (randomNumber === 3){
    computerChoiceImg.src = 'images/scissors.png';
    computerChoiceImg.style = "height: 300px";
  }
});

btnThree.addEventListener('click', function(){
  randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber === 1){
    computerChoiceImg.src = 'images/rock.png';
    computerChoiceImg.style = "height: 300px";
  } else if (randomNumber === 2){
    computerChoiceImg.src = 'images/paper.png';
    computerChoiceImg.style = "height: 300px";
  } else if (randomNumber === 3){
    computerChoiceImg.src = 'images/scissors.png';
    computerChoiceImg.style = "height: 300px";
  }
});


