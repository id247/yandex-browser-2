;(function(){
	document.addEventListener('DOMContentLoaded', function(){

		var syb = document.getElementById('syb');
		
		function setHeight(){
			syb.style.height = '';
			var sybHeight = syb.offsetHeight;
			var winHeight = window.innerHeight;
			
			if (sybHeight < winHeight){
				syb.style.height = (winHeight - 160 - 120) + 'px';
			}
		}
		setHeight();

		window.addEventListener('resize', setHeight);
	
	}); 
})(); 