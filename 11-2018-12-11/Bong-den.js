function turn_on(){
    document.getElementById('myImage').src='./pic_bulbon.gif';
    document.getElementById('btn_on_off').innerHTML = "OFF";
}
function turn_off(){
    document.getElementById('myImage').src='./pic_bulboff.gif';
    document.getElementById('btn_on_off').innerHTML = "ON";
}
function on_off(){
  //  console.log(document.getElementById('myImage').src);
    var a = (document.getElementById('myImage').src);
  //  console.log(a);
  var n = a.search('on');
  if(n == -1){
    turn_on(); 
  }
    else{
    turn_off();
   
    }
  
    
}