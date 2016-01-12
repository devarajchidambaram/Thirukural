var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./json/detail.json', 'utf8'));
var kural = JSON.parse(fs.readFileSync('./json/thirukkural.json', 'utf8'));
//console.log(kural.kural.length);
//console.log(JSON.stringify(obj));
kural = kural.kural;


var paul_name, paul_transliteration, paul_translation;
var iyal_name, iyal_transliteration, iyal_translation;
var adikaram_name, adikaram_transliteration, adikaram_translation, start, end;

/**
paul_name = obj.name;
paul_translation = obj.translation;
paul_transliteration = obj.transliteration;

**/

//console.log('obj' , paul_name, paul_transliteration, paul_translation)



var paul = obj.section.detail;

for (var i = 0; i < paul.length; i++) {
    //  console.log('detail ' ,kural[i]);

    paul_name = paul[i].name;
    paul_translation = paul[i].translation;
    paul_transliteration = paul[i].transliteration;

    //console.log('paul =====>' , paul_name, paul_transliteration, paul_translation);
    var iyal = paul[i].chapterGroup.detail;
    for (var j = 0; j < iyal.length; j++) {

        iyal_name = iyal[j].name;
        iyal_transliteration = iyal[j].transliteration;
        iyal_translation = iyal[j].translation;

        //console.log('IYAL ===========>' , iyal_name, iyal_translation, iyal_transliteration);

        var adikaram = iyal[j].chapters.detail;
        for (var k = 0; k < adikaram.length; k++) {

            adikaram_name = adikaram[k].name;
            adikaram_transliteration = adikaram[k].transliteration;
            adikaram_translation = adikaram[k].translation;
            start = adikaram[k].start;
            end = adikaram[k].end;
            //console.log('adikaram ==============>', adikaram_name, adikaram_translation, adikaram_transliteration , start, end );
            for (var x = start; x <= end; x++) {
                kural[x-1].paul_name = paul_name;
                kural[x-1].paul_transliteration = paul_transliteration;
                kural[x-1].paul_translation = paul_translation;
                kural[x-1].iyal_name = iyal_name;
                kural[x-1].iyal_transliteration = iyal_transliteration;
                kural[x-1].iyal_translation = iyal_translation;
                kural[x-1].adikaram_name = adikaram_name;
                kural[x-1].adikaram_transliteration = adikaram_transliteration;
                kural[x-1].adikaram_translation = adikaram_translation;
                kural[x-1].start;
                kural[x-1].end;

                if(start == 1){
                  //  console.log('kural', kural[x])
                }
            };
        };
    };
};

var output = {
 "kural" : kural
} ;

//For alignment output
fs.writeFile('output.json', JSON.stringify(output, null, 4), function (err) {
   // fs.writeFile('output.json', JSON.stringify(output), function (err) {
  if (err) return console.log(err);
  console.log('converted successfully....');
});

