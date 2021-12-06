	function change1(){
	var p=document.getElementById("firstP");
	p.innerHTML="크리스마스트리짜잔";
}

function startClock() {
	var clock = document.getElementById("clock");
	timeout(clock);
}

function timeout(obj) {
	var current = new Date();
	obj.innerHTML = current.toLocaleTimeString()
	setTimeout("timeout(clock)", 1000); // 1초 후 timeout() 호출
}

	
function over1(obj){obj.src="https://user-images.githubusercontent.com/92727113/144758108-d17fca76-eb2c-4257-ab97-aea355db9865.jpg"; alt="youTube"; width="30"; heighte="30"; 이메일;}
function out1(obj){obj.src=https://user-images.githubusercontent.com/92727113/144758077-25556118-9923-4d94-b1b6-2d8203da92a6.jpg"; alt="email"; width="20"; heighte="20"; 유튜브;}

	function over1(){
	var p=document.getElementById("p2");
	p.innerHTML="크리스마스트리짜잔";
}
