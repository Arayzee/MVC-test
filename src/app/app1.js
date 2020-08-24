import './app1.css'
import Model from "../base/Model"
import View from "../base/View"

const m = new Model({
    data: {
        n: parseFloat(localStorage.getItem('n')) || 100
    },
    update(data) {
        Object.assign(this.data, data)
        this.trigger('m:updated')
        localStorage.setItem('n', this.data.n.toString())
    }
})

const init = (el) => {
    new View({
        el: el,
        data: m.data,
        html: `
            <div>
                <div id="num">{{n}}</div>
                <div id="btnList">
                    <button id="add1">+1</button>
                    <button id="minus1">-1</button>
                    <button id="mul2">*2</button>
                    <button id="div2">÷2</button>
                </div>
            </div>
        `,
        render() {
            this.el.innerHTML = ''
            this.el.append(this.createNode(this.html.replace('{{n}}', this.data.n)))
        },
        events: {
            'click #add1': 'add1',
            'click #minus1': 'minus1',
            'click #mul2': 'mul2',
            'click #div2': 'div2'
        },
        add1() {
            m.update({n: m.data.n + 1})
            console.log('add')
        },
        minus1() {
            m.update({n: m.data.n - 1})
            console.log('minus')
        },
        mul2() {
            m.update({n: m.data.n * 2})
            console.log('mul')
        },
        div2() {
            m.update({n: m.data.n / 2})
            console.log('div')
        }
    })
}

export default init