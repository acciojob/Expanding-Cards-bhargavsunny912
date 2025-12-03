let one=document.getElementById("panel-1");
let two=document.getElementById("panel-2");
let three=document.getElementById("panel-3");
let four=document.getElementById("panel-4");
let five=document.getElementById("panel-5");

let arr=[one,two,three,four,five];

let card=document.querySelector(".container");

card.addEventListener("click",(e)=>{

	let ids=e.target.parentElement.id;
	let y=document.getElementById(`${ids}`);
    let z=document.querySelector(`#${ids} p`);
    y.classList.add("active");
    z.classList.add("text");

    arr.forEach((a)=>{
        if(a!==y){
            if(a.classList.contains("active")){
                a.classList.remove("active");
            }
        }
    });

})