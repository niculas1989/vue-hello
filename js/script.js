console.log('Vue ok', Vue);

const root = new Vue({
    el: '#root',
    data: {
        message: 'Hello Word!',
        img: '',
        textClass: 'text-red',
        userText: '',
    },
    methods: {
        saluta() {
            alert('Ciao!');
        },
        changeColor() {
            this.textClass = 'text-green';
        },
        toggleClass() {
            if (this.textClass === 'text-red') {
                this.textClass = 'text-green';
            } else {
                this.textClass = 'text-red';
            }
        }
    }
});