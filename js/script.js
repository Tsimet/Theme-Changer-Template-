const svetlo = document.getElementById('svetla_tema');
const tamno = document.getElementById('tamna_tema');
const solar = document.getElementById('solar_tema');
const body = document.body;

const theme = localStorage.getItem('theme');
const jel_solar = localStorage.getItem('jel_solar');
if(theme){
	body.classList.add(theme);
	jel_solar && body.classList.add('solar');
}

tamno.addEventListener('click', function(){
	body.classList.remove('svetlo');
	body.classList.add('tamno');
	localStorage.setItem('theme', 'tamno');
});
svetlo.addEventListener('click', function(){
	body.classList.remove('tamno');
	body.classList.add('svetlo');
	localStorage.setItem('theme', 'svetlo');
})

solar.addEventListener('click', function(){
	if(body.classList.contains('solar')){
		body.classList.remove('solar');
		solar.style.cssText= `
			--bg-solar: var(--zuta);
		`
		solar.innerText = 'Nijanse sive';
		localStorage.removeIem('jel_solar');
	} else{
		body.classList.add('solar');
		solar.style.cssText= `
			--bg-solar: white;
		`
		solar.innerText = 'Dodaj boje';
		localStorage.setItem('jel_solar', true);
	}
})