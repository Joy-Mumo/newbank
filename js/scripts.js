
//front-end
function attack() {
    event.preventDefault();
    var m = document.getElementById("fname").value;
    var n = document.getElementById("lname").value;
    var a = parseInt(document.getElementById("create").value);
   $("#display").text("Your account details:" + " " +" "+ m + " " + n +" :" + "Ksh."+a);
   
   return a + m + n;

  }
  //back-end
  var deposit=function(a,m,n){
   return a + m + n;
  }; 
  

//front-end
function work() {
    event.preventDefault();
    var a = parseInt(document.getElementById("create").value);
    var b = parseInt(document.getElementById("transact").value);
   $("#display2").text( a + b +" " +"Total account balance");
   
   return a + b;

  }
  //back-end
  var deposit2=function(a,b){
   return a + b;
  }; 

  //front-end
function punch() {
    event.preventDefault();
    var a = parseInt(document.getElementById("create").value);
    var c = parseInt(document.getElementById("transact").value);
   $("#display2").text( a - c +" " +"Total account balance");

   if (a<c){
    $("#display2").text("Sorry account has insufficient funds for such a transcation");
   }
   
   return a - c;

  }
  //back-end
  var withdraw=function(a,c){
   return a - c;
  }; 

    //front-end
function crack() {
    event.preventDefault();
    var d = parseInt(document.getElementById("message").value);
   $("#display3").text( "Thank you we value your feedback");
   
   return ;

  }
  //back-end
  var withdraw=function(){
   return ;
  }; 