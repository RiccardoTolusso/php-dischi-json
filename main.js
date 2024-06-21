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
                this.diskInfo = response.data;
            })
        },
        closeDiskInfo(){
            this.diskInfo = null;
        }
    },
    created(){
        console.log("creando app")
        axios.get(this.apiUrl).then(response => {
            this.disks = response.data
        })
    }
}).mount("#app")