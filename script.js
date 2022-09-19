const app = Vue.createApp({
    data() {
        return {
            presentation: false,
            welcome:true,
           team:false,
           designPatterns:false,
           adapter:false,

        }
    },
    created() {
       
    },
    methods: {
        mostrarWelcome(e){
            console.log(e);
            this.welcome=true;
            this.presentation=false;
            this.team=false;
            this.designPatterns=false;
            this.adapter=false;

        },
        mostrarPresentation(e){
            console.log(e);
            this.welcome=false;
            this.presentation=true;
            this.team=false;
            this.designPatterns=false;
            this.adapter=false;

        },
        mostrarTeam(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=true;
            this.designPatterns=false;
            this.adapter=false;

        },
        mostrarDesignPatterns(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=false;
            this.designPatterns=true;
            this.adapter=false;
        },
        mostrarAdapter(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=false;
            this.designPatterns=false;
            this.adapter=true;
        } 
    },

})
let consol = app.mount("#app")

