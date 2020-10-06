import image from './image/image.png'
export const model = [
    {type: 'title', value:'Hello World from JS',options:{
        tag:'h2',
        styles:{
            'background':'linear-gradient(to top, #dc3545, #a72886)',
            'color': '#ff2',
            'text-align':'center',
            'padding':'1.5rem'
        }
        }},
    {type: 'text', value: 'here we go with some text',options: {
        styles: {
            'background':'linear-gradient(to top, #7a86ff, #dc3545)',
            'padding':'1rem',
            'font-weight':'bold',
            'text-align':'center',
            'color': '#89ff22',
        }
        }},
    {type: 'columns', value: [
            '-f флаг используется для принудительного выполнения действия',
            '-m флаг используется, когда требуется ввести сообщение без открытия редактора',
            '-i флаг используется для включения интерактивная оболочки',
            '-p флаг используется для частичного добавления',
            '--ff флаг включает слияние перемоткой'
        ],options: {
        styles: {
            'background':'linear-gradient(to top, #dc3545, #7a86ff)',
            'padding':'2rem',
            'color': '#89ff22',
            'font-weight':'bold'
        }
        }},
    {type:'image',value: image, options: {
        styles: {
            'padding': '2rem 0',
            'display': 'flex',
            'justify-content':'center'
        },
        imageStyles:{
            'width':'800px',
            'height':'auto'
        }
        }}
]