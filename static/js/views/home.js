export default class HomePage {

    constructor() {
        document.title = 'Home'
    }

    getHtml() {
        return `
            <h1>Home</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officiis quae. Omnis ducimus aut, alias facere officia minus ab laudantium? Eligendi earum repudiandae delectus obcaecati fugit non accusamus perferendis alias?
            </p>
        `
    }
}

