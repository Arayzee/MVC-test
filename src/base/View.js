import EventBus from "./EventBus"

class View extends EventBus {
    constructor(options) {
        super();
        Object.assign(this, options)
        this.el = document.querySelector(this.el)
        this.render(this.data)
        this.autoBindEvents()
        this.on('m:updated', () => {
            this.render(this.data)
        })
    }
    autoBindEvents() {
        for (let key in this.events) {
            let value = this[this.events[key]]
            let index = key.indexOf(' ')
            let part1 = key.slice(0, index)
            let part2 = key.slice(index + 1)
            this.el.addEventListener(part1, (e) => {
                Array.from(document.querySelectorAll(part2)).indexOf(e.target) !== -1 && value(e)
            })
        }
    }
    createNode(html) {
        const wrap = document.createElement('template')
        wrap.innerHTML = html
        return wrap.content.firstElementChild
    }
}

export default View