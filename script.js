const image2 = document.querySelector('.image2');

window.addEventListener('mousemove', e => {
	image2.style.left = e.clientX + 'px';
});