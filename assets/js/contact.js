

$("#submitContact").click(function(){
    let url = "https://hooks.slack.com/services/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" // Webhook URL
    let name = $("#name").val();
    let email = $("#email").val();
    let text = $("#textarea1").val(); 
    $.ajax({
        data: 'payload=' + JSON.stringify({
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `*Message from ${name} (${email})*`
                    },
                },
                {
                    "type":"section",
                    "text":{
                        "type": "mrkdwn",
                        "text": text
                    }
                }
            ]
        }),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: url
    });
    $("#name").val("");
    $("#email").val("");
    $("#textarea1").val("");   
});