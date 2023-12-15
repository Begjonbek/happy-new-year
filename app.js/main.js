(function(){
    const second = 1000,
    minute = second * 60,
    hours = minute * 60,
    day = hours * 24;

    
    let newYear = "Jan 1, 2024 00:00:00",
    countdownm = new Date(newYear).getTime(),
    x = setInterval( function (){
        let now = new Date().getTime(),
        distance = countdownm - now;
        
        document.getElementById("days").innerText = Math.
        floor(distance / (day));
        document.getElementById('hours').innerText=Math.
        floor((distance % (day)) / (hours) );
        document.getElementById('minutes').innerText=Math.
        floor((distance % (hours)) / (minute) );
        document.getElementById('seconds').innerText=Math.
        floor((distance % (minute)) / (second) );


        if( distance < 0){
            let happyTitle = document.getElementById
            ("happyTitle");
           countdown = document.getElementById
           ("countdown");
           contend =document.getElementById
           ("contend");

           happyTitle.innerText="Today Is Yew Year";
           countdown.style.display ="none";
           contend.style.display="block";
           clearInterval(x);
        }
        // seconds
    },0)
}())