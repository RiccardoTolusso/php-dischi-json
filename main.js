const { createApp } = Vue;

createApp({
    data(){
        return{
            disks: []
        }
    },
    created(){
        console.log("creando app")
        axios.get("script.php").then(response => {
            this.disks = response.data
        })
    }
}).mount("#app")