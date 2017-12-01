import demo from './demo.vue'

const Demo = {
    install (Vue) {
        let constructor = Vue.extend(demo)
        let instance = null
        Vue.prototype.$demo = (options) => {
            if (instance) {
                instance.$destroy(true)
            }
            instance = new constructor({
                el: document.createElement('div'),
                data: options
            })
            document.body.appendChild(instance.$el)
        }
    }
}

export default Demo
