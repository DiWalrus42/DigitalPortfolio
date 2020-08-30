const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

	let day = new Date();
	let hh = day.getHours() * 30;
	let mh = day.getMinutes() * deg;
	let sh = day.getSeconds() * deg;

	hr.style.transform = `rotateZ(${(hh)+(mh/12)}deg)`;
	mn.style.transform = `rotateZ(${mh}deg)`;
	sc.style.transform = `rotateZ(${sh}deg)`;

});
