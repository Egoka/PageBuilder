import{model} from "./model"
import{templates} from "./templates"
import './styles/style.css'

const $site = document.querySelector('#site')
model.forEach(block=> {
    const textHTML = templates[block.type]
    if (textHTML) {
        $site.insertAdjacentHTML('beforeend', textHTML(block))
    }
})
