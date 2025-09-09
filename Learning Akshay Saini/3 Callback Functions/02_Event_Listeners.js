let cnt = 0 ;
document.getElementById("clickme").addEventListener("click", () => {
    console.log('Button clicked', ++cnt);
})