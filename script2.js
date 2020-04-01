
 function getnamemale() {
    let x = document.getElementById("male").value;
     var splitted = x.split("");
     var len = splitted.length;
     for (var i = 0; i < len; i++){
         splitted[i] = x.charCodeAt(i);
     }
     if (splitted === 0 ){
         alert("input name")
     }

    var maleC = splitted[0] + splitted[1];
    alert(maleC)
}
 function getnamefemale() {
     let x = document.getElementById("female").value;
     var splitted = x.split("");
     var len = splitted.length;
     for (var i = 0; i < len; i++){
         splitted[i] = x.charCodeAt(i);
     }
     if (splitted === 0 ){
         alert("input name")
     }

     var maleC = splitted[0] + splitted[1];
     alert(maleC)
 }