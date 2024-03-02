//let time=16;
//let greeting=time<12 ? "Good morning!":"Good afternoon!";
//console.log(greeting);
//let purchaseamount=125;
//let discount=purchaseamount>=100? 10:0;
//console.log(`your total is${purchaseamount-purchaseamount*(discount/100)}`)
//let day=1;
 //switch (day) {
  //  case 1:
    //    console.log(`it is monday`);
     //   break;
   // case 2:
   //     console.log(`it is thusday`);
    //    break;
   // case 3:
    //    console.log(`it is wednesday`);
    //    break;
   // case 4:
     //   console.log(`it is Thursday`);
     //   break;
    //case 5:
     //   console.log(`it is Friday`);
     //   break;
   // case 6:
      //  console.log(`it is Saturday`);
       // break;
   // case 7:
      //  console.log(`it is Sunday`);
      //  break;
   // default:
    //    console.log(`please enter the value between 1 to 7`);
 //}
 //let username="Manas";
 //jk=username

 //console.log(username.length);
 //let phonenumber="123-456-7890";
 //phonenumber=phonenumber.replaceAll("-","");

 //console.log(phonenumber);
 //let name="manusa";
 //console.log(name.slice(0,5));

 //.const email="Manu1@gmail.com";
 //let username=email.slice(0,email.indexOf("@"));
 //let extension=email.slice(email.indexOf("@")+1);

 //console.log(extension);
 //console.log(username);

 //let username=window.prompt("Enter you username:");
 //username=username.trim();
 //let letter=username.charAt(0)
 //letter=letter.toUpperCase();

 //let extrachars=username.slice(1);
 //extrachars=extrachars.toLowerCase();

//username=letter+ extrachars;
//console.log(username);


//username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
//console.log(username);


//const temp=20;

//if(temp<=0 && temp>30){
//  console.log("This weather is bad");
//}

//else {
 // console.log("This weather is Good");
//}
//const isSunny=false;
//if(!isSunny){
 // console.log("it is CLoudy");
//}
//else {
 // console.log("if is cloudy")
//}

//const pi=3.14;
//if(pi=="3.14"){
//console.log("that is pi");
//}
//else {
 // console.log("that is not pi");
//}
//if(pi==="3.14"){
  //console.log("that is pi");
  //}
  //else {
  //  console.log("that is not pi");
 // }
 // if(pi !=="3.14"){
  //  console.log("that is not pi");
  //  }
   // else {
   //   console.log("that is  pi");
   // }

   // let username="";
   // do{
    //  username=window.prompt("enter the name ");
   // }while(username===""||username===null)
   // console.log(`hello ${username}`);
//let oh=true;
//let username;
//let password;
//while(!oh){
 // window.prompt(`enter your username`);
 // window.prompt(`enter your password`);

 // if(username==="myusername" && password==="mypassword"){
  //  oh=true;
  //  console.log("your are logged in");
  //}
  //else {
  //  console.log("invalid ho");
 // }
//}
//for (let i=1; i<=20;i++){
 // if(i==13){
  //  break;
  //}
  //else {
  //  console.log(i);
  //}
//}
//console.log("Happy new year");
const mininum=1;
const maxmum=100;
const answer=Math.floor(Math.random()*(maxmum-mininum+1));

console.log(answer);

let attempts=0;
let guess;
let running=true;

while (running) {
    guess=window.prompt(`guess anumber ${mininum}-${maxmum}`);
    guess=Number(guess);
    if(isNaN(guess)) {
        window.alert("please enter  a valid number");
}
else if(guess<mininum ||guess>maxmum) {
    window.alert("please enter a valid number");
}
else {
    attempts++;
    if(guess<answer){
        window.alert("TOO LOW! TRY AGAIN");
    }
    else if(guess>answer){
        window.alert("TOO HIGH!TRY AGAIN");
    }
    else {
        window.alert(`CORRECT! THE ANSWER WAS ${answer}.it took you ${attempts} attempts`);
        running = false;
    }
}

}