var li = document.getElementsByTagName('li');
var ul = document.getElementsByTagName('ul')[0];
var snake = [li[0],li[1],li[2],li[3]];
	for(var i=0;i<li.length;i++){
		li[i].style.left = i*50 + 'px';
		li[i].style.top = 0 + 'px';
	}
var defen = 0;
var body = document.getElementsByTagName('body')[0];
var div = document.createElement('div');
body.appendChild(div);
var divshiwu = document.createElement('div');
divshiwu.className = 'shiwu';
div.appendChild(divshiwu);
div.style.left = parseInt(Math.random()*innerWidth/50)*50 + 'px';
div.style.top = parseInt(Math.random()*innerHeight/50)*50 + 'px';
var num = 50;
var mun = 0;
var dong = function(){
	shiwu();
	shibai();
	for(var i=0;i<snake.length;i++){
		if(i == snake.length-1){
			snake[i].style.left = parseInt(snake[i].style.left) + num + 'px';
			snake[i].style.top = parseInt(snake[i].style.top) + mun + 'px';
		}else{
			snake[i].style.left = snake[i+1].style.left;
			snake[i].style.top = snake[i+1].style.top;
		}
	}
	document.onkeydown = function(fx){
	if(fx.keyCode == 38){
		if(mun == 50){

		}else{
			num = 0;
			mun = -50;
		}
	}else
	if(fx.keyCode == 39){
		if(num == -50){
		}else{
			num = 50;
			mun = 0;
		}
	}else
	if(fx.keyCode == 40){
		if(mun == -50){

		}else{
			num = 0;
			mun = 50;
		}
		
	}else
	if(fx.keyCode == 37){
		if(num == 50){

		}else{
			num = -50;
			mun = 0;
		}
	}
}

}
var shiwu = function(){
	if(div.style.left == snake[snake.length-1].style.left && div.style.top == snake[snake.length-1].style.top){
		div.style.top = parseInt(Math.random()*12)*50  + 'px';
		div.style.left = parseInt(Math.random()*26)*50  +'px';
		for(var i=0;i<snake.length;i++){
			if(div.style.left == snake[i].style.left&&div.style.top == snake[i].style.top){
				// div.style.top = parseInt(Math.random()*13)*50  + 'px';
				// div.style.left = parseInt(Math.random()*27)*50  +'px';
				var yRandom = parseInt((innerHeight/50)*Math.random())*50;
				var xRandom = parseInt((innerWidth/50)*Math.random())*50;
				if(xRandom>=innerWidth){xRandom == innerWidth-50}
				if(yRandom>=innerHeight){yRandom == innerHeight-50}
				div.style.top = yRandom  + 'px';
				div.style.left = xRandom  + 'px';
				// div.style.top = parseInt((innerHeight/50)*Math.random())*50  + 'px';
				// div.style.left = parseInt((innerWidth/50)*Math.random())*50  + 'px';
			}
		}
		var newsnake = document.createElement('li');
		snake.unshift(newsnake);
		ul.appendChild(newsnake);

		defen++;
	}
}
var shibai = function(){
	if(0 <= parseInt(snake[snake.length-1].style.left) && parseInt(snake[snake.length-1].style.left)<innerWidth-div.offsetWidth
		){
	}else{
		clearInterval(don);
		var panduan = confirm(' 得分'+' '+defen);
		if(panduan){}	
	}
	if(0 <= parseInt(snake[snake.length-1].style.top) && parseInt(snake[snake.length-1].style.top)<innerHeight-div.offsetHeight){

	}else{
		clearInterval(don);
		var panduan = confirm(' 得分'+' '+defen);
		if(panduan){}
	}
	for(var i = 0;i<snake.length-1;i++){
		if(snake[snake.length-1].style.left == snake[i].style.left&&snake[snake.length-1].style.top == snake[i].style.top){
			clearInterval(don);
			var panduan = confirm(' 得分'+' '+defen);
			if(panduan){}
		}
	}
}
var don = setInterval(dong,150);