const colors=document.querySelectorAll(".color");
colors.forEach(function(color){
    color.addEventListener("mouseover",function(){
        const selectedColor=color.getAttribute("data-color");
        document.body.style.backgroundColor=selectedColor;
    });
});