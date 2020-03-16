var AWS = require('aws-sdk');
var translate = new AWS.Translate();


exports.handler = (event, context, callback) => {

    var params = {
        Text: event.inputText,
        SourceLanguageCode: event.SourceLanguageCode,
        TargetLanguageCode: event.TargetLanguageCode
    };
    translate.config.update({
        accessKeyId: 'KJLKERLECSSLJ',
        secretAccessKey: '3430430/0z+dfdlkjdklfjdkl',
        region:'us-west-1'
    });

    translate.translateText(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        }
        if (data) {
            console.log(data.TranslatedText);
        }
    });
}; 