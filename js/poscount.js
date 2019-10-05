let f2,f3,b7,b8,g5,g6,g7,g9,g11,g13,g14,g15,f16,c9,c10,b11,cx,cy,cz,df;
const calcplanetpos = (
    planet,
    b2,
    b3,
    b4,
    b5,
    b6,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
    f11
) => {
    // f5 - inklinacja
    // f6 - asc node (Right Ascension)
    // f7 - peryhelium
    // f8 - mean distance lub semi major axis
    // f9 - daily motion (predkosc planety)
    // f10 - ekscentrycznosc orbity
    // f11 - mean longitude - srednia odleglosc od slonca
    // df    - fragment dnia
    // b7 - dni od 1.1.2000

    f2 = 2450680.5; //staly el daty julianskiej dla 20.08.1997
    f3 = 2451544.5 // stały el daty julianskiej dla 01.01.2000
    b7 = 367 * b2 - Math.round((7 * (b2 + Math.round( (b3 + 9) / 12) )) / 4) + Math.round(275 * b3 / 9) + b4  + (b5 +b6/60)/24 - 730531.5 ;
    b8 = b7 - (f2 - f3); 

    //główne obliczenia
    //mean_anomally
    g13 = (f9 * b8 + f11 - f7) % (360); 
     //true anomally
     g14 = g13 + 180/Math.PI * ( (2 * f10 - Math.pow(f10,0.75) ) * Math.sin( (Math.PI/180) * g13) 
     + 5/4 * Math.pow(f10,2) * Math.sin((Math.PI/180) * (2 * g13)) + 13/12 * Math.pow(f10,3) * Math.sin((Math.PI/180) 
     * (3 * g13)));
     //radius vector
     r = f8 * (1 - Math.pow(f10,2)) / ( 1 + f10 * Math.cos((Math.PI/180) * g14));

     //heliocentryczne koordynaty planety
     let hz = r * ( Math.cos((Math.PI/180) * f6) * Math.cos((Math.PI/180) * ( g14 + f7 - f6 )) - 
     Math.sin((Math.PI/180) * f6) * Math.sin((Math.PI/180) * ( g14 + f7 - f6 )) * Math.cos((Math.PI/180) * f5) );
     let hx = r * ( Math.sin((Math.PI/180) * f6) * Math.cos((Math.PI/180) * ( g14 + f7 - f6 )) + 
     Math.cos((Math.PI/180) * f6) * Math.sin((Math.PI/180) * ( g14 + f7 - f6 )) * Math.cos((Math.PI/180) * f5) );
     let hy = r * ( Math.sin((Math.PI/180) * ( g14 + f7 - f6 )) * Math.sin((Math.PI/180) * f5) );
     
     return [hx, hz, hy];
};

// aktualizacja pozycji planet, dodanie im sladow itd
const updatelabelspositions = () => {
    mercurylabel.position.set(
        mercury.position.x,
        mercury.position.y + meinitscale * pscale + 15,
        mercury.position.z
    );
    venuslabel.position.set(
        venus.position.x,
        venus.position.y + veinitscale * pscale + 15,
        venus.position.z
    );
    earthlabel.position.set(
        earth.position.x,
        earth.position.y + eainitscale * pscale + 15,
        earth.position.z
    );
    marslabel.position.set(
        mars.position.x,
        mars.position.y + mainitscale * pscale + 15,
        mars.position.z
    );
    jupiterlabel.position.set(
        jupiter.position.x,
        jupiter.position.y + juinitscale * pscale + 15,
        jupiter.position.z
    );
    saturnlabel.position.set(
        saturn.position.x,
        saturn.position.y + sainitscale * pscale + 15,
        saturn.position.z
    );
    uranuslabel.position.set(
        uranus.position.x,
        uranus.position.y + urinitscale * pscale + 15,
        uranus.position.z
    );
    neptunelabel.position.set(
        neptune.position.x,
        neptune.position.y + neinitscale * pscale + 15,
        neptune.position.z
    );
};

const updateplanetspositions = (b2, b3, b4, b5, b6) => {
    // merkury
    let mpos = calcplanetpos(
        1,
        b2,
        b3,
        b4,
        b5,
        b6,
        mercurydata.ink,
        mercurydata.an,
        mercurydata.ph,
        mercurydata.md,
        mercurydata.dm,
        mercurydata.eksorb,
        mercurydata.ml
    );
    tweenobject(mercury, mpos, 400);

    // venus
    let vpos = calcplanetpos(
        2,
        b2,
        b3,
        b4,
        b5,
        b6,
        venusdata.ink,
        venusdata.an,
        venusdata.ph,
        venusdata.md,
        venusdata.dm,
        venusdata.eksorb,
        venusdata.ml
    );
    tweenobject(venus, vpos, 310);

    // ziemia
    let epos = calcplanetpos(
        3,
        b2,
        b3,
        b4,
        b5,
        b6,
        earthdata.ink,
        earthdata.an,
        earthdata.ph,
        earthdata.md,
        earthdata.dm,
        earthdata.eksorb,
        earthdata.ml
    );
    tweenobject(earth, epos, 300);

    // mars
    let marspos = calcplanetpos(
        4,
        b2,
        b3,
        b4,
        b5,
        b6,
        marsdata.ink,
        marsdata.an,
        marsdata.ph,
        marsdata.md,
        marsdata.dm,
        marsdata.eksorb,
        marsdata.ml
    );
    tweenobject(mars, marspos, 260);

    // jowisz
    let jupiterpos = calcplanetpos(
        5,
        b2,
        b3,
        b4,
        b5,
        b6,
        jupiterdata.ink,
        jupiterdata.an,
        jupiterdata.ph,
        jupiterdata.md,
        jupiterdata.dm,
        jupiterdata.eksorb,
        jupiterdata.ml
    );
    tweenobject(jupiter, jupiterpos, 130);

    // saturn
    let saturnpos = calcplanetpos(
        6,
        b2,
        b3,
        b4,
        b5,
        b6,
        saturndata.ink,
        saturndata.an,
        saturndata.ph,
        saturndata.md,
        saturndata.dm,
        saturndata.eksorb,
        saturndata.ml
    );
    tweenobject(saturn, saturnpos, 90);

    // uran
    let uranuspos = calcplanetpos(
        7,
        b2,
        b3,
        b4,
        b5,
        b6,
        uranusdata.ink,
        uranusdata.an,
        uranusdata.ph,
        uranusdata.md,
        uranusdata.dm,
        uranusdata.eksorb,
        uranusdata.ml
    );
    tweenobject(uranus, uranuspos, 55);

    // neptun
    let neptunepos = calcplanetpos(
        8,
        b2,
        b3,
        b4,
        b5,
        b6,
        neptunedata.ink,
        neptunedata.an,
        neptunedata.ph,
        neptunedata.md,
        neptunedata.dm,
        neptunedata.eksorb,
        neptunedata.ml
    );
    tweenobject(neptune, neptunepos, 40);
};

console.log("positionscounting.js loaded!");