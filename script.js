const slideshow = document.querySelector('.slideshow')

setInterval(()=> {
    const firstIcon = slideshow.firstElementChild

    const thirdIcon = slideshow.children[3]

    firstIcon.classList.add('faded-out')

    thirdIcon.classList.add('light')

    thirdIcon.previousElementSibling.classList.remove('light')

    setTimeout(()=> {
        slideshow.removeChild(firstIcon)
        slideshow.appendChild(firstIcon)

        setTimeout(()=> {
            firstIcon.classList.remove('faded-out')
        },500)
        
    },500)
    
    
},3000)