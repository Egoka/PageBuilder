import {block} from "../utils";

export class SiteBar{
    constructor(selector) {
        this.$sel = document.querySelector(selector)
        this.init()
    }
    init() {
        this.$sel.insertAdjacentHTML('afterbegin', this.template)
        this.$sel.addEventListener('submit', this.add)
    }
    get template(){
        return [
            block('title'),
            block('text')
        ].join('')
    }
    add(event){
        event.preventDefault()
    }
}
