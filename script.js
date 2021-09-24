const anchors = document.querySelectorAll('a[href^="#"]')
for (let anchor of anchors){
    anchor.addEventListener("click", function(e) {   
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' +blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};
let array=[18,7,95,50,100,42,12,83,64,16,57,98,3,71,14,97,45,10,7]
for (let j=0; j < array.length; j++){
    for (let i=0; i < array.length; i++){
        if (array[i]>array[i+1]) {
            [array[i], array[i+1]]=[array[i+1], array[i]]
        }
    }
}

for (let i=0; i < array.length; i++){
    console.log(array[i]);
}