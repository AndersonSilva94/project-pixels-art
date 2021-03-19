const pixelBoard = document.querySelector('#pixel-board');

function createBasicColors(amount) {
  const divColors = document.querySelector('#color-palette');
  for (let index = 1; index <= amount; index += 1) {
    const colors = document.createElement('div');
    colors.className = 'color';
    divColors.appendChild(colors);
  }
}
createBasicColors(8);

function createRandonColors(amount) {
  const divColors = document.querySelector('#color-palette2');
  for (let index = 1; index <= amount; index += 1) {
    const colors = document.createElement('div');
    colors.className = 'color';
    divColors.appendChild(colors);
  }
}
createRandonColors(10);

function assignColors() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'rgb(255, 0, 0)';
  colors[1].style.backgroundColor = 'rgb(255, 127, 0)';
  colors[2].style.backgroundColor = 'rgb(255, 255, 0)';
  colors[3].style.backgroundColor = 'rgb(0, 255, 0)';
  colors[4].style.backgroundColor = 'rgb(0, 0, 255)';
  colors[5].style.backgroundColor = 'rgb(75, 0, 130)';
  colors[6].style.backgroundColor = 'rgb(143, 0, 255)';
  colors[7].style.backgroundColor = 'rgb(0, 0, 0)';
  for (let index = 8; index < colors.length; index += 1) {
    const colorRed = Math.floor(Math.random() * 255);
    const colorGreen = Math.floor(Math.random() * 255);
    const colorBlue = Math.floor(Math.random() * 255);
    colors[index].style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
    window.onload = colors[index].style.backgroundColor;
  }
}
assignColors();

function createPixelBox(amount = 5) {
  for (let index = 1; index <= amount; index += 1) {
    const boxes = document.createElement('div');
    pixelBoard.appendChild(boxes);
    for (let indexI = 1; indexI <= amount; indexI += 1) {
      const boxes1 = document.createElement('div');
      boxes1.className = 'pixel';
      boxes.appendChild(boxes1);
    }
  }
}
createPixelBox();

document.querySelectorAll('.color')[0].className += ' selected';

// Ajuda mútua, em especial ao Murilo Gonçalves, turma 10 - tribo A na explicação sobre event
function changeSelected() {
  const classSelected = document.querySelector('#color-palette');
  const classSelected2 = document.querySelector('#color-palette2');
  
  classSelected.addEventListener('click', changeColors);
  classSelected2.addEventListener('click', changeColors)

  function changeColors(event) {
    const classColor = event.target;
    const elementSelected = document.getElementsByClassName('selected');
    elementSelected[0].classList.remove('selected');
    classColor.classList.add('selected');
  }
}
changeSelected();

// Ajuda mútua, em especial ao Murilo Gonçalves, turma 10 - tribo A na explicação sobre event
function changeColorBox() {
  pixelBoard.addEventListener('click', (event) => {
    const boxPixel = event.target;
    if (boxPixel.className === 'pixel') {
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      boxPixel.style.backgroundColor = selectedColor;
    }
  });
}
changeColorBox();

function clearBoxes() {
  const buttonClear = document.getElementsByTagName('button')[0];
  buttonClear.id = 'clear-board';
  buttonClear.innerText = 'Limpar';
  buttonClear.addEventListener('click', () => {
    const clearColors = document.getElementsByClassName('pixel');
    for (let index = 0; index < clearColors.length; index += 1) {
      clearColors[index].style.backgroundColor = 'white';
    }
  });
}
clearBoxes();

// Ajuda mútua, em especial ao Lucas Godoi - turma 10 - tribo A na criação do if
function insertValueBoard() {
  const inputText = document.getElementsByTagName('input')[0];
  inputText.id = 'board-size';
  inputText.placeholder = 'Digite um valor (5 - 15)'
  const buttonNumberPixel = document.querySelectorAll('button')[1];
  buttonNumberPixel.id = 'generate-board';
  buttonNumberPixel.innerText = 'VQV';
  buttonNumberPixel.addEventListener('click', () => {
    if (inputText.value === '') {
      alert('Board inválido!');
      inputText.value = 5;
    } else if (inputText.value > 15) {
      inputText.value = 15;
    } else if (inputText.value < 5) {
      inputText.value = 5;
    }
    pixelBoard.innerHTML = '';
    createPixelBox(inputText.value);
  });
}
insertValueBoard();
