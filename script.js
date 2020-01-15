$(".futureButton").click(function(){
    var name= $(".name").val();
    $(".nameVal").text(name);
});

$(".futureButton").click(function(){
  var age= $(".age").val();
var ageNum = parseInt(age) + 30 + "" ;
  $(".ageVal").text(ageNum);
    
});
$(".futureButton").click(function(){
    var burgers= $(".burgers").val();
    var burgersNum= parseInt(burgers) * 52 * 30 + "" ;
    $(".burgersVal").text(burgersNum);
});