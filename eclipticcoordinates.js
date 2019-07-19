// let mercurydata = {
//     id: 1,
//     name: "Merkury",
//     ows: 365 * 0.25,
//     dm: 4.092353,
//     ml: 314.42369,
//     axistilt: 0,
//     N :  48.3313 + 3.24587E-5 * d,
//     i : 7.0047 + 5.00E-8 * d,
//     w :  29.1241 + 1.01444E-5 * d,
//     a : 0.387098,
//     e : 0.205635 + 5.59E-10 * d,
//     M : 168.6562 + 4.0923344368 * d
// };
// let venusdata = {
//     id: 2,
//     name: "Wenus",
//     ows: 365 * 0.7,
//     dm: 1.602158,
//     ml: 236.94045,
//     axistilt: 177.3
// };
// let earthdata = {
//     id: 3,
//     name: "Ziemia",
//     ows: 365,
//     ink: 0,
//     an: 349.2,
//     ph: 102.8517,
//     md: 1,
//     dm: 0.9855796,
//     eksorb: 0.0166967,
//     ml: 328.40353,
//     axistilt: 23.44
// };
// let marsdata = {
//     id: 4,
//     name: "Mars",
//     ows: 365 * 2,
//     ink: 1.84992,
//     an: 49.5664,
//     ph: 336.0882,
//     md: 1.5236365,
//     dm: 0.5240613,
//     eksorb: 0.0934231,
//     ml: 262.42784,
//     axistilt: 25.2
// };
// let jupiterdata = {
//     id: 5,
//     name: "Jowisz",
//     ows: 365 * 12,
//     ink: 1.30463,
//     an: 100.4713,
//     ph: 15.6978,
//     md: 5.202597,
//     dm: 0.08309618,
//     eksorb: 0.0484646,
//     ml: 322.55983,
//     axistilt: 3.1
// };
// let saturndata = {
//     id: 6,
//     name: "Saturn",
//     ows: 365 * 30,
//     ink: 2.48524,
//     an: 113.6358,
//     ph: 88.863,
//     md: 9.5719,
//     dm: 0.03328656,
//     eksorb: 0.0531651,
//     ml: 20.95759,
//     axistilt: 26.7
// };
// let uranusdata = {
//     id: 7,
//     name: "Uran",
//     ows: 365 * 165,
//     ink: 0.77343,
//     an: 74.0954,
//     ph: 175.6807,
//     md: 19.30181,
//     dm: 0.01162295,
//     eksorb: 0.0428959,
//     ml: 303.18967,
//     axistilt: 97.8
// };
// let neptunedata = {
//     id: 8,
//     name: "Neptun",
//     ows: 365 * 249,
//     ink: 1.7681,
//     an: 131.7925,
//     ph: 7.206,
//     md: 30.26664,
//     dm: 0.005919282,
//     eksorb: 0.0102981,
//     ml: 299.8641,
//     axistilt: 28.3
// };

// The time scale in these formulae are counted in days.
// Hours, minutes, seconds are expressed as fractions of a day.
// Day 0.0 occurs at 2000 Jan 0.0 UT (or 1999 Dec 31, 0:00 UT).
// This "day number" d is computed as follows (y=year, m=month, D=date, UT=UT in hours+decimals):

// d = 367 * y - (7 * (y + (m + 9) / 12)) / 4 + (275 * m) / 9 + D - 730530;

// d = d + UT / 24.0;

// ecl = 23.4393 - 3.563e-7 * d;
// The primary orbital elements are here denoted as:
//     N = longitude of the ascending node
//     i = inclination to the ecliptic (plane of the Earth's orbit)
//     w = argument of perihelion
//     a = semi-major axis, or mean distance from Sun
//     e = eccentricity (0=circle, 0-1=ellipse, 1=parabola)
//     M = mean anomaly (0 at perihelion; increases uniformly with time)
// Related orbital elements are:
//     w1 = N + w   = longitude of perihelion
//     L  = M + w1  = mean longitude
//     q  = a*(1-e) = perihelion distance
//     Q  = a*(1+e) = aphelion distance
//     P  = a ^ 1.5 = orbital period (years if a is in AU, astronomical units)
//     T  = Epoch_of_M - (M(deg)/360_deg) / P  = time of perihelion
//     v  = true anomaly (angle between position and perihelion)
//     E  = eccentric anomaly
let d, year, m, D, N, ink, w, a, e, M, ecl, E, v, r;

const epos = () => {
    year = date.getFullYear(); //year
    m = date.getMonth()+1; //month
    D = date.getDate(); //day
     hour = date.getHours(); //hours
     minute = date.getMinutes(); //minutes
     console.log(date);

    d = 367*year-Math.round(7*(year+Math.round((m+9)/12))/4)+Math.round(275*m/9)+D-730531.5+(Math.round(hour+(minute/60)/24.0)); //j2000.0
console.log(d);
    ecl = 23.4393 - 3.563E-7 * d;

    N = 0.0;
    ink = 0.0;
    w = 282.9404 + 4.70935E-5 * d;
    a = 1.000000 ;
    e = 0.016709 - 1.151E-9 * d;
    M = 356.0470 + 0.9856002585 * d;

    // E = M + e*(180/Math.PI) * Math.sin(M) * ( 1.0 + e * Math.cos(M) );
    E = M + e * Math.sin(M) * ( 1.0 + e * Math.cos(M) );

    let xv = Math.cos(E) - e;
    let yv = Math.sqrt(1.0 - e*e) * Math.sin(E);

    v = Math.atan2( yv, xv );
    r = Math.sqrt( xv*xv + yv*yv );

    let lonsun = v + w;

    let xs = r * Math.cos(lonsun);
    let ys = r * Math.sin(lonsun);

    let xe = xs;
    let ye = ys * Math.cos(ecl);
    let ze = ys * Math.sin(ecl);

    let pos = [xe, ze, ye];
    earth.position.x = xe*300;
    earth.position.y = ye*100;
    earth.position.z = ze*300;
}

const jupiterpos = () => {
    year = date.getFullYear(); //year
    m = date.getMonth()+1; //month
    D = date.getDate(); //day
     hour = date.getHours(); //hours
     minute = date.getMinutes(); //minutes
     console.log(date);

    // d = 367*year-Math.round(7*(year+Math.round((m+9)/12))/4)+Math.round(275*m/9)+D-730531.5+(Math.round(hour+minute)/24.0); //j2000.0
    let d = 367*year-Math.round(7*(year+Math.round((m+9)/12))/4)+Math.round(275*m/9)+D-730531.5+(hour+(minute/60)); //j2000.0
console.log(d);
    ecl = 23.4393 - 3.563E-7 * d;

    N = 100.4542 + 2.76854E-5 * d;
    let i = 1.3030 - 1.557E-7 * d;
    w = 273.8777 + 1.64505E-5 * d;
    a = 5.20256;
    e = 0.048498 + 4.469E-9 * d;
    M =  19.8950 + 0.0830853001 * d;

    // E = M + e*(180/Math.PI) * Math.sin(M) * ( 1.0 + e * Math.cos(M) );
    E = M + e * Math.sin(M) * ( 1.0 + e * Math.cos(M) );
    if(e > 0.06) {
        let E0 = E;
        let E1 = E0 - ( E0 - e * Math.sin(E0) - M ) / ( 1 - e * Math.cos(E0) );
        while (E1-E0 < 0.001) {
            E1 = E0 - ( E0 - e * Math.sin(E0) - M ) / ( 1 - e * Math.cos(E0) );
        }
        E = E1;
    }
    console.log(e);

    let xv = a * ( Math.cos(E) - e );
    let yv = a * ( Math.sqrt(1.0 - e*e) * Math.sin(E) );

    let v = Math.atan2( yv, xv );
    let r = Math.sqrt( xv*xv + yv*yv );

    let lonsun = v + w;

    let xs = r * Math.cos(lonsun);
    let ys = r * Math.sin(lonsun);

    xh = r * ( Math.cos(N) * Math.cos(v+w) - Math.sin(N) * Math.sin(v+w) * Math.cos(i) );
    yh = r * ( Math.sin(N) * Math.cos(v+w) + Math.cos(N) * Math.sin(v+w) * Math.cos(i) );
    zh = r * ( Math.sin(v+w) * Math.sin(i) );
    jupiter.position.x = xh;
    jupiter.position.y = yh;
    jupiter.position.z = zh;
}
// const calcplanetpos = (y, m, D, b5, b6, i, N, w, a, f9, e, f11) => {
//     // f5 - inklinacja - i
//     // f6 - asc node (Right Ascension) - N
//     // f7 - peryhelium - w
//     // f8 - mean distance - a
//     // f9 - daily motion (predkosc planety)
//     // f10 - ekscentrycznosc orbity - e
//     // f11 - mean longitude

//     // let b2 = date.getFullYear(); //year
//     // let b3 = date.getMonth()+1; //month
//     // let b4 = date.getDate(); //day
//     // let b5 = date.getHours(); //hours
//     // let b6 = date.getMinutes(); //minutes

// d = 367 * y - 7 * Math.round(( y + Math.round((m+9)/12) ) / 4) - 3 * 
// Math.round(( Math.round(( y + Math.round((m-9)/7) ) / 100) + 1 ) / 4) + 275*Math.round(m/9) + D - 730515;
// console.log(d);

//     let f2 = 2450680.5; //cej
//     let b7 =
//         367 * b2 -
//         parseInt((7 * (b2 + parseInt((b3 + 9) / 12))) / 4) +
//         parseInt((275 * b3) / 9) +
//         b4 -
//         730531.5 +
//         (b5 + b6 / 60); //j2000.0
//     let b8 = b7 - (f2 - 2451545); //el_dnia!!!!!!!!

//     // zmiana orbity na radiany
//     let g5 = f5 * (Math.PI / 180); //inkrad
//     let g6 = f6 * (Math.PI / 180); //anrad
//     let g7 = f7 * (Math.PI / 180); //phrad
//     let g9 = f9 * (Math.PI / 180); //dmrad
//     let g11 = f11 * (Math.PI / 180); //mlrad

//     //główne obliczenia
//     let g13 = (g9 * b8 + g11 - g7) % (2 * Math.PI); //mean_anomally
//     let g14 =
//         g13 +
//         (2 * f10 - Math.pow(f10, 3) / 4 + (5 / 96) * Math.pow(f10, 5)) *
//             Math.sin(g13) +
//         ((5 * Math.pow(f10, 2)) / 4 - (11 / 24) * Math.pow(f10, 4)) *
//             Math.sin(2 * g13) +
//         13 * (Math.pow(f10, 3) / 12) -
//         (43 / 64) * Math.pow(f10, 5) * Math.sin(3 * g13) +
//         (103 / 96) * Math.pow(f10, 4) * Math.sin(4 * g13) +
//         (1097 / 960.0) * Math.pow(f10, 5) * Math.sin(5 * g13); //true anomally

//     let g15 = (g14 + g7) % (2 * Math.PI); //longitude
//     let f16 = (f8 * (1 - Math.pow(f10, 2))) / (1 + f10 * Math.cos(g14)); //el_odl
//     let c9 =
//         Math.atan2(Math.cos(g15 - g6), Math.sin(g15 - g6) * Math.cos(g5)) + g6; //helio_long
//     let c10 = Math.asin(Math.sin(g15 - g6) * Math.sin(g5)); //helio_lat

//     // wspolrzedne ekliptyczne
//     let b11 = f16 * Math.cos(c10);
//     let x = b11 * Math.cos(c9) * Math.cos(c10);
//     let z = b11 * Math.sin(c9) * Math.cos(c10);
//     let y = b11 * Math.sin(c10);

//     return [x, z, y];
// };
