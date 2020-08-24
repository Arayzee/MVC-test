import './app2.css'
import Model from "../base/Model"
import View from "../base/View"

const m = new Model({
    data: {
        index: parseInt(localStorage.getItem('index')) || 0
    },
    update(data) {
        Object.assign(this.data, data)
        this.trigger('m:updated')
        localStorage.setItem('index', this.data.index.toString())
    }
})

const init = (el) => {
    new View({
        el: el,
        data: m.data,
        html: (index) => {
            return `
                <div>
                    <div id="topbar">
                        <div class="${index === 0 ? 'selected' : ''}" data-index="0">PAGE 1</div>
                        <div class="${index === 1 ? 'selected' : ''}" data-index="1">PAGE 2</div>
                    </div>
                    <div id="view">
                        <div class="${index === 0 ? 'active' : ''}">This is page 1 !\nWelcome!</div>
                        <div class="${index === 1 ? 'active' : ''}">This is page 2 !\nNice to meet you!</div>
                    </div>
                </div>
            `
        },
        render() {
            this.el.innerHTML = ''
            this.el.append(this.createNode(this.html(this.data.index)))
        },
        events: {
            'click #topbar > div': 'switch'
        },
        switch(e) {
            console.log(e.target.dataset.index)
            m.update({index: parseInt(e.target.dataset.index)})
        }
    })
}

export default init