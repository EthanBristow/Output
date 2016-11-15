$(document).on("pagecreate", "#pageone", function() {
  $("#OutputButton").on("click", function() {
    var R = random();
    $(this).text("Random value: " + R);
      
      if (R == true) {
          navigator.notification.beep(1);
      }
      else if (R == false) {
          navigator.notification.beep(2);
      }
               
  });            
});            



function random() {
    //alert("Test");
	return !Math.round(Math.random());
}


/* function storeValue(key, value) {
    window.localStorage.setItem(key, value);
} */

