$(document).ready(function(){
  $("form").submit(function(event){

    var countby = parseInt($("#countupby").val());
    var countto = parseInt($("#countupto").val());

    var results = countUpBy(countto, countby);

    var display = results.join(", ");
    $("#results").show();
    $("#results").text(display);
    event.preventDefault();
  });
});
