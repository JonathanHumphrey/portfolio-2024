// Select the canvas and set up the context
const canvas = document.getElementById('pointillismCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fill the browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate random color
function randomColor() {
  const r = 0;
  const g = 0;
  const b = 0;
  return `rgba(${r}, ${g}, ${b}, ${Math.random().toFixed(2)})`;
}

// Calculate a point on a cubic Bezier curve
function getBezierPoint(t, p0, p1, p2, p3) {
  const x = 
    Math.pow(1 - t, 3) * p0.x +
    3 * Math.pow(1 - t, 2) * t * p1.x +
    3 * (1 - t) * Math.pow(t, 2) * p2.x +
    Math.pow(t, 3) * p3.x;
    
  const y = 
    Math.pow(1 - t, 3) * p0.y +
    3 * Math.pow(1 - t, 2) * t * p1.y +
    3 * (1 - t) * Math.pow(t, 2) * p2.y +
    Math.pow(t, 3) * p3.y;

  return { x, y };
}

// Draw dots along a random Bezier curve
function drawDotsOnBezierCurve() {
    // Randomize curve control points
    const startX = Math.random() * canvas.width;
    const startY = Math.random() * canvas.height;
    const cp1x = Math.random() * canvas.width;
    const cp1y = Math.random() * canvas.height;
    const cp2x = Math.random() * canvas.width;
    const cp2y = Math.random() * canvas.height;
    const endX = Math.random() * canvas.width;
    const endY = Math.random() * canvas.height;
  
    const p0 = { x: startX, y: startY };
    const p1 = { x: cp1x, y: cp1y };
    const p2 = { x: cp2x, y: cp2y };
    const p3 = { x: endX, y: endY };
  
    // Draw dots along the curve
    const numDots = 100; // Number of dots along the curve
    const variance = 25; // Maximum offset for variance
  
    for (let i = 0; i <= numDots; i++) {
      const t = i / numDots; // Parameter t (from 0 to 1)
      const point = getBezierPoint(t, p0, p1, p2, p3);
  
      // Add random variance to the dot position
      const offsetX = (Math.random() - 0.5) * variance; // Random offset for x
      const offsetY = (Math.random() - 0.5) * variance; // Random offset for y
  
      const dotX = point.x + offsetX;
      const dotY = point.y + offsetY;
  
      // Draw the dot
      ctx.beginPath();
      ctx.arc(dotX, dotY, Math.random() * 3 + 1, 0, Math.PI * 2); // Random dot size
      ctx.fillStyle = randomColor();
      ctx.fill();
    }
  }
  

// Generate pointillism art with dots on Bezier curves
function generatePointillism() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Define the number of Bezier curves
  const numCurves = 20;

  // Draw dots along each curve
  for (let i = 0; i < numCurves; i++) {
    drawDotsOnBezierCurve();
  }
}

// Continuously refresh the background for a dynamic effect
generatePointillism(); // Change every 2 seconds

// Handle window resizing
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  generatePointillism();
});
