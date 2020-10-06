import{model} from "./model"
import {Site} from "./Classes/site"
import {SiteBar} from "./Classes/siteBar";
import './styles/style.css'

const site = new Site('#site')
site.render(model)

const siteBar = new SiteBar('#panel')