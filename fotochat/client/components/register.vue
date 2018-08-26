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
<input type="password" class="input" placeholder="повторите пароль" v-model="reprease">
<button type="submit" class="btn btn-warning" v-on:click="register">Зарегистрироваться!</button>

</div>
</template>

<script>
module.exports = {
data: function() {
    return {
        username: '',
        password: '',
        reprease: ''
    };

},

methods: {
    register: function() {
        if(this.password !== this.reprease) {
            alert("Пароли не совпадают!");
            
        } else {
            var promise = this.$auth.register(this.username, this.password);
            var self = this;
            promise.then( function() {
                console.log("Yes!")
            });
        }
    }
}

}

</script>