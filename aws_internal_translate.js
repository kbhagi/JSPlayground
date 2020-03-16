var AWS = require('aws-sdk');

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "DKFJLFJLDKFJdd";
AWS.config.secretAccessKey = 'jkjlkjeiojiekldcmkdlskdlsk';
AWS.config.region = "us-east-1";

var translate_client = new AWS.Translate({apiVersion: '2017-07-01'});
console.log(translate_client)
console.log(translate_client)
console.log("enter")
function translateInfo() {
    //alert("fucation enter");
    var params = {
        "Text": "hola",
        "SourceLanguageCode": "auto",
        "TargetLanguageCode": "en"
    }
    console.log("parmas pass");
    //params.text = document.getElementById("textinput").value;
    //alert("parmas text lock");
    //alert("parmas text lock" + document.getElementById("textinput").value);
    translate_client.translateText(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
        
    }
    else {
        console.log(data);
        // console(data);
    }
    });

}
translateInfo()
