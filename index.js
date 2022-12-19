const canvas = document.querySelector('#canvas');
const canvasHeight = 500;

function resetCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

function random8BitNumber() {
  return Math.floor(Math.random() * 255);
}

function randomRGB() {
  const rgb = {
    red: random8BitNumber(),
    green: random8BitNumber(),
    blue: random8BitNumber(),
  };

  return rgb;
}

function createPixels(squareSize) {
  const pixelPercentage = 100 / squareSize;
  const pixelHeight = canvasHeight / squareSize;
  resetCanvas();

  for (let i = 0; i < squareSize * squareSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('canvas-pixel');
    pixel.style.flex = `0 0 ${pixelPercentage}%`;
    pixel.style.height = `${pixelHeight}px`;

    pixel.addEventListener('mouseenter', () => {
      const { red, green, blue } = randomRGB();

      pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

    canvas.appendChild(pixel);
  }
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
  let squareSize = +prompt('What size canvas do you want?');
  squareSize = Math.min(Math.max(squareSize, 1), 100);

  createPixels(squareSize);
});
