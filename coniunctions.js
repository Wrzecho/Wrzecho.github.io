//tablica najblizszych eventow
const marscon = [
    {time: '2010-01-29', planet: 'Mars'},
    {time: '2012-03-03', planet: 'Mars'},
    {time: '2014-04-08', planet: 'Mars'},
    {time: '2016-05-22', planet: 'Mars'},
    {time: '2018-07-27', planet: 'Mars'},
    {time: '2020-10-13', planet: 'Mars'},
    {time: '2022-12-08', planet: 'Mars'},
    {time: '2025-01-16', planet: 'Mars'},
    {time: '2027-02-19', planet: 'Mars'},
    {time: '2029-03-25', planet: 'Mars'},
    {time: '2031-05-04', planet: 'Mars'},
    {time: '2033-06-28', planet: 'Mars'},
    {time: '2035-09-15', planet: 'Mars'},
    {time: '2037-11-19', planet: 'Mars'},
    {time: '2040-01-02', planet: 'Mars'},
    {time: '2042-02-06', planet: 'Mars'},
    {time: '2044-03-11', planet: 'Mars'},
    {time: '2046-04-17', planet: 'Mars'},
    {time: '2048-06-03', planet: 'Mars'},
    {time: '2050-08-14', planet: 'Mars'}];
const jupitercon = [
    {time: '2010-09-21', planet: 'Jupiter'},
    {time: '2011-10-29', planet: 'Jupiter'},
    {time: '2012-12-03', planet: 'Jupiter'},
    {time: '2014-01-05', planet: 'Jupiter'},
    {time: '2015-02-06', planet: 'Jupiter'},
    {time: '2016-03-08', planet: 'Jupiter'},
    {time: '2017-04-07', planet: 'Jupiter'},
    {time: '2018-05-09', planet: 'Jupiter'},
    {time: '2019-06-10', planet: 'Jupiter'},
    {time: '2020-07-14', planet: 'Jupiter'},
    {time: '2021-08-20', planet: 'Jupiter'},
    {time: '2022-09-26', planet: 'Jupiter'},
    {time: '2023-11-03', planet: 'Jupiter'},
    {time: '2024-12-07', planet: 'Jupiter'},
    {time: '2026-01-10', planet: 'Jupiter'},
    {time: '2027-02-11', planet: 'Jupiter'},
    {time: '2028-03-12', planet: 'Jupiter'},
    {time: '2029-04-12', planet: 'Jupiter'},
    {time: '2030-05-13', planet: 'Jupiter'},
    {time: '2031-06-15', planet: 'Jupiter'},
    {time: '2032-07-19', planet: 'Jupiter'},
    {time: '2033-08-25', planet: 'Jupiter'},
    {time: '2034-10-02', planet: 'Jupiter'},
    {time: '2035-11-08', planet: 'Jupiter'},
    {time: '2036-12-12', planet: 'Jupiter'},
    {time: '2038-01-14', planet: 'Jupiter'},
    {time: '2039-02-15', planet: 'Jupiter'},
    {time: '2040-03-16', planet: 'Jupiter'},
    {time: '2041-04-16', planet: 'Jupiter'},
    {time: '2042-05-17', planet: 'Jupiter'},
    {time: '2043-06-20', planet: 'Jupiter'},
    {time: '2044-07-24', planet: 'Jupiter'},
    {time: '2045-08-30', planet: 'Jupiter'},
    {time: '2046-10-07', planet: 'Jupiter'},
    {time: '2047-11-13', planet: 'Jupiter'},
    {time: '2048-12-17', planet: 'Jupiter'},
    {time: '2050-01-19', planet: 'Jupiter'}];
const saturncon = [
        {time: '2010-03-22', planet: 'Saturn'},
        {time: '2011-04-03', planet: 'Saturn'},
        {time: '2012-04-15', planet: 'Saturn'},
        {time: '2013-04-28', planet: 'Saturn'},
        {time: '2014-05-10', planet: 'Saturn'},
        {time: '2015-05-23', planet: 'Saturn'},
        {time: '2016-06-03', planet: 'Saturn'},
        {time: '2017-06-15', planet: 'Saturn'},
        {time: '2018-06-27', planet: 'Saturn'},
        {time: '2019-07-09', planet: 'Saturn'},
        {time: '2020-07-20', planet: 'Saturn'},
        {time: '2021-08-02', planet: 'Saturn'},
        {time: '2022-08-14', planet: 'Saturn'},
        {time: '2023-08-27', planet: 'Saturn'},
        {time: '2024-09-08', planet: 'Saturn'},
        {time: '2025-09-21', planet: 'Saturn'},
        {time: '2026-10-04', planet: 'Saturn'},
        {time: '2027-10-18', planet: 'Saturn'},
        {time: '2028-10-30', planet: 'Saturn'},
        {time: '2029-11-13', planet: 'Saturn'},
        {time: '2030-11-27', planet: 'Saturn'},
        {time: '2031-12-11', planet: 'Saturn'},
        {time: '2032-12-24', planet: 'Saturn'},
        {time: '2034-01-08', planet: 'Saturn'},
        {time: '2035-01-22', planet: 'Saturn'},
        {time: '2036-02-05', planet: 'Saturn'},
        {time: '2037-02-17', planet: 'Saturn'},
        {time: '2038-03-03', planet: 'Saturn'},
        {time: '2039-03-16', planet: 'Saturn'},
        {time: '2040-03-28', planet: 'Saturn'},
        {time: '2041-04-10', planet: 'Saturn'},
        {time: '2042-04-23', planet: 'Saturn'},
        {time: '2043-05-05', planet: 'Saturn'},
        {time: '2044-05-17', planet: 'Saturn'},
        {time: '2045-05-29', planet: 'Saturn'},
        {time: '2046-06-10', planet: 'Saturn'},
        {time: '2047-06-22', planet: 'Saturn'},
        {time: '2048-07-03', planet: 'Saturn'},
        {time: '2049-07-16', planet: 'Saturn'},
        {time: '2050-07-28', planet: 'Saturn'}];
const uranuscon = [
            {time: '2010-09-21', planet: 'Uranus'},
            {time: '2011-09-26', planet: 'Uranus'},
            {time: '2012-09-29', planet: 'Uranus'},
            {time: '2013-10-03', planet: 'Uranus'},
            {time: '2014-10-07', planet: 'Uranus'},
            {time: '2015-10-12', planet: 'Uranus'},
            {time: '2016-10-15', planet: 'Uranus'},
            {time: '2017-10-19', planet: 'Uranus'},
            {time: '2018-10-24', planet: 'Uranus'},
            {time: '2019-10-28', planet: 'Uranus'},
            {time: '2020-10-31', planet: 'Uranus'},
            {time: '2021-11-04', planet: 'Uranus'},
            {time: '2022-11-09', planet: 'Uranus'},
            {time: '2023-11-13', planet: 'Uranus'},
            {time: '2024-11-17', planet: 'Uranus'},
            {time: '2025-11-21', planet: 'Uranus'},
            {time: '2026-11-25', planet: 'Uranus'},
            {time: '2027-11-30', planet: 'Uranus'},
            {time: '2028-12-03', planet: 'Uranus'},
            {time: '2029-12-08', planet: 'Uranus'},
            {time: '2030-12-12', planet: 'Uranus'},
            {time: '2031-12-17', planet: 'Uranus'},
            {time: '2032-12-20', planet: 'Uranus'},
            {time: '2033-12-25', planet: 'Uranus'},
            {time: '2034-12-30', planet: 'Uranus'},
            {time: '2036-01-03', planet: 'Uranus'},
            {time: '2037-01-07', planet: 'Uranus'},
            {time: '2038-01-12', planet: 'Uranus'},
            {time: '2039-01-17', planet: 'Uranus'},
            {time: '2040-01-21', planet: 'Uranus'},
            {time: '2041-01-25', planet: 'Uranus'},
            {time: '2042-01-30', planet: 'Uranus'},
            {time: '2043-02-04', planet: 'Uranus'},
            {time: '2044-02-09', planet: 'Uranus'},
            {time: '2045-02-13', planet: 'Uranus'},
            {time: '2046-02-18', planet: 'Uranus'},
            {time: '2047-02-23', planet: 'Uranus'},
            {time: '2048-02-28', planet: 'Uranus'},
            {time: '2049-03-04', planet: 'Uranus'},
            {time: '2050-03-09', planet: 'Uranus'}];    
const neptunecon = [
                {time: '2010-08-20', planet: 'Neptune'},
                {time: '2011-08-22', planet: 'Neptune'},
                {time: '2012-08-24', planet: 'Neptune'},
                {time: '2013-08-27', planet: 'Neptune'},
                {time: '2014-08-29', planet: 'Neptune'},
                {time: '2015-09-01', planet: 'Neptune'},
                {time: '2016-09-02', planet: 'Neptune'},
                {time: '2017-09-05', planet: 'Neptune'},
                {time: '2018-09-07', planet: 'Neptune'},
                {time: '2019-09-10', planet: 'Neptune'},
                {time: '2020-09-11', planet: 'Neptune'},
                {time: '2021-09-14', planet: 'Neptune'},
                {time: '2022-09-16', planet: 'Neptune'},
                {time: '2023-09-19', planet: 'Neptune'},
                {time: '2024-09-21', planet: 'Neptune'},
                {time: '2025-09-23', planet: 'Neptune'},
                {time: '2026-09-26', planet: 'Neptune'},
                {time: '2027-09-28', planet: 'Neptune'},
                {time: '2028-09-30', planet: 'Neptune'},
                {time: '2030-10-02', planet: 'Neptune'},
                {time: '2031-10-05', planet: 'Neptune'},
                {time: '2032-10-07', planet: 'Neptune'},
                {time: '2029-10-09', planet: 'Neptune'},
                {time: '2033-10-11', planet: 'Neptune'},
                {time: '2034-10-14', planet: 'Neptune'},
                {time: '2035-10-16', planet: 'Neptune'},
                {time: '2036-10-18', planet: 'Neptune'},
                {time: '2037-10-20', planet: 'Neptune'},
                {time: '2038-10-23', planet: 'Neptune'},
                {time: '2039-10-25', planet: 'Neptune'},
                {time: '2040-10-27', planet: 'Neptune'},
                {time: '2041-10-29', planet: 'Neptune'},
                {time: '2042-11-01', planet: 'Neptune'},
                {time: '2043-11-03', planet: 'Neptune'},
                {time: '2044-11-05', planet: 'Neptune'},
                {time: '2045-11-07', planet: 'Neptune'},
                {time: '2046-11-10', planet: 'Neptune'},
                {time: '2047-11-12', planet: 'Neptune'},
                {time: '2048-11-14', planet: 'Neptune'},
                {time: '2049-11-16', planet: 'Neptune'},
                {time: '2050-11-19', planet: 'Neptune'}];
            
    let eventtime = [];
    let eventyear, eventmonth, eventday; 

    let marslist = document.querySelector('#marslist');
    let jupiterlist = document.querySelector('#jupiterlist');
    let saturnlist = document.querySelector('#saturnlist');
    let uranuslist = document.querySelector('#uranuslist');
    let neptunelist = document.querySelector('#neptunelist');

			let content;
			const liadd = (element, lista, planet) => {
                eventtime = element.time.split('-');
                eventyear = parseInt(eventtime[0]);
                eventmonth = parseInt(eventtime[1]);
                eventday = parseInt(eventtime[2]);
                content = document.createElement('li');
                content.innerHTML = element.time;
                content.onclick = () => {
                    eventtime = element.time.split('-');
                    eventyear = parseInt(eventtime[0]);
                    eventmonth = parseInt(eventtime[1]);
                    eventday = parseInt(eventtime[2]);
                    date.setFullYear(eventyear);
                    date.setMonth(eventmonth-1);
                    date.setDate(eventday);
                    removealltrails();
                    b2 = date.getFullYear(); //year
                    b3 = date.getMonth()+1; //month
                    b4 = date.getDate(); //day
                    b5 = date.getHours(); //hours
                    b6 = date.getMinutes(); //minutes
                    updateplanetspositions(b2,b3,b4,b5,b6);
                    animationstate = false;
                    strdate = b4+" " +miesiace[b3-1]+" "+b2+" r";
                    document.getElementById("infodate").innerHTML = "Data: "+strdate;
                    earth.material.color.setHex( 0xFF00FF );
                    planet = element.planet.toLowerCase();
                    eval(planet).material.color.setHex( 0xFF00FF);
                }
				lista.appendChild(content);
            }

window.onload = () => {
    for(let u=0; u<marscon.length; u++) {
        liadd(marscon[u], marslist);
    }
    for(let u=0; u<jupitercon.length; u++) {
        liadd(jupitercon[u], jupiterlist);
    }
    for(let u=0; u<saturncon.length; u++) {
        liadd(saturncon[u], saturnlist);
    }
    for(let u=0; u<uranuscon.length; u++) {
        liadd(uranuscon[u], uranuslist);
    }
    for(let u=0; u<neptunecon.length; u++) {
        liadd(neptunecon[u], neptunelist);
    }
};


const showmarslist = (btn) => {
    resetplanetscolors();
    btn.classList.add('activelistbtn');
    marslist.style.display = 'block';
    jupiterlist.style.display = 'none';
    saturnlist.style.display = 'none';
    uranuslist.style.display = 'none';
    neptunelist.style.display = 'none';
}

const showjupiterlist = (btn) => {
    resetplanetscolors();
    btn.classList.add('activelistbtn');
    jupiterlist.style.display = 'block';
    marslist.style.display = 'none';
    saturnlist.style.display = 'none';
    uranuslist.style.display = 'none';
    neptunelist.style.display = 'none';
}

const showsaturnlist = (btn) => {
    resetplanetscolors();
    btn.classList.add('activelistbtn');
    saturnlist.style.display = 'block';
    marslist.style.display = 'none';
    jupiterlist.style.display = 'none';
    uranuslist.style.display = 'none';
    neptunelist.style.display = 'none';
}

const showuranuslist = (btn) => {
    resetplanetscolors();
    btn.classList.add('activelistbtn');
    uranuslist.style.display = 'block';
    marslist.style.display = 'none';
    jupiterlist.style.display = 'none';
    saturnlist.style.display = 'none';
    neptunelist.style.display = 'none';
}

const showneptunelist = (btn) => {
    resetplanetscolors();
    btn.classList.add('activelistbtn');
    neptunelist.style.display = 'block';
    marslist.style.display = 'none';
    jupiterlist.style.display = 'none';
    saturnlist.style.display = 'none';
    uranuslist.style.display = 'none';
}

const resetplanetscolors = () => {
    mercury.material.color.setHex( 0xffffff );
    venus.material.color.setHex( 0xffffff );
    earth.material.color.setHex( 0xffffff );
    mars.material.color.setHex( 0xffffff );
    jupiter.material.color.setHex( 0xffffff );
    saturn.material.color.setHex( 0xffffff );
    uranus.material.color.setHex( 0xffffff );
    neptune.material.color.setHex( 0xffffff );
    let btns = document.getElementsByClassName('listbtn');
    for (let i=0; i<btns.length; i++) {
        btns[i].classList.remove('activelistbtn');
      }
}