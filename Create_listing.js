$(document).ready(function()
{
    //Method call to the file uploader plugin
    $("#fileuploader").uploadFile({
        url:"YOUR_FILE_UPLOAD_URL",
        fileName:"myfile"
    });
});