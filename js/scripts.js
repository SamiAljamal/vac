
$(document).ready(function() {
  $("form#survey").submit(function(event){
    var tally = 0;
    var finished = true;
    // for loop to loop through the questions to tally an a number which will be stored in var tally//
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
    //if the survey brings back a number, we will branch to determine the results//
    if(finished){
      if(tally <=40){
        destination="You're going to New York!";
        $("#newyork").show()
        $("#beach").hide();
        $("#camping").hide();
        $("#europe").hide();
      } else if (tally <= 70){
        destination="You're Headed to the Beach to relax!";
        $("#newyork").hide()
        $("#beach").show();
        $("#camping").hide();
        $("#europe").hide();
      } else if (tally <= 100){
        destination="You'll Be enjoying the great outdoors!";
        $("#newyork").hide()
        $("#beach").hide();
        $("#camping").show();
        $("#europe").hide();
      } else{
        destination="You'll be enjoying Europe!";
        $("#newyork").hide()
        $("#beach").hide();
        $("#camping").hide();
        $("#europe").show();
      }
    }else {
      destination= "Please finish the quiz";
      $("#newyork").hide()
      $("#beach").hide();
      $("#camping").hide();
      $("#europe").hide();
    }
    $("#result").text(destination);
    $("#myModal").modal("show");
    event.preventDefault();
  });

});
