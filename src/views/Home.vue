<template>
  <div class="home">
    <h1> Home Page </h1>
    <p>
      Bienvenue {{userName}}
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
          loginBtnVisible(){
              return this.userInfos==null
          }
      },
}

</script>
