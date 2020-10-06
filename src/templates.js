import{dev} from "./utils";

function title(block){
    const {tag='h1',styles} = block.options
    return dev.row(dev.col(`<${tag}>${block.value}</${tag}>`),dev.css(styles))
}
function text(block){
    return dev.row(dev.col(`<p>${block.value}</p>`), dev.css(block.options.styles))
}
function columns(block){
    const html = block.value.map(item=>dev.col(item)).join('')
    return dev.row(html, dev.css(block.options.styles))
}
function image(block){
    const {imageStyles:styl, styles} =block.options
    return dev.row(`<img src="${block.value}" style="${dev.css(styl)}">`, dev.css(styles))
}
export const templates = {title, text, columns, image}