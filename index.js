const model = [
    {type: 'title', value:'Hello World from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
        '1111',
        '2222',
        '3333'
        ]},
    {type:'image',value: './image/image.png'}
]
const $site = document.querySelector('#site')
model.forEach(block=> {
         if (block.type === 'title')  html = title(block)
    else if (block.type === 'text')   html = text(block)
    else if (block.type === 'columns')html = columns(block)
    else if (block.type === 'image')  html = image(block)
    $site.insertAdjacentHTML('beforeend', html)
})
