import {block} from "../utils";
import {TextBlock, TitleBlock} from "./blocks";

export class SiteBar{
    constructor(selector, updateCallback) {
        this.$sel = document.querySelector(selector)
        this.update = updateCallback
        this.init()
    }
    init() {
        this.$sel.insertAdjacentHTML('afterbegin', this.template)
        this.$sel.addEventListener('submit', this.add.bind(this))
    }
    get template(){
        return [
            block('title'),
            block('text')
        ].join('')
    }
    add(event){
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        const newBlock = type === 'text'
            ? new TextBlock(value, {styles})
            : new TitleBlock(value, {styles})
        this.update(newBlock)
    }
}
