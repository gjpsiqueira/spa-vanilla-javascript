import Route from './route.js'
import Navigator from './navigator.js'
import HomePage from './views/home.js'
import DashboardPage from './views/dashboard.js'
import SettingsPage from './views/settings.js'

const routes = [
    new Route('/#/home',HomePage,true),
    new Route('/#/dashboard',DashboardPage),
    new Route('/#/settings',SettingsPage)
]

document.addEventListener('DOMContentLoaded', () => {
    const links = [...document.querySelector('.nav').children]
    const navigator = new Navigator(routes,'root')

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            navigator.navigateTo(e.target.hash)
        })
    })    

})


