Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  }
})

let data = {
    newService: {
        type : "",
        name: "",
        url: "",
        dataName: ""
    },
    showSuccessNotification : false,
    showErrorNotification : false,
    showEmptyMessageNotification : false,
    serviceToBuild : "",
    baseApiUrl : "https://angularservicebuilder.firebaseio.com/serviceList.json",
}; 

/**
 * Instancie un container vue
 * @type {Vue}
 */
let vm = new Vue({
    el: '#createService',
    data: data,
    methods: {
        /**
         * Crée un nouveau service 
         */
    addNewService(ref, clearforms) {
         let newServiceToPost = vm.newService;
            this.$http.post(vm.baseApiUrl, newServiceToPost).then(parseResponse = (resp) =>{
           if(resp.status === 200) {
            this.$refs[ref].close();
            vm.showSuccessNotification = true;
           }
         }, throwErrorException = (err) => {
            vm.showErrorNotification = true;
         }) 
        },
  
   openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    }
    }
    });


