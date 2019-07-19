let f2,b7,b8,g5,g6,g7,g9,g11,g13,g14,g15,f16,c9,c10,b11,cx,cy,cz;
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
    // f8 - mean distance
    // f9 - daily motion (predkosc planety)
    // f10 - ekscentrycznosc orbity
    // f11 - mean longitude - srednia odleglosc od slonca

     f2 = 2450680.5; //cej
     b7 =
        367 * b2 -
        Math.round((7 * (b2 + Math.round((b3 + 9) / 12))) / 4) +
        Math.round((275 * b3) / 9) +
        b4 -
        730530 ;
        // +
        // (b5 + b6 / 60); //j2000.0
     b8 = b7 - (f2 - 2451545); //el_dnia!!!!!!!!
    // console.log(b7);

    switch (planet) {
        case 1:
            f6 = 48.3313 + 3.24587e-5 * b7;
            f5 = 7.0047 + 5.0e-8 * b7;
            f7 = 29.1241 + 1.01444e-5 * b7;
            f8 = 0.387098;
            f10 = 0.205635 + 5.59e-10 * b7;
            break;
        case 2:
            f6 = 76.6799 + 2.46590E-5 * b7;
            f5 = 3.3946 + 2.75E-8 * b7;
            f7 = 54.8910 + 1.38374E-5 * b7;
            f8 = 0.723330;
            f10 = 0.006773 - 1.302E-9 * b7;
            break;
        case 3:
            f6 = 0.0;
            f5 = 0.0;
            f7 = 282.9404 + 4.70935e-5 * b7;
            f8 = 1.0;
            f10 = 0.016709 - 1.151e-9 * b7;
            break;
        case 4:
            f6 = 49.5574 + 2.11081E-5 * b7;
            f5 = 1.8497 - 1.78E-8 * b7;
            f7 = 286.5016 + 2.92961E-5 * b7;
            f8 = 1.523688;
            f10 = 0.093405 + 2.516E-9 * b7;
            break;
        case 5:
            f6 = 100.4542 + 2.76854E-5 * b7;
            f5 = 1.3030 - 1.557E-7 * b7;
            f7 = 273.8777 + 1.64505E-5 * b7;
            f8 = 5.20256;
            f10 = 0.048498 + 4.469E-9 * b7;
            break;
        case 6:
            f6 = 113.6634 + 2.38980E-5 * b7;
            f5 = 2.4886 - 1.081E-7 * b7;
            f7 = 339.3939 + 2.97661E-5 * b7;
            f8 = 9.55475;
            f10 = 0.055546 - 9.499E-9 * b7;
            break;
        case 7:
            f6 = 74.0005 + 1.3978E-5 * b7;
            f5 = 0.7733 + 1.9E-8 * b7;
            f7 = 96.6612 + 3.0565E-5 * b7;
            f8 = 19.18171 - 1.55E-8 * b7;
            f10 = 0.047318 + 7.45E-9 * b7;
            break;
        case 8:
            f6 = 131.7806 + 3.0173E-5 * b7;
            f5 = 1.7700 - 2.55E-7 * b7;
            f7 = 272.8461 - 6.027E-6 * b7;
            f8 = 30.05826 + 3.313E-8 * b7;
            f10 = 0.008606 + 2.15E-9 * b7;
            break;
    }

    // zmiana orbity na radiany
     g5 = f5 * (Math.PI / 180); //inkrad
     g6 = f6 * (Math.PI / 180); //anrad
     g7 = f7 * (Math.PI / 180); //phrad
     g9 = f9 * (Math.PI / 180); //dmrad
     g11 = f11 * (Math.PI / 180); //mlrad

    //główne obliczenia
     g13 = (g9 * b8 + g11 - g7) % (2 * Math.PI); //mean_anomally
     g14 =
        g13 +
        (2 * f10 - Math.pow(f10, 3) / 4 + (5 / 96) * Math.pow(f10, 5)) *
            Math.sin(g13) +
        ((5 * Math.pow(f10, 2)) / 4 - (11 / 24) * Math.pow(f10, 4)) *
            Math.sin(2 * g13) +
        13 * (Math.pow(f10, 3) / 12) -
        (43 / 64) * Math.pow(f10, 5) * Math.sin(3 * g13) +
        (103 / 96) * Math.pow(f10, 4) * Math.sin(4 * g13) +
        (1097 / 960.0) * Math.pow(f10, 5) * Math.sin(5 * g13); //true anomally


     g15 = (g14 + g7) % (2 * Math.PI); //longitude
     f16 = (f8 * (1 - Math.pow(f10, 2))) / (1 + f10 * Math.cos(g14)); //el_odl
     c9 =
        Math.atan2(Math.cos(g15 - g6), Math.sin(g15 - g6) * Math.cos(g5)) + g6; //helio_long
     c10 = Math.asin(Math.sin(g15 - g6) * Math.sin(g5)); //helio_lat

    // wspolrzedne ekliptyczne
     b11 = f16 * Math.cos(c10);
     cx = b11 * Math.cos(c9) * Math.cos(c10);
     cz = b11 * Math.sin(c9) * Math.cos(c10);
     cy = b11 * Math.sin(c10);

    return [cx, cz, cy];
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
    tweenobject(mars, marspos, 250);

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