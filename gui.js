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
  4878 / 143640,
  12104 / 143640,
  12756 / 143640,
  6860 / 143640,
  143640 / 143640,
  120570 / 143640,
  57070 / 143640,
  49670 / 143640,
  1391000 / 143640
];
let icons = [
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
let y = 0;
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
const toggleinfobar = (planet, planetdata) => {
  if (animationstate == true) animationstate = false;
  camera2.position.set(sun.position.x,sun.position.y,sun.position.z+20);
//     planet.position.x,
//     planet.position.y,
//     planet.position.z + planet.scale.z + 20
//   );
  camera2.lookAt(planet.position);
  console.log(planetdata.name);
  asidename.innerHTML = planetdata.name;
  camera2.zoom = planet.name;
  camera2.updateProjectionMatrix();
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
const labelview = () => {
  if (namelabels[0].visible == true) {
    for (let i = 0; i < namelabels.length; i++) namelabels[i].visible = false;
  } else
    for (let i = 0; i < namelabels.length; i++) {
      namelabels[i].visible = true;
    }
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
  sun.scale.set(1.5,1.5,1.5);

  mercury.scale.set(meinitscale * iconsizes[0], meinitscale * iconsizes[0], meinitscale * iconsizes[0]);
  venus.scale.set(veinitscale * iconsizes[1], veinitscale * iconsizes[1], veinitscale * iconsizes[1]);
  earth.scale.set(eainitscale * iconsizes[2], eainitscale * iconsizes[2], eainitscale * iconsizes[2]);
  mars.scale.set(mainitscale * iconsizes[3], mainitscale * iconsizes[3], mainitscale * iconsizes[3]);
  jupiter.scale.set(juinitscale * iconsizes[4], juinitscale * iconsizes[4], juinitscale * iconsizes[4]);
  saturn.scale.set(sainitscale * iconsizes[5],sainitscale * iconsizes[5],sainitscale * iconsizes[5]);
  uranus.scale.set(urinitscale * iconsizes[6],urinitscale * iconsizes[6],urinitscale * iconsizes[6]);
  neptune.scale.set(neinitscale * iconsizes[7],neinitscale * iconsizes[7],neinitscale * iconsizes[7]);

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
const namelabeltoggle = planet => {
  if (namelabels[planet.name].visible == true) {
    namelabels[planet.name].visible = false;
  } else namelabels[planet.name].visible = true;
};

// sterowanie pauzą / play aplikacji
let animationstate = false;
const toggleanimation = () => {
  if (animationstate == true) {
    animationstate = false;
    // hideasidebar();
  } else if (animationstate == false) {
    animationstate = true;
  }
};


console.log("GUI.js loaded!");