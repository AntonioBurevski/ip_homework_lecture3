function showDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    if (dd<10){
        dd = '0' + dd;
    }
    if (mm<10){
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    alert(today);
    today = dd + '-' + mm + '-' + yyyy;
    alert(today);
}

function resultArea(){
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var hP = (a + b + c)/2;
    var rArea = Math.sqrt(hP*(hP - a)*(hP-b)*(hP-c));
    document.getElementById("area").innerHTML = rArea;
}

function stringAnimation(id){
    var element = document.getElementById(id);
    var str = document.getElementById("animateArea").innerHTML = text;
    str.innerHTML = element.value;
    var text = str.innerHTML;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);            
        document.getElementById("animateArea").innerHTML = text;
    }, 200);
}

function guessNumber(){
    var n = Math.ceil(Math.random() * 10);
    var guess = prompt('Guess the number between 1 and 10');
    if(guess == n)
        alert('Good work');
    else
        alert('Not matched, the number was ' + n);
}