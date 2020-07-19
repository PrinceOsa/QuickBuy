$(document).ready(function() {
    $.getJSON("package.json", function(data) {
        $.each(data,function() {
            $.each(this, function(key,value) {
                $(".loginarea").append(

                    "<div id=\"log1\">" + "<h1 class=\"profile_h1\">"  +value.log +"</h1>"+"</div>" +
                    "<div class=\"textbox\">" +  value.textbox + "</div>" +
                    "<div class=\"textbox\">" + value.textbox2 + "</div>" +
                    "<div>"  +value.submit +"</div>"

                );
            });
        });
    });

});