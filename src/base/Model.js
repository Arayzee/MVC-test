import EventBus from "./EventBus";

class Model extends  EventBus {
    constructor(options) {
        super();
        Object.assign(this, options)
    }
    update() {
        console && console.error() && console.error('你还没有实现update')
    }
}

export default Model
