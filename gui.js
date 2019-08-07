// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// OBSŁUGA INTERFACE
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// skale w stosunku do promienia Jowisza (dla panelu ze skalą rozmiarów) oraz skalowanie tychże elementów
let iconsizes = [
  1391000 / 139820,
  4879 / 139820,
  12104 / 139820,
  12742 / 139820,
  6779 / 139820,
  139820 / 139820,
  116460 / 139820,
  50724 / 139820,
  49244 / 139820
];
let icons = [
  "sun",
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune"
];
let PLnames = [
  // "Słońce",
  "Merkury",
  "Wenus",
  "Ziemia",
  "Mars",
  "Jowisz",
  "Saturn",
  "Uran",
  "Neptun"
];
let icon, iconsize;
let y = 1;
while (y < icons.length) {
  icon = document.getElementById(icons[y]);
  let hitboxname = icons[y] + "hitbox";
  let hitbox = document.getElementById(hitboxname);
  iconsize = 100 * iconsizes[y].toFixed(2) + "px";
  hitboxsize = 100 * iconsizes[y].toFixed(2) + 25 + "px";
  icon.style.height = iconsize;
  icon.style.width = iconsize;
  hitbox.style.width = hitboxsize;
  hitbox.style.height = hitboxsize;
  y++;
}

// PANEL BOCZNY Z INFORMACJAMI O PLANETACH
let asidebar = document.getElementById("planetinfopanel");
let asidebutton = document.getElementById("tinfop");
let plive = document.getElementById("plive");
const showasidebar = () => {
  asidebar.classList.add("infopanelvisible");
  asidebutton.style.opacity = 1;
  setTimeout(function() {
    plive.style.opacity = 1;
  }, 500);
};
const hideasidebar = () => {
  asidebar.classList.remove("infopanelvisible");
  asidebutton.style.opacity = 0;
  if(document.getElementById('labelview').checked == true) {
    showlabels(); 
  }
  setTimeout(function() {
    plive.style.opacity = 0;
  }, 500);
  animationstate = true;
};
const toggleasidebar = () => {
  if (asidebar.classList == "") {
    showasidebar();
  } else {
    hideasidebar();
  }
};
// panel z widokiem z innej kamery
let pib = document.getElementById("canvas");
let asidename = document.getElementById("pname");
// componenty informacji o planecie
let description = document.getElementById('description');
let yearlength = document.getElementById('yearlength');
let daytime = document.getElementById('daytime');
let temperature = document.getElementById('temperature');
let surface = document.getElementById('surface');
let moons = document.getElementById('moons');
let diameter = document.getElementById('diameter');
let lighttime = document.getElementById('lighttime');
let meanvelocity = document.getElementById('meanvelocity');

const toggleinfobar = (planet, planetdata) => {
  let yoffset, xoffset, zoffset;
  console.log(planet);
  switch(planet.name) {
    case 0 :
      yoffset = 160;
      // xoffset = 200;
      // zoffset = 200;
      break;
    case 1 :
      yoffset = 40;
      // xoffset = 20;
      // zoffset = 20;
      break;
    case 2 :
      yoffset = 36;
      // xoffset = 18;
      // zoffset = 18;
      break;
    case 3 :
      yoffset = 44;
      // xoffset = 20;
      // zoffset = 20;
      break;
    case 4 :
      yoffset = 24;
      // xoffset = 20;
      // zoffset = 20;
      break;
    case 5 :
      yoffset = 80;
      // xoffset = 40;
      // zoffset = 40;
      break;
    case 6 :
      yoffset = 150;
      // xoffset = 40;
      // zoffset = 40;
      break;
    case 7 :
      yoffset = 80;
      break;
    case 8 :
      yoffset = 80;
      // xoffset = 40;
      // zoffset = 40;
      break;
  }
  if(planet.position.y < 0) yoffset = -yoffset;
  // if((planet.position.x > 0) && (planet.position.z > 0)) {
  //   camera2.position.set(planet.position.x-xoffset,planet.position.y,planet.position.z-zoffset);
  // }
  // if((planet.position.x > 0) && (planet.position.z < 0)) {
  //   camera2.position.set(planet.position.x-xoffset,planet.position.y,planet.position.z+zoffset);
  // }
  // if((planet.position.x < 0) && (planet.position.z > 0)) {
  //   camera2.position.set(planet.position.x+xoffset,planet.position.y,planet.position.z-zoffset);
  // }
  // if((planet.position.x < 0) && (planet.position.z < 0)) {
  //   camera2.position.set(planet.position.x+xoffset,planet.position.y,planet.position.z+zoffset);
  // }
  if (animationstate == true)  {
    animationstate = false;
    setTimeout(() => {
      camera2.position.set(planet.position.x,planet.position.y+yoffset,planet.position.z);
      camera2.lookAt(planet.position);
      camera2.updateProjectionMatrix();
    },1000);
  } else {
      camera2.position.set(planet.position.x,planet.position.y+yoffset,planet.position.z);
      camera2.lookAt(planet.position);
      camera2.updateProjectionMatrix();
  }
  asidename.innerHTML = planetdata.name;
  description.innerText = planetdata.description;
  yearlength.innerHTML = planetdata.yearlength;
  daytime.innerText = planetdata.daylength;
  temperature.innerText = planetdata.averagetemp;
  surface.innerText = planetdata.surface;
  moons.innerText = planetdata.moons;
  diameter.innerText = planetdata.diameter;
  lighttime.innerText = planetdata.lighttime;
  meanvelocity.innerText = planetdata.meanvelocity;
  hidelabels();
  scalereset();
};

// PANEL USTAWIEŃ
let settingspanel = document.getElementById("settingspanel");
const togglesettingsbar = () => {
  if (settingspanel.classList == "show") settingspanel.classList.remove("show");
  else settingspanel.classList.add("show");
};

// wyswietlanie aktualnej daty animacji z nazwami miesiecy zamiast liczb
let miesiace = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia"
];

// wyswietlanie wartosci ze slidera
const sizerange = document.getElementById("psizerange");
const sizerangeval = document.getElementById("rangeval");

// pokaz/ukryj nazwy planet
const hidelabels = () => {
  for (let i = 0; i < namelabels.length; i++) namelabels[i].visible = false;
  document.getElementById('labelview').checked = false;
}
const showlabels = () => {
  for (let i = 0; i < namelabels.length; i++) namelabels[i].visible = true;
  document.getElementById('labelview').checked = true;
}

const labelview = () => {
  if (namelabels[0].visible == true) {
    hidelabels();
  } else showlabels();
};

const togglestars = element => {
  element.checked == true ? stars.visible = true : stars.visible = false;
}

const showbelt = () => {asteroidbelt.visible = true};
const hidebelt = () => {asteroidbelt.visible = false};
const asteroidview = () => {
  let asteroidcheckbox = document.getElementById('asteroidcheckbox');
  if (asteroidcheckbox.checked == true) showbelt();
  else hidebelt();
}

// skalowanie rozmiarów planet (do dokonczenia)
const escale = () => {
  if (earth.scale.x == 1) {
    earth.scale.x = sizerange.value;
    earth.scale.y = sizerange.value;
    earth.scale.z = sizerange.value;
  } else {
    earth.scale.x = 1;
    earth.scale.y = 1;
    earth.scale.z = 1;
  }
};

let floatscale = parseFloat(sizerange.value);
let pscale = floatscale;
const planetsscale = () => {
  floatscale = parseFloat(sizerange.value);
  pscale = floatscale;
  // rangeval.innerHTML = sizerange.value;
  mercury.scale.set(
    meinitscale * pscale,
    meinitscale * pscale,
    meinitscale * pscale
  );
  venus.scale.set(
    veinitscale * pscale,
    veinitscale * pscale,
    veinitscale * pscale
  );
  earth.scale.set(
    eainitscale * pscale,
    eainitscale * pscale,
    eainitscale * pscale
  );
  mars.scale.set(
    mainitscale * pscale,
    mainitscale * pscale,
    mainitscale * pscale
  );
  jupiter.scale.set(
    juinitscale * pscale,
    juinitscale * pscale,
    juinitscale * pscale
  );
  saturn.scale.set(sainitscale*pscale,sainitscale*pscale,sainitscale*pscale);
  uranus.scale.set(urinitscale*pscale,urinitscale*pscale,urinitscale*pscale);
  neptune.scale.set(neinitscale*pscale,neinitscale*pscale,neinitscale*pscale);
};
sizerange.onmouseup = () => {
  planetsscale();
  rangeval.innerHTML = sizerange.value;
};

const scalereset = () => {
  sizerange.value = 1;
  pscale = 1;
  rangeval.innerHTML = sizerange.value;
  sun.scale.set(1,1,1);
  mercury.scale.set(meinitscale, meinitscale, meinitscale);
  venus.scale.set(veinitscale, veinitscale, veinitscale);
  earth.scale.set(eainitscale, eainitscale, eainitscale);
  mars.scale.set(mainitscale, mainitscale, mainitscale);
  jupiter.scale.set(juinitscale, juinitscale, juinitscale);
  saturn.scale.set(sainitscale,sainitscale,sainitscale);
  uranus.scale.set(urinitscale,urinitscale,urinitscale);
  neptune.scale.set(neinitscale,neinitscale,neinitscale);
};


let realplanetsscale = [
  4878 / 12756,
  12104 / 12756,
  12756 / 12756,
  6860 / 12756,
  143640 / 12756,
  120570 / 12756,
  57070 / 12756,
  49670 / 12756,
  1391000 / 12756
];

const realscaleset = () => {
  sizerange.value = 1;
  pscale = 1;
  rangeval.innerHTML = 'Realna';
  // sun.scale.set(1.5,1.5,1.5);

  mercury.scale.set(30 * iconsizes[1], 30 * iconsizes[1], 30 * iconsizes[1]);
  venus.scale.set(30 * iconsizes[2], 30 * iconsizes[2], 30 * iconsizes[2]);
  earth.scale.set(30 * iconsizes[3], 30 * iconsizes[3], 30 * iconsizes[3]);
  mars.scale.set(30 * iconsizes[4], 30 * iconsizes[4], 30 * iconsizes[4]);
  jupiter.scale.set(30 * iconsizes[5], 30 * iconsizes[5], 30 * iconsizes[5]);
  saturn.scale.set(30 * iconsizes[6],30 * iconsizes[6],30 * iconsizes[6]);
  uranus.scale.set(30 * iconsizes[7],30 * iconsizes[7],30 * iconsizes[7]);
  neptune.scale.set(30 * iconsizes[8],30 * iconsizes[8],30 * iconsizes[8]);

  // mercury.scale.set(meinitscale * realplanetsscale[0], meinitscale * realplanetsscale[0], meinitscale * realplanetsscale[0]);
  // venus.scale.set(veinitscale * realplanetsscale[1], veinitscale * realplanetsscale[1], veinitscale * realplanetsscale[1]);
  // earth.scale.set(eainitscale * realplanetsscale[2], eainitscale * realplanetsscale[2], eainitscale * realplanetsscale[2]);
  // mars.scale.set(mainitscale * realplanetsscale[3], mainitscale * realplanetsscale[3], mainitscale * realplanetsscale[3]);
  // jupiter.scale.set(juinitscale * realplanetsscale[4], juinitscale * realplanetsscale[4], juinitscale * realplanetsscale[4]);
  // saturn.scale.set(sainitscale * realplanetsscale[5],sainitscale * realplanetsscale[5],sainitscale * realplanetsscale[5]);
  // uranus.scale.set(urinitscale * realplanetsscale[6],urinitscale * realplanetsscale[6],urinitscale * realplanetsscale[6]);
  // neptune.scale.set(neinitscale * realplanetsscale[7],neinitscale * realplanetsscale[7],neinitscale * realplanetsscale[7]);
}

// pojawianie się przycisku "resetuj kamere"
let camreset = document.getElementById("cameraresetbtn");
const togglecambtn = () => {
  if (camreset.style.opacity == 0) {
    camreset.style.opacity = 1;
  } else camreset.style.opacity = 0;
};

// toggle Name Label
// const namelabeltoggle = planet => {
//   if (namelabels[planet.name].visible == true) {
//     namelabels[planet.name].visible = false;
//   } else namelabels[planet.name].visible = true;
// };

// sterowanie pauzą / play aplikacji
let animationstate = false;
const toggleanimation = () => {
  if (animationstate == true) {
    animationstate = false;
    // hideasidebar();
  } else if (animationstate == false) {
    animationstate = true;
    resetplanetscolors();
		document.querySelector('.eventinfo').innerText = '';
  }
};

const showdistances = () => {
  document.querySelector('.planetscomparison').classList.add('slideddown');
  document.getElementById('distances').classList.add('hiddentogglerbtn');
  document.getElementById('sizes').classList.remove('hiddentogglerbtn');
  document.getElementById('chosen').innerText = 'odległości ';
  document.querySelector('.distancescomparison').classList.remove('slideddown');
}

const showsizes = () => {
  document.querySelector('.planetscomparison').classList.remove('slideddown');
  document.getElementById('distances').classList.remove('hiddentogglerbtn');
  document.getElementById('sizes').classList.add('hiddentogglerbtn');
  document.getElementById('chosen').innerText = 'wielkości ';
  document.querySelector('.distancescomparison').classList.add('slideddown');
}

const calcdistances = () => {
  let container = document.querySelector('.distancescomparison').offsetWidth;
  let sundist = 0;
  let earthdist = 100/neptunedata.md;
  earthdist = earthdist.toFixed(2);
  let mercurydist = (earthdist*mercurydata.md).toFixed(2);
  let venusdist = (earthdist*venusdata.md).toFixed(2);
  let marsdist = (earthdist*marsdata.md).toFixed(2);
  let asteroidoffset = (jupiterdata.md - marsdata.md)/4;
  let asteroiddist = (earthdist*(marsdata.md+asteroidoffset)).toFixed(2);
  let jupiterdist = (earthdist*jupiterdata.md).toFixed(2);
  let saturndist = (earthdist*saturndata.md).toFixed(2);
  let uranusdist = (earthdist*uranusdata.md).toFixed(2);

  document.getElementById('sundist').style.left = sundist+'%';
  document.getElementById('mercurydist').style.left = mercurydist+'%';
  document.getElementById('venusdist').style.left = venusdist+'%';
  document.getElementById('earthdist').style.left = earthdist+'%';
  document.getElementById('marsdist').style.left = marsdist+'%';
  document.getElementById('asteroiddist').style.left = asteroiddist+'%';
  document.getElementById('jupiterdist').style.left = jupiterdist+'%';
  document.getElementById('saturndist').style.left = saturndist+'%';
  document.getElementById('uranusdist').style.left = uranusdist+'%';
  document.getElementById('neptunedist').style.left = '99.9%';
}

console.log("GUI.js loaded!");