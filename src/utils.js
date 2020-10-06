function row(content, styles=''){
    return(`<div class="row" style="${styles}">${content}</div>`)
}
function col(content){
    return(`<div class="col-sm">${content}</div>`)
}
function css(styles={}){
    const toString = key =>`${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';')
}
export const dev = {row, col, css}