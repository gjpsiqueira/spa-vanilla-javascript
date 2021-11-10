export default class Navigator {

    constructor(routes, rootElement) {
        this.routes = routes
        this.rootElement = document.getElementById(rootElement)
        this.initializePage()
       
    }

    initializePage() {
        console.log('initialize ')
        for(let route in this.routes) {
            if(this.routes[route].index) 
                this.navigateTo(this.routes[route].path)
                
        }
    }

    navigateTo(url) {
        history.pushState(null,null,url)

        for(let route in this.routes) {
            if(this.routes[route].isActive(url)) {
                const view = new this.routes[route].view()
                this.rootElement.innerHTML = view.getHtml()
            }
        }
    }
}