class EventBus {
    on(eventName, fn) {
        return window.addEventListener(eventName, fn)
    }
    off(eventName, fn) {
        return window.removeEventListener(eventName, fn)
    }
    trigger(eventName) {
        let ev = new CustomEvent(eventName)
        return window.dispatchEvent(ev)
    }
}

export default EventBus