import{dev} from "./utils";

function title(block){
    return(dev.row(dev.col(`<h1>${block.value}</h1>`)))
}
function text(block){
    return(dev.row(dev.col(`<p>${block.value}</p>`)))
}
function columns(block){
    const html = block.value.map(item=>dev.col(item)).join('')
    return(dev.row(html))
}
function image(block){
    return(dev.row(`<img src="${block.value}">`))
}
export const templates = {title, text, columns, image}