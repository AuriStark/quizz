<template>
    <div class="login">
        <v-app-bar class="appBar" dense >
            <v-toolbar-title  class="appLogo"> QuiZZ </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn class="joinGameBtn btn"> Join a game </v-btn>

            <v-dialog v-model="dialog" persistent max-width="500">

                <template v-slot:activator="{ on, attrs}">
                    <v-btn class="loginBtn btn" v-bind="attrs" v-on="on"> Log In </v-btn>
                </template>

                <v-card>
                    <v-card-title class="text-h5 ">
                        Welcome to Quizz
                    </v-card-title>
                    <v-card-text>
                        Log in with Google or Facebook
                    </v-card-text>
                    <v-card-actions>
                        <v-column>
                            <v-btn class="googleBtn" color="primary"> Log In with Google </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn class="facebookBtn"> Log In with Facebook </v-btn>
                        </v-column> 
                    </v-card-actions>
                </v-card>

            </v-dialog>
        </v-app-bar>

        Login Page
    </div>
</template>

<script>
export default {
    setup() {
        return{
            //
        }
    },
}
</script>

<style lang="scss">
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
}
</style>