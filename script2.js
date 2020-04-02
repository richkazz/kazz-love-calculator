
 function getnamemale() {
    let firstnamemale = document.getElementById("first-name-male").value;
    let lastnamemale = document.getElementById("last-name-male").value;
    let datemale = document.getElementById("date-male").value;
    let skincolourmale = document.getElementById("skin-colour").value;
    let educationmale = document.getElementById("education").value;
    let nationalitymale = document.getElementById("nationality").value;
    //let Nonesexmale = document.getElementsByName('gender');
    //let Nonesexfemale = document.getElementsByName('genderf');
    //let badsexmale = document.getElementById("bad-sex").value;
    //let Averagesexmale = document.getElementById("Average-sex").value;
    //let Goodsexmale = document.getElementById("Good-sex").value;
    let firstnamefemale = document.getElementById("first-name-female").value;
    let lastnamefemale = document.getElementById("last-name-female").value;
    let datefemale = document.getElementById("date-female").value;
    let skincolourf = document.getElementById("skin-colour-f").value;
    let educationf = document.getElementById("education-f").value;
    let nationalityf = document.getElementById("nationality-f").value;
    //let Nonesexf = document.getElementById("None-sex-f").value;
    //let badsexf = document.getElementById("bad-sex-f").value;
    //let Averagesexf = document.getElementById("Average-sex-f").value;
    //let Goodsexf = document.getElementById("Good-sex-f").value;
     //next section is to split the value gotten from the input
     //if( document.getElementById('None-sex').checked){
       //  none_sex = document.getElementById('None-sex').value;
     //}
     var splitfirstnamemale = firstnamemale.split("");
     var addsplitfirstnamemale = 0;
     var lenfirstnamemale = splitfirstnamemale.length;
     for (var firstnamemalei = 0; firstnamemalei < lenfirstnamemale; firstnamemalei++){
         splitfirstnamemale[firstnamemalei] = firstnamemale.charCodeAt(firstnamemalei);
         addsplitfirstnamemale += parseInt( splitfirstnamemale[firstnamemalei])
     }
     var splitlastnamemale = lastnamemale.split("");
     var addsplitlastnamemale = 0;
     var lenlastnamemale = splitlastnamemale.length;
     for (var lastnamemalei = 0; lastnamemalei < lenlastnamemale; lastnamemalei++){
         splitlastnamemale[lastnamemalei] = lastnamemale.charCodeAt(lastnamemalei);
         addsplitlastnamemale += parseInt( splitlastnamemale[lastnamemalei])
     }
     var splitdatemale = datemale.split("");
     var addsplitdatemale = 0;
     var lendatemale = splitdatemale.length;
     for (var datemalei = 0; datemalei < lendatemale; datemalei++){
         splitdatemale[datemalei] = datemale.charCodeAt(datemalei);
         addsplitdatemale += parseInt( splitdatemale[datemalei])
     }
     var splitskincolourmale = skincolourmale.split("");
     var addsplitskincolourmale = 0;
     var lenskincolourmale = splitskincolourmale.length;
     for (var skincolourmalei = 0; skincolourmalei < lenskincolourmale; skincolourmalei++){
         splitskincolourmale[skincolourmalei] = skincolourmale.charCodeAt(skincolourmalei);
         addsplitskincolourmale += parseInt( splitskincolourmale[skincolourmalei])
     }
     var spliteducationmale =  educationmale.split("");
     var addspliteducationmale = 0;
     var leneducationmale = spliteducationmale.length;
     for (var  educationmalei = 0;  educationmalei < leneducationmale; educationmalei++){
         spliteducationmale[educationmalei] =  educationmale.charCodeAt(educationmalei);
         addspliteducationmale += parseInt( spliteducationmale[educationmalei])
     }
     var splitnationalitymale = nationalitymale.split("");
     var addsplitnationalitymale = 0;
     var lennationalitymale = splitnationalitymale.length;
     for (var nationalitymalei = 0; nationalitymalei < lennationalitymale; nationalitymalei++){
         splitnationalitymale[nationalitymalei] = nationalitymale.charCodeAt(nationalitymalei);
         addsplitnationalitymale += parseInt( splitnationalitymale[nationalitymalei])
     }
    // var splitNonesexmale = Nonesexmale.split("");
     //var lenNonesexmale = splitNonesexmale.length;
     //for (var Nonesexmalei = 0; Nonesexmalei < lenNonesexmale; Nonesexmalei++){
        // splitNonesexmale[Nonesexmalei] = Nonesexmale.charCodeAt(Nonesexmalei);
    // }
     var splitfirstnamefemale = firstnamefemale.split("");
     var addsplitfirstnamefemale = 0;
     var lenfirstnamefemale = splitfirstnamefemale.length;
     for (var firstnamefemalei = 0; firstnamefemalei < lenfirstnamefemale; firstnamefemalei++){
         splitfirstnamefemale[firstnamefemalei] = firstnamefemale.charCodeAt(firstnamefemalei);
         addsplitfirstnamefemale += parseInt( splitfirstnamefemale[firstnamefemalei])
     }
     var splitlastnamefemale = lastnamefemale.split("");
     var addsplitlastnamefemale = 0;
     var lenlastnamefemale = splitlastnamefemale.length;
     for (var lastnamefemalei = 0; lastnamefemalei < lenlastnamefemale; lastnamefemalei++){
         splitlastnamefemale[lastnamefemalei] = lastnamefemale.charCodeAt(lastnamefemalei);
         addsplitlastnamefemale += parseInt( splitlastnamefemale[lastnamefemalei])
     }
     var splitdatefemale = datefemale.split("");
     var addsplitdatefemale = 0;
     var lendatefemale = splitdatefemale.length;
     for (var datefemalei = 0; datefemalei < lendatefemale;datefemalei++){
         splitdatefemale[datefemalei] = datefemale.charCodeAt(datefemalei);
         addsplitdatefemale += parseInt( splitdatefemale[datefemalei])
     }
     var splitskincolourf = skincolourf.split("");
     var addsplitskincolourf = 0;
     var lenskincolourf = splitskincolourf.length;
     for (var skincolourfi = 0; skincolourfi < lenskincolourf; skincolourfi++){
         splitskincolourf[skincolourfi] = skincolourf.charCodeAt(skincolourfi);
         addsplitskincolourf += parseInt( splitskincolourf[skincolourfi])
     }
     var spliteducationf = educationf.split("");
     var addspliteducationf = 0;
     var leneducationf = spliteducationf.length;
     for (var educationfi = 0; educationfi < leneducationf; educationfi++){
         spliteducationf[educationfi] =educationf.charCodeAt(educationfi);
         addspliteducationf += parseInt( spliteducationf[educationfi])
     }

     var splitnationalityf = nationalityf.split("");
     var addsplitnationalityf = 0;
     var lennationalityf = splitnationalityf.length;
     for (var nationalityfi = 0; nationalityfi < lennationalityf; nationalityfi++){
         splitnationalityf[nationalityfi] = nationalityf.charCodeAt(nationalityfi);
         addsplitnationalityf += parseInt( splitnationalityf[nationalityfi])
     }
     //to check if input on boh date is the same but if it is not the same return
     if (addsplitfirstnamemale > 0 ){
         
     }
     else if(addsplitfirstnamemale === 0 ){
         
         var checkaddsplitfirstnamemale = "input correct name";
         document.getElementById("correct-firstnamemale").innerHTML= checkaddsplitfirstnamemale;
         return checkaddsplitfirstnamemale;
     }
         if ( addsplitfirstnamefemale > 0){
             
         }
    
     else if(addsplitfirstnamefemale === 0 ){
         var asd = "input correct name";
         document.getElementById("firstname_female").innerHTML= asd;
         return asd;
     }
         if (addsplitdatemale === addsplitdatefemale ){
             
         }
     else if(addsplitdatemale < addsplitdatefemale ){
         var checkaddsplitdatemale = "input correct date";
         document.getElementById("correct-input1").innerHTML= checkaddsplitdatemale;
         document.getElementById("correct-input").innerHTML= checkaddsplitdatemale;
         return checkaddsplitdatemale;
     }
     else if(addsplitdatemale > addsplitdatefemale ){
         var checkaddsplitdatemale1 = "input correct date";
         document.getElementById("correct-input1").innerHTML= checkaddsplitdatemale1;
         document.getElementById("correct-input").innerHTML= checkaddsplitdatemale1;
         return checkaddsplitdatemale1;
     }
    
     let male_array = [];
        male_array.push(addsplitfirstnamemale,addsplitlastnamemale,addsplitdatemale,addsplitskincolourmale,addspliteducationmale,addsplitnationalitymale );
     let female_array = [];
     female_array.push(addsplitfirstnamefemale,addsplitlastnamefemale,addsplitdatefemale,addsplitskincolourf,addspliteducationf,addsplitnationalityf);
    let male_female = male_array[0] + female_array[5];
     let male_female1 = male_array[1] - female_array[4];
     let male_female2 = male_array[2] + female_array[3];
    let male_female3 = male_array[3] - female_array[2];
    let male_female4 = male_array[4] + female_array[1];
     let male_female5 = male_array[5] - female_array[0];
     let male_female_array = [];
     male_female_array.push(male_female,male_female1,male_female2,male_female3,male_female4,male_female5);
     var lenmale_female_array1 = male_female_array.length;
    let addmale_female_array1 = 0;
     for (var male_female_arrayi = 0; male_female_arrayi < lenmale_female_array1; male_female_arrayi++){
         addmale_female_array1 += parseInt( male_female_array[male_female_arrayi])
     }
     let kazz_calculator = "you do not match on any possible level";
     let kazz_calculator1 = "there is a 50-50 chance of the relationship going both ways";
     let kazz_calculator2 = "you are a match";
     let kazz_calculator3 = "perfect march";
     let kazz_calculator4 = "only a miracle would make the relationship";
     let kazz_calculator5 = "the risk of break-up is greater than 80% ";
     let kazz_calculator6 = "blessed by GOD";

     let total = ( addmale_female_array1/20000)*100;
     if (total  < 1 ){
         document.getElementById('total_p').innerHTML= kazz_calculator;
         return kazz_calculator;
     }

 else if (total >=1 && total < 20){
         document.getElementById('total_p').innerHTML= kazz_calculator4;
         return kazz_calculator4;
     }
     else if (total => 20 && total < 40 ){
         document.getElementById('total_p').innerHTML= kazz_calculator5;
         return kazz_calculator5;
     }
     else if (total => 40 && total < 60 ){
         document.getElementById('total_p').innerHTML= kazz_calculator1;
         return kazz_calculator1;
     }
     else if (total => 60 && total < 80 ){
         document.getElementById('total_p').innerHTML= kazz_calculator2;
         return kazz_calculator2;
     }
     else if (total => 80 && total < 99 ){
         document.getElementById('total_p').innerHTML= kazz_calculator3;
         return kazz_calculator3;
     }
     else if (total => 99 && total < 100 ){
         document.getElementById('total_p').innerHTML= kazz_calculator6;
         return kazz_calculator6;
     }
     


 }