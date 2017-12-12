

var inputID = document.getElementById("textID");
var searchButton = document.getElementById("searchButton");
var searchID;
searchButton.addEventListener("click",function()
{
    searchID = inputID.value;
    console.log(searchID);
    inputID.value = "";
});





