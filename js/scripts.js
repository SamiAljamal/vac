$(document).ready(function() {
  $("form#survey").submit(function(event){
    var tally = 0;
    var finished = true;
    for(var i=1; i<7; i++ ){
      var num= i.toString();
      var check = parseInt($("input:radio[name="+num+"]:checked").val());
      if(check){
        tally += check;
      }else{
        finished = false;
      }
    }
    var destination= ""
    if(finished){

      if(tally <=6){
        destination="You're going to New York!";
        $("#newyork").show()
        $("#beach").hide();
        $("#camping").hide();
        $("#europe").hide();
      } else if (tally <= 12){
        destination="You're Headed to the Beach to relax!";
        $("#newyork").hide()
        $("#beach").show();
        $("#camping").hide();
        $("#europe").hide();
      } else if (tally <= 18){
        destination="You'll Be enjoying the great outdoors!"
        $("#newyork").hide()
        $("#beach").hide();
        $("#camping").show();
        $("#europe").hide();
      } else{
        destination="You'll be enjoying Europe!"
        $("#newyork").hide()
        $("#beach").hide();
        $("#camping").hide();
        $("#europe").show();
      }

    }

    $("#result").text(destination);
    $("#myModal").modal("show");
    event.preventDefault();
  });

});
