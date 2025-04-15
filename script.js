const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.letterSpacing = "10px";
ctx.font="bold 40px serif";
ctx.strokeText("Un texto en mi canvas", 5, 240);

ctx.shadowColor = "red";
ctx.shadowBlur = 15;

ctx.font="italic 30px sans ";
ctx.fillText("Otro texto en el canvas", 5, 280);

ctx.shadowColor = "blue";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY =10;
ctx.shadowBlur = 5;

ctx.beginPath();

ctx.arc(500,450,100,0,2*Math.PI);
ctx.stroke();

const gradient = ctx.createLinearGradient(20, 0, 220, 0);

// Add three color stops
gradient.addColorStop(0, "purple");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "red");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
