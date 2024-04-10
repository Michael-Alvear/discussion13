function headChange(){
    document.getElementsByTagName("h1")[0].classList.add("heading");
}



function doubleClicked(){
    const d = new Date();
    alert(d);
}


checkbox = document.querySelector("input[name=subscribe]");
checkbox.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
      document.querySelector("#emailBox").classList.toggle("hidden");
    } else {
      console.log("Checkbox is not checked..");
      document.querySelector("#emailBox").classList.toggle("hidden");
    }
  });