;(function(){
	document.addEventListener("DOMContentLoaded", function(){

		var syb = document.getElementById('syb');
		var sybHeight = syb.offsetHeight;
		var winHeight = window.innerHeight;

		console.log(syb);
		console.log(sybHeight);
		console.log(winHeight);

		function setHeight(){
			if (sybHeight < winHeight){
				syb.style.height = (winHeight - 160) + 'px';
			}else{
				syb.style.height = '';
			}
		}
		setHeight();

		window.addEventListener('resize', setHeight);
	
	}); 
})(); 