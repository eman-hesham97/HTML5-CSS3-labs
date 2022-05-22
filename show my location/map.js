var para = document.getElementById('My_Map')
function getLocation(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)
  }
  else{
    para.innerHTML="Geolocation isn't supported by this browser"
  }
}

function showPosition(position){
var lat = position.coords.latitude;
var long = position.coords.longitude;
para.innerHTML="latitude : "+lat+"<br>Longitude :"+ long;
var url = 'http://maps.google.com/maps?q='+lat+","+long;
window.open(url,'_blank')
}