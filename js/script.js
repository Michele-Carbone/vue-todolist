const root = new Vue({

    el: '#root',
    data: {
        tasks: [
            'Creare una pagina html',
            'Creare una pagina css',
            'Creare una pagina js',
            'Inserire un immagine',
            'creare una barra nella quale e\' possibile aggiungere un nuovo elemento della lista',
            'Creare un secondo titolo in caso di fine lista',
            'Inserire una lista',
            'Creare una #root e aggiungere i vari elementi',
            'Ricordarsi di scrivere qualcosa nella lista',
            'Aggiungere qualche funzione per rendere piu\' dinamica la lista',
            'Verificare sempre ogni singola funzione per non sbagliarsi mai',
            'Depennare ogni obiettivo della lista che e\' stato fatto',
        ],

        newTask: '',
    },
    methods: {
        //ELIMINARE UN ELEMENTO
        deleteTask(index) {

            this.tasks.splice(index, 1);
        },


        addTask() { //aggiungere un nuovo elemento nella lista

            if (this.newTask.trim() !== '') {

                this.tasks = [...this.tasks, this.newTask];

            }
            this.newTask = '';

        },
    },


});
