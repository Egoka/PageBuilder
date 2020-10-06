import {block} from "../utils";

export class SiteBar{
    constructor(selector) {
        this.$sel = document.querySelector(selector)
        this.init()
    }
    init() {
        this.$sel.insertAdjacentHTML('afterbegin', this.template)
    }
    get template(){
        return [
            block('title'),
            block('text')
        ].join('')
    }

}
