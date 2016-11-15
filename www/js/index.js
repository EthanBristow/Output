$(document).on("pagecreate", "#pageone", function() {
  $('#OutputButton').on("click", function() {
    var R = random();
      $("#text").innerHTML = R
  });            
});            


function random() {
	return !Math.round(Math.random());
}


/* function storeValue(key, value) {
    window.localStorage.setItem(key, value);
} */

