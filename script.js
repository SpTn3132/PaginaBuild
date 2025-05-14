document.getElementById("soyUnBoton").addEventListener("click", CambioColor);
let color;
function CambioColor()
{
  console.log(color);
  if(color==true){
      document.body.style.backgroundColor = "red";
      color = false;
      }else{
      document.body.style.backgroundColor = "black";
      color = true;
      }
}
