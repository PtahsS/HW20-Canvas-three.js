const canvas = document.querySelector("#canvas");
		const ctx = canvas.getContext('2d');

		let x = 300;
		let y = 100;
		let size = 400;
		let angle = 0;
		let handLength = size/4;

		function drawArc(x, y, r, start, end, direction, color) {
			ctx.beginPath();
			ctx.fillStyle = color;		
	   		ctx.arc(x, y, r, start, end, direction);
	   		ctx.fill();
		}

		function drawSnowMan(){

			function drawBody() {
				for (let i = 0; i <3; i++) {
					drawArc(x, y+i*size/4.7, size/10 + i * size/20, 0, Math.PI * 2, false, 'white', 'fill');
				}
			}

			function drawEyes(){
				drawArc(x-size/26, y-size/40, size/80, 0, Math.PI * 2, false, 'black');
	   			drawArc(x+size/26, y-size/40, size/80, 0, Math.PI * 2, false, 'black');
			}
			
			function drawNose() {
				ctx.beginPath();
		   		ctx.moveTo(x, y+size/200);
		   		ctx.arc(x, y+size/200, size/80, Math.PI/2, Math.PI* 1.5 );
		   		ctx.lineTo(x+size/40, y+size/200);
		   		ctx.lineTo(x, y+size/60);
		   		ctx.fill();
			}
	   		
	   		function drawMouth() {
	   			ctx.beginPath();
		   		ctx.arc(x-size/200, y+size/80, size/20, Math.PI*.8, Math.PI*.2, true);
		   		ctx.stroke();
	   		}
	   		
			function drawLeftHand(){
				ctx.beginPath();
		   		ctx.lineWidth = size/80;
		   		ctx.fillStyle = 'white';
		   		ctx.moveTo(x-size/8, y+size/6.7);
		   		ctx.lineTo((x-size/8)+Math.cos(angle) * handLength, (y+size/6.7)+Math.sin(angle)*handLength);
		   		ctx.stroke()
			}
			
			function drawRightHand() {
				ctx.beginPath();
		   		ctx.lineWidth = size/80;
		   		ctx.fillStyle = 'white';
		   		ctx.moveTo(x+size/8, y+size/6.7);
		   		ctx.lineTo((x+size/8)+Math.cos(angle) * handLength, (y+60)+Math.sin(angle)*handLength );
		   		ctx.stroke()
			}
	   		//snow
	   		function drawSnow() {
	   	   		drawArc(x, y + size/2 + 500, 500, 0, Math.PI * 2, false, '#ddd')
	   		}

	   		drawBody();
	   		drawEyes();
	   		drawNose();
	   		drawMouth();
	   		drawLeftHand();
	   		drawRightHand();
	   		drawSnow();
	   		
		}



		function draw(){
			ctx.clearRect(0, 0, canvas.width, canvas.height );
			drawSnowMan()
			angle++;

		}

		setInterval(draw, 500)
