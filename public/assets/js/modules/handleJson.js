import LinkElement from "./link-element.js"
import linkActivation from "./handleMouseEnter.js"

export default async function handleJson(){
    const fetchLinks = await fetch('./links-json/links.json')
    const linksJSON = await fetchLinks.json()

    const linksContainer = document.querySelector('.links')
    const descriptionContainer = document.querySelector('.descriptions-container')

    const links = linksJSON.reduce((acc, link) => {
        const linkComponent = new LinkElement(link)
        linksContainer.appendChild(linkComponent.anchorElement())
        descriptionContainer.appendChild(linkComponent.descriptionElement())

        acc = {
            anchors: [...linksContainer.querySelectorAll('[data-link]')],
            descriptions: [...descriptionContainer.querySelectorAll('[data-description]')]
        }
        return acc
    }, {})

    const {anchors, descriptions} = links
    linkActivation(anchors, descriptions)

    anchors[0].classList.add('active')
    descriptions[0].classList.add('active')
}