$(document).on("pagecreate", "#pageone", function() {
  $("#OutputButton").on("click", function() {
    var R = random();
    $(this).text("Random value: " + R);
  });            
});            



function random() {
    //alert("Test");
	return !Math.round(Math.random());
}


/* function storeValue(key, value) {
    window.localStorage.setItem(key, value);
} */

