function myFunction(event) {
    var x = event.which || event.keyCode;

    var male = [];
    male.push(x);

    document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
 document.getElementById("demo1").innerHTML = "The Unicode value is: " + male;
}





function myFunction(event) {
    let x = event.which || event.keyCode;

    if ( x === 97 )
    {
        var y = 1;
    }
    else if ( x === 98 )
    {
        var b = 2;
    }
    else if ( x === 99 )
    {
        var c = 3;
    }
    else if ( x === 100 ) {
        var d = 4;
    }
    else if ( x === 100 ) {
        var e = 5;
    }


    // document.getElementById("demo").innerHTML = "The Unicode value is: " + male1;


    var ma = [];
    ma.push(y);
    var mal = [];
    mal.push(b);
    var male = [];
    male.push(c);
    var male1 = ma.concat(mal, male
    );
    if ( mal === 2){
        alert(hi)
    }
}
