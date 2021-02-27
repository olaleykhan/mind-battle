const app = Vue.createApp({
    data(){
        return{
            creator:"Alaf Consult",
            monsterHealth: 100,
            playerHealth:100,
        }
    },
    methods:{
        attackMonster(){
            const value= Math.floor(Math.random() * (11 - 5) + 5);
            this.monsterHealth-=value;
            setTimeout(()=>{
                this.attackPlayer();
            },500)
            console.log(this.monsterHealth);
        },
        attackPlayer(){
            const value= Math.floor(Math.random() * (11 - 5) + 5);
            this.playerHealth-=value;
            
        }
    }
})


app.mount("#root");