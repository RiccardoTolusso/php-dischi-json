const { createApp } = Vue;

createApp({
    data(){
        return{
            disks: [],
            diskInfo: null,

            apiUrl: "script.php",
        }
    },
    methods: {
        getDiskInfo(id){
            axios.get(
                this.apiUrl, {
                    params: {
                        id: id,
                        mode: "search",
                    }
                }
            ).then(response => {
                console.log(response)
            })
        }
    },
    created(){
        console.log("creando app")
        axios.get(this.apiUrl).then(response => {
            this.disks = response.data
        })
    }
}).mount("#app")