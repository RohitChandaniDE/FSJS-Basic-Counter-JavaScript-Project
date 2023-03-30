let count = 0;
const number = document.getElementById("number");
   
  function increase(){
       count++;
       number.innerText = count;
   };

  function decrease() {
      if (count > 0) {
       count--;
       number.innerText = count;
      }
    };