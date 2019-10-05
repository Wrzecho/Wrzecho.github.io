// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// STEROWANIE UPŁYWEM CZASU / STEROWANIE CZASEM
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const minusyear = () => {
    date.setFullYear(date.getFullYear()-1);
    removealltrails();
    let b2 = date.getFullYear(); //year
        let b3 = date.getMonth()+1; //month
        let b4 = date.getDate(); //day
        let b5 = date.getHours(); //hours
        let b6 = date.getMinutes(); //minutes
    updateplanetspositions(b2,b3,b4,b5,b6);
    setTimeout(function() {
        animationstate = false;
        removealltrails();
    }, 250);
    removealltrails();
    strdate = b4+" " +miesiace[b3-1]+" "+b2+" r";
	document.getElementById("infodate").innerHTML = "Data: "+strdate;
}
const minusmonth = () => {
    date.setMonth(date.getMonth()-1);
    removealltrails();
    let b2 = date.getFullYear(); //year
    let b3 = date.getMonth()+1; //month
    let b4 = date.getDate(); //day
    let b5 = date.getHours(); //hours
    let b6 = date.getMinutes(); //minutes
    updateplanetspositions(b2,b3,b4,b5,b6);
    animationstate = false;
    strdate = b4+" " +miesiace[b3-1]+" "+b2+" r";
	document.getElementById("infodate").innerHTML = "Data: "+strdate;
}
const minusday = () => {
    date.setDate(date.getDate()-1);
    removealltrails();
    let b2 = date.getFullYear(); //year
    let b3 = date.getMonth()+1; //month
    let b4 = date.getDate(); //day
    let b5 = date.getHours(); //hours
    let b6 = date.getMinutes(); //minutes
    updateplanetspositions(b2,b3,b4,b5,b6);
    animationstate = false;
    strdate = b4+" " +miesiace[b3-1]+" "+b2+" r";
	document.getElementById("infodate").innerHTML = "Data: "+strdate;
}
const plusday = () => {
    date.setDate(date.getDate()+1);
    let b2 = date.getFullYear(); //year
    let b3 = date.getMonth()+1; //month
    let b4 = date.getDate(); //day
    let b5 = date.getHours(); //hours
    let b6 = date.getMinutes(); //minutes
    updateplanetspositions(b2,b3,b4,b5,b6);
    animationstate = false;
    strdate = b4+" " +miesiace[b3-1]+" "+b2+" r";
	document.getElementById("infodate").innerHTML = "Data: "+strdate;
}
const plusmonth = () => {
    date.setMonth(date.getMonth()+1);
    removealltrails();
    let b2 = date.getFullYear(); //year
    let b3 = date.getMonth()+1; //month
    let b4 = date.getDate(); //day
    let b5 = date.getHours(); //hours
    let b6 = date.getMinutes(); //minutes
    updateplanetspositions(b2,b3,b4,b5,b6);
    animationstate = false;
    strdate = b4+" " +miesiace[b3-1]+" "+b2+" r";
	document.getElementById("infodate").innerHTML = "Data: "+strdate;
}
const plusyear = () => {
    date.setFullYear(date.getFullYear()+1);
    removealltrails();
    let b2 = date.getFullYear(); //year
    let b3 = date.getMonth()+1; //month
    let b4 = date.getDate(); //day
    let b5 = date.getHours(); //hours
    let b6 = date.getMinutes(); //minutes
    updateplanetspositions(b2,b3,b4,b5,b6);
    animationstate = false;
    strdate = b4+" " +miesiace[b3-1]+" "+b2+" r";
	document.getElementById("infodate").innerHTML = "Data: "+strdate;
}
const ustawczas = () => {
    let chdate = document.getElementById("data").value;
    let slicedate = chdate.split('-');
    date.setFullYear(slicedate[0]);
    date.setMonth(slicedate[1]-1);
    date.setDate(slicedate[2]);
    console.log(slicedate[0]+"/"+slicedate[1]+"/"+slicedate[2]);
    removealltrails();
    let b2 = date.getFullYear(); //year
    let b3 = date.getMonth()+1; //month
    let b4 = date.getDate(); //day
    let b5 = date.getHours(); //hours
    let b6 = date.getMinutes(); //minutes
    updateplanetspositions(b2,b3,b4,b5,b6);
    animationstate = false;
    strdate = b4+" " +miesiace[b3-1]+" "+b2+" r";
	document.getElementById("infodate").innerHTML = "Data: "+strdate;
}

console.log("datesettings.js loaded!");