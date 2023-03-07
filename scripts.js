items = []

const handleToDoList = {
    data() {
        return{
            items: window.items,
            newItem: {}
        }
    },
    methods:{
        addItem: function(){
            if(this.newItem.name){
                this.items.push(this.newItem);
                this.newItem = {};
                localStorage.setItem("items", JSON.stringify(this.items));
            }
            else{
                alert("Preencher todos os campos!")
            }
        },
        toggleDone: function(item){
            item.done = !item.done;
            localStorage.setItem("items", JSON.stringify(this.items));
        },
        clear: function() {
            this.items = [];
            localStorage.clear("items");
        }
    },
    created() {
        this.items = localStorage.getItem("items") ?  JSON.parse(localStorage.getItem("items")) : this.items;
    },
}

Vue.createApp(handleToDoList).mount('#app');