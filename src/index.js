import{model} from "./model"
import {Site} from "./Classes/site"
import {SiteBar} from "./Classes/siteBar";
import './styles/style.css'

const site = new Site('#site')
site.render(model)

const updateCallback = newBlock =>{
    model.push(newBlock)
    site.render(model)}
new SiteBar('#panel', updateCallback)