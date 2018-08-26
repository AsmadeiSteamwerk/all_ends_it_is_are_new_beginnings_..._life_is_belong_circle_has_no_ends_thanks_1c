var Vue = require("vue");
var VueRouter = require("vue-router");
var VueResource = require("vue-resource");
var VueJwtMongo = require("vue-jwt-mongo");

Vue.use(VueResource);
Vue.use(VueJwtMongo.Client);

Vue.use(VueRouter);

var Register = require("./components/register.vue");

var Login = require("./components/login.vue");

var Feed = require("./components/feed.vue");

var router = new VueRouter();

router.map({
    "/register": {component: Register}, 
    "/login": {component: Login},
    "/feed": {component: Feed}
});

router.start(Vue.extend({}), "#app");