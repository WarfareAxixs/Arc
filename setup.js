function createMovableContainer() {
  // Create the container
  const container = document.createElement('div');
  container.id = 'movable-container';
  container.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    width: 200px;
    height: 100px;
    background-color: #f0f0f0;
    border: 1px solid #999;
    border-radius: 5px;
    padding: 10px;
    cursor: move;
    user-select: none;
    z-index: 10000;
  `;
  container.textContent = 'Drag me!';
  document.body.appendChild(container);

  // Make it movable
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  container.addEventListener("mousedown", dragStart);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", dragEnd);

  function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    isDragging = true;
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      xOffset = currentX;
      yOffset = currentY;
      setTranslate(currentX, currentY, container);
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }
}

// Execute the function
createMovableContainer();
