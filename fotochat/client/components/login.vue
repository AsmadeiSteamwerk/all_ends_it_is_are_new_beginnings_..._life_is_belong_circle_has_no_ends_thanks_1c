<style scoped>
        .container {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
        }
        .input{
            border: 2px solid black;
            border-radius: 5px;
        }
</style> 


<template>
<div class="container">

<input type="text" class="input" placeholder="логин" v-model="username">
<input type="password" class="input" placeholder="пароль" v-model="password">
<button type="submit" class="btn btn-primary" v-on:click="login">Войти!</button>

</div>
</template>

<script>
module.exports = {
data: function() {
    return {
        username: '',
        password: ''
    };

},

methods: {
login: function() {

    this.$auth.logIn(this.username, this.password)
.then(function(response) {
    console.log("Yes!");
this.$router.go("/feed");
}).catch(function(response){
    console.log("No!");
    alert("Пользователь не найден! Проверьте логин и/или пароль");
    console.log(response);
});
}
}

}

</script>