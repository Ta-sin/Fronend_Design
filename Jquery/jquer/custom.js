//$(document).ready(function(){
  //  $('#Idname').click(function() {
    //    $('boxname').hide();
    // });
    // $('#Idname').click(function() {
       // $('boxname').hide();
  //  });
// });
$(document).ready(function(){
    $('#showbtn').click(function() {
        $('a').hide();
    });
    $('#hiddenbtn').click(function() {
        $('B').hide();
    });
});
$("showbtn").click(function(){
    $("a").animate({left: '250px'});
});