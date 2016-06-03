$(document).ready(function() {
  $("form#survey").submit(function(event){
    var tally = 0;
    var finished = true;

    for(var i=1; i<7; i++ ){
      var num= i.toString();
      var check = parseInt($("input:checkbox[name="+num+"]:checked").val());
      if(check){
        tally += check;
      }else{
        finished = false;
      }
    }
    alert(tally);




  });

});
