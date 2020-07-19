$(document).ready(function(){
    //Gets the url to the Flickr api
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?%22%20+%20%22id=188045891@N04&format=json&jsoncallback=?&tags=ChiFinalImg2"

    //Gets the Json file via the saved url
    $.getJSON(url, function(data){
        var html = "";
        var links_alts=[alt="Art",alt="Toys",alt="Cars",alt="Clothing",alt="Electronics",alt="Sports"]
        var links=[6,2,3,1,5,4]; // creates the array links
        var i = 0; //Creates element the variable i
        console.log(data);//Prints to Console
        $.each(data.items, function(i, item){//Loops through each
            html = "<img " + "class=\"image\"" + " src= "+ item.media.m  + " " +links_alts[i] +" />" ; //Gets the html of the image and saves it to the html img format
            $("#Link"+ links[i]).html(html);//Sets the pictures in a specific order.
            i++;//increments the i number

        });


    });
});
