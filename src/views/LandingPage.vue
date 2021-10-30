<template>
    <div class="landingPage">

        <v-app-bar dense >
            <h1> Landing page</h1>
            <v-btn class="loginBtn white--text" >  Log In </v-btn>
        </v-app-bar>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            items:[
                {icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', title: 'photos', subtitle:'jan 9, 2014'}
            ]
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
