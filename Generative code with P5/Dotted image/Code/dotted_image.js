let imgArray;
let imgWidth;
let imgHeight;
let distance = 12;

function preload() {
  loadJSON("image.json", function (data) {
    imgArray = data;
    imgHeight = imgArray.length;
    imgWidth = imgArray[0].length;
  });
}

function setup() {
  createCanvas(
    imgWidth * distance + distance, // width
    imgHeight * distance + distance, // height
    SVG // allows us to save the canvas as an SVG
  );

  // Loops through each pixel in the imgArray and draws a circle for each pixel
  for (let y = 0; y < imgHeight; y++) {
    for (let x = 0; x < imgWidth; x++) {
      let col = imgArray[y][x]; // Returns an array containing the RGB values
      let xPos = x * distance + distance; // Calculates the x position
      let yPos = y * distance + distance; // Calculates the y position
      fill(col[0], col[1], col[2]); // Sets the fill color for the circle
      noStroke();
      ellipse(xPos, yPos, 10, 10);
    }
  }

  // Write .svg or .png to save the canvas (use svg for plotter and png for laser)
  save("drawing.svg");
  print("Image saved");
}
