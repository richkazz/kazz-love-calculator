
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
     if( document.getElementById('None-sex').checked){
         none_sex = document.getElementById('None-sex').value;
     }
     var splitfirstnamemale = firstnamemale.split("");
     var addsplitfirstnamemale = 0;
     var lenfirstnamemale = splitfirstnamemale.length;
     for (var firstnamemalei = 0; firstnamemalei < lenfirstnamemale; firstnamemalei++){
         splitfirstnamemale[firstnamemalei] = firstnamemale.charCodeAt(firstnamemalei);
         addsplitfirstnamemale -= parseInt( splitfirstnamemale[firstnamemalei])
     }
     var splitlastnamemale = lastnamemale.split("");
     var addsplitlastnamemale = 0;
     var lenlastnamemale = splitlastnamemale.length;
     for (var lastnamemalei = 0; lastnamemalei < lenlastnamemale; lastnamemalei++){
         splitlastnamemale[lastnamemalei] = lastnamemale.charCodeAt(lastnamemalei);
         addsplitlastnamemale -= parseInt( splitlastnamemale[lastnamemalei])
     }
     var splitdatemale = datemale.split("");
     var addsplitdatemale = 0;
     var lendatemale = splitdatemale.length;
     for (var datemalei = 0; datemalei < lendatemale; datemalei++){
         splitdatemale[datemalei] = datemale.charCodeAt(datemalei);
         addsplitdatemale -= parseInt( splitdatemale[datemalei])
     }
     var splitskincolourmale = skincolourmale.split("");
     var addsplitskincolourmale = 0;
     var lenskincolourmale = splitskincolourmale.length;
     for (var skincolourmalei = 0; skincolourmalei < lenskincolourmale; skincolourmalei++){
         splitskincolourmale[skincolourmalei] = skincolourmale.charCodeAt(skincolourmalei);
         addsplitskincolourmale -= parseInt( splitskincolourmale[skincolourmalei])
     }
     var spliteducationmale =  educationmale.split("");
     var addspliteducationmale = 0;
     var leneducationmale = spliteducationmale.length;
     for (var  educationmalei = 0;  educationmalei < leneducationmale; educationmalei++){
         spliteducationmale[educationmalei] =  educationmale.charCodeAt(educationmalei);
         addspliteducationmale -= parseInt( spliteducationmale[educationmalei])
     }
     var splitnationalitymale = nationalitymale.split("");
     var addsplitnationalitymale = 0;
     var lennationalitymale = splitnationalitymale.length;
     for (var nationalitymalei = 0; nationalitymalei < lennationalitymale; nationalitymalei++){
         splitnationalitymale[nationalitymalei] = nationalitymale.charCodeAt(nationalitymalei);
         addsplitnationalitymale -= parseInt( splitnationalitymale[nationalitymalei])
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
         addsplitfirstnamefemale -= parseInt( splitfirstnamefemale[firstnamefemalei])
     }
     var splitlastnamefemale = lastnamefemale.split("");
     var addsplitlastnamefemale = 0;
     var lenlastnamefemale = splitlastnamefemale.length;
     for (var lastnamefemalei = 0; lastnamefemalei < lenlastnamefemale; lastnamefemalei++){
         splitlastnamefemale[lastnamefemalei] = lastnamefemale.charCodeAt(lastnamefemalei);
         addsplitlastnamefemale -= parseInt( splitlastnamefemale[lastnamefemalei])
     }
     var splitdatefemale = datefemale.split("");
     var addsplitdatefemale = 0;
     var lendatefemale = splitdatefemale.length;
     for (var datefemalei = 0; datefemalei < lendatefemale;datefemalei++){
         splitdatefemale[datefemalei] = datefemale.charCodeAt(datefemalei);
         addsplitdatefemale -= parseInt( splitdatefemale[datefemalei])
     }
     var splitskincolourf = skincolourf.split("");
     var addsplitskincolourf = 0;
     var lenskincolourf = splitskincolourf.length;
     for (var skincolourfi = 0; skincolourfi < lenskincolourf; skincolourfi++){
         splitskincolourf[skincolourfi] = skincolourf.charCodeAt(skincolourfi);
         addsplitskincolourf -= parseInt( splitskincolourf[skincolourfi])
     }
     var spliteducationf = educationf.split("");
     var addspliteducationf = 0;
     var leneducationf = spliteducationf.length;
     for (var educationfi = 0; educationfi < leneducationf; educationfi++){
         spliteducationf[educationfi] =educationf.charCodeAt(educationfi);
         addspliteducationf -= parseInt( spliteducationf[educationfi])
     }

     var splitnationalityf = nationalityf.split("");
     var addsplitnationalityf = 0;
     var lennationalityf = splitnationalityf.length;
     for (var nationalityfi = 0; nationalityfi < lennationalityf; nationalityfi++){
         splitnationalityf[nationalityfi] = nationalityf.charCodeAt(nationalityfi);
         addsplitnationalityf -= parseInt( splitnationalityf[nationalityfi])
     }

     let male_array = []
        male_array.push(addsplitfirstnamemale,addsplitlastnamemale,addsplitdatemale,addsplitskincolourmale,addspliteducationmale,addsplitnationalitymale )
     let female_array = []
     female_array.push(addsplitfirstnamefemale,addsplitlastnamefemale,addsplitdatefemale,addsplitskincolourf,addspliteducationf,addsplitnationalityf)
}
