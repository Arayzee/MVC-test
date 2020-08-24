import './app4.css'
import View from "../base/View"


const init = (el) => {
    new View({
        el: el,
        data: {},
        html: `
            <div>
                <div id="circle"></div>
            </div>
        `,
        render() {
            this.el.innerHTML = ''
            this.el.append(this.createNode(this.html))
        }
    })
}

export default init