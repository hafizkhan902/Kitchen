const search_btn=document.querySelector('#srch');
const search_box=document.querySelector('#search_nav');
const label=document.querySelector('#label');


let search_fun =()=>{
    // count++;
    if(label.style.display=="flex"){
        alert("Search would be appeared shortly ! Please wait ");
    }
    else{
        search_box.style.display="flex";
        label.style.display="flex";
    }
}


let closepopup=()=>{
    search_box.style.display="none";
    label.style.display="none";
}


search_btn.addEventListener('click',search_fun);
label.addEventListener('click',closepopup);