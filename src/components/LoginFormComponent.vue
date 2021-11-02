<template>
    <div class="loginForm">

      <v-card>
        <v-card-title class="text-h5 ">
            Welcome to Quizz
        </v-card-title>

        <v-card-text>
            Log in with Google or Facebook
        </v-card-text>

        <v-card-actions>
          <div class="d-flex flex-column">
            <v-btn class="googleBtn" color="secondary" @click="googleLogin" > Log In with Google </v-btn>
            <v-spacer></v-spacer>
            <VFacebookLogin class="button"
              app-id="655842325402664">
            </VFacebookLogin>          
          </div> 
        </v-card-actions>
      </v-card>


   <!--
    <v-form ref="form" v-model="valid" lazy-validation>
        
        <v-text-field 
            v-model="email" 
            :rules="emailRules" 
            label="E-mail" required>
        </v-text-field>  

        <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required>
        </v-checkbox>


    </v-form>

    -->
    
    </div>
</template>

<script>
import VFacebookLogin from 'vue-facebook-login-component'

export default {
    name: 'LoginFormComponent',
    components:{
        VFacebookLogin
    },
    methods: {
      googleLogin: function(){
        this.$gAuth.signIn().then((result) => {
          let userProfile = result.getBasicProfile()
          
          // print userData
          console.log(userProfile);
          this.$store.commit("changeUser", userProfile)
          this.$router.push('/home')
        }).catch((err) => {
          console.log("Error: ", err)
        });
      }
    }
}
</script>

<style lang="scss">

</style>