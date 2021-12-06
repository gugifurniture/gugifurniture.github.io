	function change1(){
	var p=document.getElementById("firstP");
	p.innerHTML="크리스마스<img src='https://user-images.githubusercontent.com/92727113/144733401-66e12c8d-bcaa-42c6-97f0-067944d0d2da.jpg'>트리짜잔";
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

	
