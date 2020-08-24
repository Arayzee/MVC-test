import './app3.css'
import Model from "../base/Model"
import View from "../base/View"

const m = new Model({
    data: {
        flag: localStorage.getItem('flag') || 'no'
    },
    update(data) {
        Object.assign(this.data, data)
        localStorage.setItem('flag', this.data.flag)
    }
})

const init = (el) => {
    new View({
        el: el,
        data: m.data,
        html: (flag) => {
            return `
                <div>
                    <div class="${flag === 'no' ? '' : 'moved'}" id="rect"></div>
                </div>
            `
        },
        render() {
            this.el.innerHTML = ''
            this.el.append(this.createNode(this.html(this.data.flag)))
        },
        events: {
            'click #rect': 'move'
        },
        move() {
            m.update({flag: m.data.flag === 'no' ? 'yes' : 'no'})
            m.data.flag === 'no' ? document.querySelector('#rect').className = '' : document.querySelector('#rect').className = 'moved'
        }
    })
}

export default init