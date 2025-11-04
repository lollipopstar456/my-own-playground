document.addEventListener('DOMContentLoaded', function(){
	const navToggle = document.querySelector('.nav-toggle');
	const primaryNav = document.getElementById('primary-nav');

	if(!navToggle || !primaryNav) return;

	navToggle.addEventListener('click', function(){
		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', String(!expanded));
		document.body.classList.toggle('nav-open');
	});

	// Close menu when focus leaves or on Escape
	document.addEventListener('keydown', function(e){
		if(e.key === 'Escape' && document.body.classList.contains('nav-open')){
			document.body.classList.remove('nav-open');
			navToggle.setAttribute('aria-expanded','false');
			navToggle.focus();
		}
	});
});

