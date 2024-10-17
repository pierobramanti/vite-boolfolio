import { reactive } from "vue";

export const store = reactive({
    url: 'http://127.0.0.1:8000/api',

    menu: [
        {
            name: 'homepage',
            label: 'home'
        },
        {
            name: 'portfolio',
            label: 'Portfolio'
        },
        {
            name: 'about',
            label: 'About me'
        }
    ]
})