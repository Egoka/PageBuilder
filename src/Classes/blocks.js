import {dev} from "../utils";

class Block{
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML(){
        throw new Error('Метод не реализован!')
    }
}
export class TitleBlock extends Block{
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const {tag='h1',styles} = this.options
        return dev.row(dev.col(`<${tag}>${this.value}</${tag}>`),dev.css(styles))
    }
}
export class TextBlock extends Block{
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        return dev.row(dev.col(`<p>${this.value}</p>`), dev.css(this.options.styles))
    }
}
export class ColumnsBlock extends Block{
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const html = this.value.map(item=>dev.col(item)).join('')
        return dev.row(html, dev.css(this.options.styles))
    }
}
export class ImageBlock extends Block{
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const {imageStyles:styl, styles} =this.options
        return dev.row(`<img src="${this.value}" style="${dev.css(styl)}">`, dev.css(styles))
    }
}