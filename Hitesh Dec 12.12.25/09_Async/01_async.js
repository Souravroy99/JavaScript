const randomColor = function(){
    const hex = "0123456789abcdef"
    let color = "#"

    for(let i=0 ; i<6 ; i++)
    {
        color += hex[Math.floor(Math.random() * 16)] 
    }

    return color ;
}

let ref ;

const startChangingColor = () => {
    function changeBG() {
        document.body.style.backgroundColor = randomColor() ;
    }

    ref = setInterval(changeBG, 1000)
}

const stopChangingColor = () => {
    clearTimeout(ref) 
}


document.querySelector('.start').addEventListener('click', startChangingColor)

document.querySelector('.stop').addEventListener('click', stopChangingColor)