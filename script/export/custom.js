function myturn(){
	var turn = document.querySelector('.logo');
    turn.style.transform="rotate3d(1, 1, 1, 360deg)";
	turn.style.transition = "0.4s";
}

myturn();