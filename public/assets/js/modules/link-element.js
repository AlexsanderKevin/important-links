export default class LinkElement{
    constructor(obj){
        this.title = obj.title,
        this.id = obj.title.toLowerCase().replace(' ', '-'),
        this.departments = obj.departments,
        this.description = obj.description,
        this.url = obj.url,
        this.color = obj.color
    }
    anchorElement(){
        const a = document.createElement('a')
        a.setAttribute('href', this.url)
        a.setAttribute('data-link', this.id)
        a.setAttribute('target', 'blank')
        a.innerHTML = `<span>${this.title}</span><div>→</div>`
        a.style.backgroundColor = this.color
        return a
    }
    descriptionElement(){
        const description = document.createElement('div')
        description.setAttribute('data-description', this.id)
        description.setAttribute('class', 'description')

        const header = document.createElement('h1')
        header.classList.add('description-header')
        header.innerText = this.title

        const ul = document.createElement('ul')
        ul.classList.add('description-text')

        for(const topic of this.description){
            const li = document.createElement('li')
            li.innerText = topic
            ul.appendChild(li)
        }

        description.appendChild(header)
        description.appendChild(ul)

        return description
    }
}