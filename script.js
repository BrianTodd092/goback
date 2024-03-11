var c =document.getElementById('cva');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(100,20);
ctx.lineTo(175,100);
ctx.lineTo(20,100);
ctx.lineTo(20,20);
ctx.font ='50px Arial';
ctx.strokeStyle="red";
//ctx.textAlign = "center";
ctx.strokeText('Today',80,90);

ctx.stroke();
