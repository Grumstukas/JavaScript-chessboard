function myFunction() {
    var columns, rows, index;
  
  var rows = document.getElementById("rows").value;
  var columns = document.getElementById("columns").value;
  var index = document.getElementById("index").value;

  if((document.getElementById('columns').value === '') && (document.getElementById('rows').value === ''))
  {document.getElementById("demo").innerHTML =
"Būk geras, įrašyk ką nors, nes be duomenų nieko suskaičiuoti negaliu. Ačiū :)"}

    else if ((columns < 1) && (rows < 1 )) {
        document.getElementById("demo").innerHTML =
    "Stulpeliai ir eilutės šachmatų lentoje skaičiuojami teigiamais skaičiais :), skaičiai kuriuos įvedei - neteisingi"
    } 
    else if (columns < 1) {
        document.getElementById("demo").innerHTML =
    "Stulpeliai šachmatų lentoje skaičiuojami teigiamais skaičiais :), skaičius kurį įvedei - neteisingas"
    } 
    else if (rows < 1 ){
        document.getElementById("demo").innerHTML =
    "Eilutės šachmatų lentoje skaičiuojami teigiamais skaičiais :), skaičius kurį įvedei - neteisingas"
    } 
    else if (index < 1 ){
        document.getElementById("demo").innerHTML = "Tokio langelio lentoje tikrai nėra :)"}

    else if (document.getElementById('index').value === '')
    {document.getElementById("demo").innerHTML = "Tai kokio langelio koordinates norėtum sužinoti ???"}
else {
    if ( (index % columns) > 0 ){
        var x = ( (index % columns) - 1 );}
        else {
        var x = (columns - 1);}
    if ( (index * columns * rows) < 2 ){
        var y = 0 ;}
        else {
        var y = Math.floor((index - x) / columns);}

  if( index > (rows * columns)){
      document.getElementById("demo").innerHTML =
  "Langelio koordinačių nustatyti negalima, nes ieškomo langelio lentoje tiesiog nėra. Bandyk dar kartą ;)" 
  } else {
  document.getElementById("demo").innerHTML =
  "Langelio " + index + " kordinatės yra " + ': ( '+x+'; '+y+' )' ; }}}
  