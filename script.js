const app = Vue.createApp({
    data() {
        return {
            presentation: false,
            welcome:true,
            team:false,
            designPatterns:false,
            adapter:false,
            bridge:false,
            composite:false,
            decorator:false,
            facade:false,
            flyweight:false,
            proxy:false,
            form:false,

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
            this.bridge=false;
            this.composite=false,
            this.decorator=false,
            this.facade=false,
            this.flyweight=false,
            this.proxy=false,
            this.form=false

        },
        mostrarPresentation(e){
            console.log(e);
            this.welcome=false;
            this.presentation=true;
            this.team=false;
            this.designPatterns=false;
            this.adapter=false;
            this.bridge=false;
            this.composite=false,
            this.decorator=false,
            this.facade=false,
            this.flyweight=false,
            this.proxy=false,
            this.form=false
        },
        mostrarTeam(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=true;
            this.designPatterns=false;
            this.adapter=false;
            this.bridge=false;
            this.composite=false,
            this.decorator=false,
            this.facade=false,
            this.flyweight=false,
            this.proxy=false,
            this.form=false

        },
        mostrarDesignPatterns(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=false;
            this.designPatterns=true;
            this.adapter=false;
            this.bridge=false;
            this.composite=false,
            this.decorator=false,
            this.facade=false,
            this.flyweight=false,
            this.proxy=false,
            this.form=false
        },
        mostrarAdapter(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=false;
            this.designPatterns=false;
            this.adapter=true;
            this.bridge=false;
            this.composite=false,
            this.decorator=false,
            this.facade=false,
            this.flyweight=false,
            this.proxy=false,
            this.form=false
        },
        mostrarBridge(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=false;
            this.designPatterns=false;
            this.adapter=false;
            this.bridge=true;
            this.composite=false,
            this.decorator=false,
            this.facade=false,
            this.flyweight=false,
            this.proxy=false,
            this.form=false
        },
        mostrarForm(e){
            console.log(e);
            this.welcome=false;
            this.presentation=false;
            this.team=false;
            this.designPatterns=false;
            this.adapter=false;
            this.bridge=false;
            this.composite=false,
            this.decorator=false,
            this.facade=false,
            this.flyweight=false,
            this.proxy=false,
            this.form=true
        }
    },

})
let consol = app.mount("#app")

