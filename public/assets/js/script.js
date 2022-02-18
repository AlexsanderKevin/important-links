const links = document.querySelectorAll('[data-link]')
const linksArray = [...links]
const descriptions = document.querySelectorAll('[data-description]')
const descriptionsArray = [...descriptions]

function handleMouseEnter(link){
    const target = link.getAttribute('data-link')

    for(const description of descriptionsArray){
        const id = description.getAttribute('data-description')
        description.classList.remove('active')

        if(id === target){
            description.classList.add('active')
        }
    }
    for(const link of linksArray){
        link.classList.remove('active')
    }
    link.classList.add('active')
}

for(const link of linksArray){
    link.addEventListener('mouseover', ()=>{handleMouseEnter(link)})
}