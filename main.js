$(document).ready(function(){
  var count = parseInt($("#clock-minute").html());
  var breakT = parseInt($("#breakTime").html());
  var buzzer = $("#buzzer")[0];

   //click on start
   $("#start").click(function(){
       $("#totSub").unbind();
       $("#totAdd").unbind();
       $("#breakSub").unbind();
       $("#breakAdd").unbind();
       $("#start").unbind();
      let counter = setInterval(timer,1000);
        //reset timer
        $("#reset").click(function(){
          location.reload();
        });
        var stopTimer = function(){
    clearInterval(counter) // clear the interval and stop the clock
    }
        count*=60;
        breakT*= 60;
        function timer(){
          $(".time-display").hide();
          $("#clock-minute").show();
          $("#loading").html("The Remainig Time");
          count -= 1;
          if(count ===1){
            clearInterval(counter);
              buzzer.play();
            var startBreak = setInterval(breakTimer, 1000);
           }
          if(count%60>=0){
             $("#clock-minute").html(Math.floor(count/60)+":"+count%60);

             }else{
            $("#clock-minute").html(Math.floor(count/60)+":"+"0"+count%60);
           }
          function breakTimer(){
        $("#loading").html("BreakTime");
        $("#breakTime").show();
        breakT -= 1;

         if(breakT%60>=0){
             $("#clock-minute").html(Math.floor(breakT/60)+":"+breakT%60);
             }else{
          $("#clock-minute").html(Math.floor(breakT/60)+":"+"0"+breakT%60);
         }
         if(breakT===0){
           clearInterval(startBreak);
          }}
        }
     });

  $("#totSub").click(function(){
    if(count > 0){
    count -= 1;
    $("#totTime , #clock-minute").html(count);
    }
    if(count == 0){
      $('#totTime').css({"color": "red"});
    }else {
      $('#totTime').css({"color": "white"});
    }
    if(count == 0){
      $("#zerop2").text('You can not set the Session Time less than Zero.');
      $("#zerop2").css({"color": "red"});
    }
  });
  $("#totAdd").click(function(){
    count += 1;
    $("#totTime, #clock-minute").html(count);
    if(count == 0){
      $('#totTime').css({"color": "red"});
    }else {
      $('#totTime').css({"color": "white"});
    }
    if(count > 0){
      $("#zerop2").text('');
    }
  });
  //break time
    $("#breakSub").click(function(){
    if(breakT > 0){
    breakT -= 1;
    $("#breakTime, #clock-minute").html(breakT);
    }
    if(breakT == 0){
      $('#breakTime').css({"color": "red"});
    }else {
      $('#breakTime').css({"color": "white"});
    }
    if(breakT <= 0){
      $("#zerop").text('You can not set the Break Time less than Zero.');
      $("#zerop").css({"color": "red"});
    }else {
      $("#zerop").text('');
    }
  });
  $("#breakAdd").click(function(){
    breakT += 1;
    $("#breakTime, #clock-minute").html(breakT);
    if(breakT == 0){
      $('#breakTime').css({"color": "red"});
    }else {
      $('#breakTime').css({"color": "white"});
    }
    if(breakT >= 1){
      $("#zerop").text('');
    }
  });
});