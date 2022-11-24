//first webpack test
import "./raheem.js"

import dayjs from "dayjs"
var date = dayjs().format('YYYY-MM-DD [at] HH:mm:ss');
// console.log();
document.getElementById("btn-1").addEventListener("click", btn_procedure);
function btn_procedure(){
  const btn = document.getElementById("btn-1");
  alert ('Test date :'+date);
  btn.innerHTML = "Don't press again!"
}


console.log(dayjs().format("YY-MM-DD"));
console.log("raheem");
console.log("raheem");
console.log("raheem");