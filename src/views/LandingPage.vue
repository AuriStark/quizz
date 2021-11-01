<template>
    <div class="landingPage">

        <v-app-bar dense >
            <v-btn class="loginBtn white--text" >  Log In </v-btn>
        </v-app-bar>
        
        <LoginFormComponent/>

    </div>
</template>

<script>
import VFacebookLogin from 'vue-facebook-login-component'

export default {
    name: 'LandingPage',
    components:{
        VFacebookLogin
    },
    data() {
        return {
          //
        }
    }
}
</script>

<style lang="scss">
@import "../scss/variables";

.loginBtn {
    background-color: $primary-color !important;

    &:hover{
        transform: scale(1.12);
    }
}

#nav {
  padding: 30px;

}
</style>
