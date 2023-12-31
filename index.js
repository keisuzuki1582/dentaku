const operatorReg = /^(\+|-|\*|\/)$/;
const numReg = /^([0-9]|00)$/;
let canAddDecimalPoint = true;

function get_calc(btn) {
   const preValue = document.dentaku.display.value.slice(-1);
   let value = btn.value;

   if (value == "0") {
    if (preValue === "") {
        return;
    }
   }
   if (value == "00") {
    if (preValue === "") {
        return;
    }
   }
   if (value == ".") {
      if (canAddDecimalPoint === false) return;
      
      if (preValue === "" || preValue === "." || operatorReg.test(preValue)) {
         return;
      }
      canAddDecimalPoint = false;
   }
   else if (numReg.test(value) === false) {
      canAddDecimalPoint = true;
   }
   if (operatorReg.test(value) && operatorReg.test(preValue)) {
      return;
   }
   if (value == "00" && /^([0-9]|\.)$/.test(preValue) === false) {
      value = "0"
   }
   if (value === "=") {
      document.dentaku.display.value = eval(document.dentaku.display.value);
   } else if (value === "AC") {
      document.dentaku.display.value = "";
   } else {
      document.dentaku.display.value += value;
   }
}