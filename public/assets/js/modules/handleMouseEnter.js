export default function linkActivation(links, descriptions){

    function handleMouseEnter(link){
        const target = link.getAttribute('data-link')
    
        for(const description of descriptions){
            const id = description.getAttribute('data-description')
            description.classList.remove('active')
    
            if(id === target){
                description.classList.add('active')
            }
        }
        for(const link of links){
            link.classList.remove('active')
        }
        link.classList.add('active')
    }
    
    for(const link of links){
        link.addEventListener('mouseover', ()=>{handleMouseEnter(link)})
    }
}