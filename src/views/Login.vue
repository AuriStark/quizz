<template>
   <div class="login">
       <v-app-bar class="appBar" dense >
           <v-toolbar-title class="appLogo"> QuiZZ </v-toolbar-title>
            <v-spacer></v-spacer>
             <v-btn class="joinGameBtn btn"> Join a game </v-btn>

            <v-dialog v-model="dialog" persistent max-width="500">

                <template v-slot:activator="{ on, attrs}">
                    <v-btn class="loginBtn btn" v-bind="attrs" v-on="on"> Log In </v-btn>
                </template>
                
                <LoginFormComponent/>

            </v-dialog>

        </v-app-bar>

        Login Page

        

   </div>
</template>

<script>
import LoginFormComponent from '../components/LoginFormComponent'

export default {
    name: 'LandingPage',
    data () {
      return {
        dialog: false,
      }
    },
    components:{
        LoginFormComponent,
    },

    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
    
    @import "../scss/variables";

    .appBar{
        background-color:$primary-color !important;

        .appLogo{
        color: white;
        font-size: 30px ;
        font-weight:bold;
        }
        .btn{
            margin: 8px;
            color: white;
            &:hover{
                transform: scale(1.12);
            }
        }
    }
    .joinGameBtn{
        background-color: $primary-dark !important;
    }
    .loginBtn {
        background-color: $primary-light !important;
    }
    button.googleBtn, button.facebookBtn{
        justify-content: center;
        height: 60px;
        width: 120px;
    }

    #nav {
    padding: 30px;

    }

</style>