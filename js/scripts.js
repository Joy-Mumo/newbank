
//front-end
function attack() {
    event.preventDefault();
    var a = parseInt(document.getElementById("deposit").value);
   $("#display").text("Your first deposit is" + " " + a);
   
   return a;

  }
  //back-end
  var deposit=function(a){
   return a;
  }; 
  

//front-end
function work() {
    event.preventDefault();
    var a = parseInt(document.getElementById("deposit").value);
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
    var a = parseInt(document.getElementById("deposit").value);
    var c = parseInt(document.getElementById("transact").value);
   $("#display2").text( a - c +" " +"Total account balance");
   
   return a + c;

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