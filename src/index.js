import './less/index.less'

// Your code goes here!
console.log('hello World!')

//1- load
window.onload = function(evt){
    console.log(`event ${evt.tupe} fired! Ready to go!`);
    const heading = document.querySelector('h1');
    heading.textContent = "READY TO GO!"
//2- copy
    window.addEventListener('copy', () =>{
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })
}
//click

