import image from './image/image.png'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from "./Classes/blocks";

export const model = [
    new TitleBlock( 'Hello World from JS', {
        tag:'h2',
        styles:{
            'background':'linear-gradient(to top, #dc3545, #a72886)',
            'color': '#ff2',
            'text-align':'center',
            'padding':'1.5rem'
        }}),
    new TextBlock('here we go with some text', {
        styles: {
            'background':'linear-gradient(to top, #7a86ff, #dc3545)',
            'padding':'1rem',
            'font-weight':'bold',
            'text-align':'center',
            'color': '#89ff22',
        }
    }),
    new ColumnsBlock([
        '-f флаг используется для принудительного выполнения действия',
        '-m флаг используется, когда требуется ввести сообщение без открытия редактора',
        '-i флаг используется для включения интерактивная оболочки',
        '-p флаг используется для частичного добавления',
        '--ff флаг включает слияние перемоткой'
    ], {
        styles: {
            'background':'linear-gradient(to top, #dc3545, #7a86ff)',
            'padding':'2rem',
            'color': '#89ff22',
            'font-weight':'bold'
        }
    }),
    new ImageBlock(image, {
        styles: {
            'padding': '2rem 0',
            'display': 'flex',
            'justify-content':'center'
        },
        imageStyles:{
            'width':'800px',
            'height':'auto'
        }
    })
]