const { createApp } = Vue;

createApp({
    data(){
        return{
            disks: [],
            diskInfo: null,
            editedDiskInfo: null,

            active_error: null,

            editActive: false,

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
                this.editedDiskInfo = this.diskInfo;
            })
        },
        closeDiskInfo(){
            if (this.diskInfo !== this.editedDiskInfo){
                active_error = "save";
            }
            //TODO: prevent reset and ask if they want to save changes
            this.diskInfo = null;
            this.editedDiskInfo = null;
            this.editActive = false;
        },
        updateDisk(){
            data = {
                mode: "update",
                disk: this.editedDiskInfo
            }
            axios.post(this.apiUrl, data, {
                headers: { 'Content-type' : 'multipart/form-data'}
            })
            
            .then(response => {
                this.diskInfo = this.editedDiskInfo;
                this.disks = response.data;
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