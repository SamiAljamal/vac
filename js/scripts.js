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
        $("#newyork").show();

      } else if (tally <= 12){
        $("#beach").show();
      } else if (tally <= 18){
        $("#camping").show();
      } else{
        $("#europe").show();
      }

    }
    event.preventDefault();





  });

});
