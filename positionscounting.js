const calcplanetpos = (b2, b3, b4, b5, b6, f5, f6, f7, f8, f9, f10, f11) => {
    let f2 = 2450680.5; //cej
    let b7 = 367*b2-parseInt(7*(b2+parseInt((b3+9)/12))/4)+parseInt(275*b3/9)+b4-730531.5+(b5+(b6/60)); //j2000.0
    let b8 = b7-(f2-2451545); //el_dnia!!!!!!!!

    // zmiana orbity na radiany
    let g5 = f5*(Math.PI/180); //inkrad
    let g6 = f6*(Math.PI/180); //anrad
    let g7 = f7*(Math.PI/180); //phrad
    let g9 = f9*(Math.PI/180); //dmrad
    let g11 =  f11*(Math.PI/180); //mlrad

    //główne obliczenia
    let g13 = (g9*b8+g11-g7)%(2*Math.PI); //mean_anomally
    let g14 = g13+(2*f10-(Math.pow(f10,3)/4)+(5/96)*(Math.pow(f10,5)))*Math.sin(g13)+
    (5*(Math.pow(f10,2))/4-(11/24)*Math.pow(f10,4))*Math.sin(2*g13)+
    (13*(Math.pow(f10,3)/12))-(43/64)*Math.pow(f10,5)*Math.sin(3*g13)+
    (103/96)*Math.pow(f10,4)*Math.sin(4*g13)+(1097/960.0)*Math.pow(f10,5)*Math.sin(5*g13); //true anomally

    let g15 = (g14+g7)%(2*Math.PI); //longitude
    let f16 = f8*(1-Math.pow(f10,2))/(1+f10*Math.cos(g14)); //el_odl
    let c9 = Math.atan2(Math.cos(g15-g6),Math.sin(g15-g6)*Math.cos(g5))+g6; //helio_long
    let c10 = Math.asin(Math.sin(g15-g6)*Math.sin(g5)); //helio_lat

    // wspolrzedne ekliptyczne
    let b11 = f16*Math.cos(c10);
    let x = b11*Math.cos(c9)*Math.cos(c10);
    let z = b11*Math.sin(c9)*Math.cos(c10);
    let y = b11*Math.sin(c10);

    return [x , z , y]; 
}

// aktualizacja pozycji planet, dodanie im sladow itd
const updatelabelspositions = () => {
    mercurylabel.position.set(mercury.position.x, mercury.position.y+(meinitscale*pscale)+15, mercury.position.z);
    venuslabel.position.set(venus.position.x, venus.position.y+(veinitscale*pscale)+15, venus.position.z);
    earthlabel.position.set(earth.position.x, earth.position.y+(eainitscale*pscale)+15, earth.position.z);
    marslabel.position.set(mars.position.x, mars.position.y+(mainitscale*pscale)+15, mars.position.z);
    jupiterlabel.position.set(jupiter.position.x, jupiter.position.y+(juinitscale*pscale)+15, jupiter.position.z);
    saturnlabel.position.set(saturn.position.x, saturn.position.y+(sainitscale*pscale)+15, saturn.position.z);
    uranuslabel.position.set(uranus.position.x, uranus.position.y+(urinitscale*pscale)+15, uranus.position.z);
    neptunelabel.position.set(neptune.position.x, neptune.position.y+(neinitscale*pscale)+15, neptune.position.z);
}

const updateplanetspositions = (b2,b3,b4,b5,b6) => {
    // merkury
    let mpos = calcplanetpos(b2, b3, b4, b5, b6, mercurydata.ink, mercurydata.an, mercurydata.ph, mercurydata.md, mercurydata.dm, mercurydata.eksorb, mercurydata.ml)
        tweenobject(mercury,mpos,400);	

    // venus
    let vpos = calcplanetpos(b2, b3, b4, b5, b6, venusdata.ink, venusdata.an, venusdata.ph, venusdata.md, venusdata.dm, venusdata.eksorb, venusdata.ml)
        tweenobject(venus,vpos,310);
        
    // ziemia
    let epos = calcplanetpos(b2, b3, b4, b5, b6, earthdata.ink, earthdata.an, earthdata.ph, earthdata.md, earthdata.dm, earthdata.eksorb, earthdata.ml);
        tweenobject(earth, epos, 300);	
        
    // mars
    let marspos = calcplanetpos(b2, b3, b4, b5, b6, marsdata.ink, marsdata.an, marsdata.ph, marsdata.md, marsdata.dm, marsdata.eksorb, marsdata.ml);
        tweenobject(mars,marspos,250);
        
    // jowisz
    let jupiterpos = calcplanetpos(b2, b3, b4, b5, b6, jupiterdata.ink, jupiterdata.an, jupiterdata.ph, 
    jupiterdata.md, jupiterdata.dm, jupiterdata.eksorb, jupiterdata.ml);
        tweenobject(jupiter,jupiterpos,130);

    // saturn
    let saturnpos = calcplanetpos(b2, b3, b4, b5, b6, saturndata.ink, saturndata.an, saturndata.ph, 
        saturndata.md, saturndata.dm, saturndata.eksorb, saturndata.ml);
            tweenobject(saturn,saturnpos,90);

     // uran
     let uranuspos = calcplanetpos(b2, b3, b4, b5, b6, uranusdata.ink, uranusdata.an, uranusdata.ph, 
        uranusdata.md, uranusdata.dm, uranusdata.eksorb, uranusdata.ml);
            tweenobject(uranus,uranuspos,55);

    // neptun
     let neptunepos = calcplanetpos(b2, b3, b4, b5, b6, neptunedata.ink, neptunedata.an, neptunedata.ph, 
        neptunedata.md, neptunedata.dm, neptunedata.eksorb, neptunedata.ml);
            tweenobject(neptune,neptunepos,40);
}