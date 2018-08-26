// var vm = new Vue({
// el: "#app",
// data: {
// number: 1
// },
// methods: {
// double: function(e) {
//     console.log(e);
//     this.number *= 2;
// }


// }
// })

// var vm = new Vue({
//     el: "#app",
//     data: {
//     list: ["take out hometask"],
//     thing: ""
//     },
//     methods: {
//         addItem: function(e) {

//             if (e.which == 13) {
//                 this.list.push(this.thing);
//                 this.thing = "";
//             }
//         },
//         removeItem: function(index) {
//             this.list.splice(index, 1);
//         }

    
//      }       
    
// })

// var vm = new Vue({
//     el: "#app",
//     data: {
//         numbers: ["1", "4"]
//     },
//     computed: {
// average: function() {
//     var sum = 0, n = this.numbers.length, i;
//     for(i = 0; i < n; ++i) {
// sum += Number(this.numbers[i]);
//     }
//     return sum/n;
// }

//     }     
    
// });

// var vm = new Vue({
//     el: "#app",
//     data: {
//         number: 0,
//         changesCount: 0
//     },
//     methods: {
//         increase: function() {

//             this.number += 1;
//         },

//         decrease: function() {

//             this.number -= 1;

//         }

//     }      
    
    
    
// });

// vm.$watch("number", function(newValue) {
// console.log(newValue);
// this.changesCount += 1;
// });

var vm = new Vue({
el: "#app",
data: {

visible: true

}

});