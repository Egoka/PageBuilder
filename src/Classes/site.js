export class Site{
    constructor(selector) {
        this.$sel = document.querySelector(selector)
    }
    render(model){
        model.forEach(block=> {
            this.$sel.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}