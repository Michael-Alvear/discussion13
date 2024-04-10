function loader(){
    const begin = document.getElementById("billing");
    console.log(begin.value);
    console.log("hi");
}

let bill = document.getElementById("billing");
let home = document.getElementById("home");

document.querySelector("input[name=useBilling]").addEventListener("change",function(){
    if(this.checked){
        console.log(home.value);
        console.log(bill.value);
        home.value = bill.value;
        home.disabled = true;
    }
    else{
        home.value = "";
        home.disabled = false;
    }
});

