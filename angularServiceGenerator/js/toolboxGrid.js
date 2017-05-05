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
        dataName: "",
    },
    showSuccessNotification : false,
    showErrorNotification : false,
    showEmptyMessageNotification : false,
    serviceList : [],
    baseApiUrl : "https://angularservicebuilder.firebaseio.com/serviceList.json",
}; 

/**
 * Instancie un container vue
 * @type {Vue}
 */
let vm = new Vue({
    el: '#file-list',
    data: data,
    methods: {
        /**
         * Récupere la liste des services /GET
         */
         getAllGetServices: function() {
           this.$http.get(vm.baseApiUrl).then(parseGetResponse = (resp) => {
            vm.serviceList = resp.data;
           }, showErrorException = (err) => {
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
  
  vm.getAllGetServices();


