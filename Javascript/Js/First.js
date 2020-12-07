//var a, b, c, d;
//
//a=3;
//b=2;
//c=1;
//d=a+b+c;
//
//document.getElementById("Output").innerHTML= d;
//
//var name= "will";
//
//document.getElementById("Output2").innerHTML= name;
//
///*
//alert("Your output is :" +name );
//*/
//
//function test1(){
//    var fullname=prompt("Enter your full name");
//    document.getElementById("Name").innerHTML= name;
//}
//
//function AgePredict(){
//    var age=prompt("Enter your current age");
//    if(age<16){
//        alert("You are under aged");
//    }
//    else if(age>16 && age<25)
//        {
//             alert("You are aged");
//        }
//    else{
//        alert("You are over aged");
//    }
//}
//
//function bloodgroup(){
//    
//    
//    
//}


function Score(){
    var A1 = document.getElementById("Assignment01").value || 0;
    var A2 = document.getElementById("Assignment02").value || 0;
    var A3 = document.getElementById("Assignment03").value || 0;
    var A4 = document.getElementById("Assignment04").value || 0;

    var AScore(((parseFloat(A1) + parseFloat(A2) + parseFloat(A3) + parseFloat(A4)) / 40) * 15);
    
    alert("Your Final Assignment Score out of 15 is" +AScore);
    document.getElementById("TotalScore"").value=("Your Final Assignment Score out of 15 is" +AScore);
    
    
}



































