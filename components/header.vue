<style scoped>
h1 {

background-color: black;
color: cyan;

}

    </style>

    <template>
        <h1> {{ msg }}</h1>
    </template>

    <script>   
        module.exports = {
            data: function() {
                return {
                    msg: "Welcame!"
                }

            }


        }
        </script>