var xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    var result = this.responseText;
    var data = JSON.parse(result);
    var list = data.list;
        for(var i = 0; i < list.length; i++) {
            var datetime = data.list[i].dt_txt;
            var temp = data.list[i].main.temp;
            var wr = data.list[i].weather[0].description;
            var ic = data.list[i].weather[0].icon;
            if (i == 3) {
                var ymdt = document.getElementById("ymdt").innerText = datetime;
                var nd = document.getElementById("nd").innerText = temp;
                var weather = document.getElementById("weather").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon").src = src;
            }
            if (i == 4) {
                var ymdt1 = document.getElementById("ymdt1").innerText = datetime;
                var nd1 = document.getElementById("nd1").innerText = temp;
                var weather1 = document.getElementById("weather1").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon1").src = src;
            }
            if (i == 5) {
                var ymdt2 = document.getElementById("ymdt2").innerText = datetime;
                var nd2 = document.getElementById("nd2").innerText = temp;
                var weather2 = document.getElementById("weather2").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon2").src = src;
            }
            if (i == 6) {
                var ymdt3 = document.getElementById("ymdt3").innerText = datetime;
                var nd3 = document.getElementById("nd3").innerText = temp;
                var weather3 = document.getElementById("weather3").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon3").src = src;
            }
            if (i == 7) {
                var ymdt4 = document.getElementById("ymdt4").innerText = datetime;
                var nd4 = document.getElementById("nd4").innerText = temp;
                var weather4 = document.getElementById("weather4").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon4").src = src;
            }
            if (i == 8) {
                var ymdt5 = document.getElementById("ymdt5").innerText = datetime;
                var nd5 = document.getElementById("nd5").innerText = temp;
                var weather5 = document.getElementById("weather5").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon5").src = src;
            }
            if (i == 9) {
                var ymdt6 = document.getElementById("ymdt6").innerText = datetime;
                var nd6 = document.getElementById("nd6").innerText = temp;
                var weather6 = document.getElementById("weather6").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon6").src = src;
            }
            if (i == 10) {
                var ymdt7 = document.getElementById("ymdt7").innerText = datetime;
                var nd7 = document.getElementById("nd7").innerText = temp;
                var weather7 = document.getElementById("weather7").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon7").src = src;
            }
            if (i == 11) {
                var ymdt8 = document.getElementById("ymdt8").innerText = datetime;
                var nd8 = document.getElementById("nd8").innerText = temp;
                var weather8 = document.getElementById("weather8").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon8").src = src;
            }
            if (i == 12) {
                var ymdt9 = document.getElementById("ymdt9").innerText = datetime;
                var nd9 = document.getElementById("nd9").innerText = temp;
                var weather9 = document.getElementById("weather9").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon9").src = src;
            }
            if (i == 13) {
                var ymdt10 = document.getElementById("ymdt10").innerText = datetime;
                var nd10 = document.getElementById("nd10").innerText = temp;
                var weather10 = document.getElementById("weather10").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon10").src = src;
            }
            if (i == 14) {
                var ymdt11 = document.getElementById("ymdt11").innerText = datetime;
                var nd11 = document.getElementById("nd11").innerText = temp;
                var weather11 = document.getElementById("weather11").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon11").src = src;
            }
            if (i == 15) {
                var ymdt12 = document.getElementById("ymdt12").innerText = datetime;
                var nd12 = document.getElementById("nd12").innerText = temp;
                var weather12 = document.getElementById("weather12").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon12").src = src;
            }
            if (i == 16) {
                var ymdt13 = document.getElementById("ymdt13").innerText = datetime;
                var nd13 = document.getElementById("nd13").innerText = temp;
                var weather13 = document.getElementById("weather13").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon13").src = src;
            }
            if (i == 17) {
                var ymdt14 = document.getElementById("ymdt14").innerText = datetime;
                var nd14 = document.getElementById("nd14").innerText = temp;
                var weather14 = document.getElementById("weather14").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon14").src = src;
            }
            if (i == 18) {
                var ymdt15 = document.getElementById("ymdt15").innerText = datetime;
                var nd15 = document.getElementById("nd15").innerText = temp;
                var weather15 = document.getElementById("weather15").innerText = wr;
                var src = `https://openweathermap.org/img/wn/${ic}@2x.png`;
                document.getElementById("icon15").src = src;
            }
     }
}
xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric");
xhttp.send();