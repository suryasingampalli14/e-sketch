const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = ''; // Clear existing squares
  const totalSquares = size * size;
  const squareSize = 960 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    

    // Hover effect (basic black trail)
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
  }
}

// Resize button functionality
resizeBtn.addEventListener('click', () => {
  let size = prompt('Enter grid size (max 100):');
  size = parseInt(size);
  if (size && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Invalid input. Please enter a number between 1 and 100.');
  }
});

// Initial grid
createGrid(16);
