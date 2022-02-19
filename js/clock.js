function realtimeClock()
{
    var rtClock=new Date();
    //document.write(rtClock);
    console.log(rtClock);

    var hours=rtClock.getHours();
    var minuts=rtClock.getMinutes();
    var second=rtClock.getSeconds();


    var ampm=(hours<12)?"AM":"PM";

    hours=(hours>12)?hours-12:hours;

    hours=("0"+hours).slice(-2);
    minuts=("0"+minuts).slice(-2);
    second=("0"+second).slice(-2);
    
    var clock1=document.getElementById("clock");
    clock1.innerHTML=hours +" : " + minuts + " : " + second + " " + ampm;

    var t=setTimeout(realtimeClock,500);

}