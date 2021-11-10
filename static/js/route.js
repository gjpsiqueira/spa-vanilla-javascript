import { PATTERN } from './constants.js'
export default class Route {
   
    constructor(path, view, index = false) {
        this.path = path;
        this.view = view;
        this.index = index     
    }

    isActive(hasPath) {
        return this.path.replace(PATTERN,'') == hasPath.replace(PATTERN,'')
    }
}