<template>
  <div class="home">

    <v-app-bar class="appBar"  dense >
       <v-toolbar-title class="appLogo"> QuiZZ </v-toolbar-title>

      <v-btn large >
       <v-icon>mdi-home</v-icon> 
        <h4> Home </h4>
      </v-btn>
      <v-btn >
        <v-icon>mdi-history</v-icon> Activity
      </v-btn>

      <v-btn>
        <v-icon>mdi-account-multiple</v-icon> Classes
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon color="white">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>

    <h1> Home Page </h1>
    <p>
      Bienvenue <br>
        Name : {{userName}} <br>
        E-Mail : {{userMail}} <br>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
    
    }
  },
  components:{
  },
  computed: {
          userInfos: function(){
              return this.$store.state.user
          },
          userName(){
              if(this.userInfos){
                  return this.userInfos.IU
              }
              return 'Nobody'
          },  
          userMail(){
            if(this.userInfos){
                return this.userInfos.Xt
            }
            return 'NoMail'
          },
          loginBtnVisible(){
              return this.userInfos==null
          }
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
