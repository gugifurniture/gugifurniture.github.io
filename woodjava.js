	function change1(){
	var p=document.getElementById("firstP");
	p.innerHTML="크리스마스";
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
