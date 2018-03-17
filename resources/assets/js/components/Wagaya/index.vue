<template>
    <div>
        <b-jumbotron header="和が家100円メニューアプリ" lead="当月の１００円メニューが表示されます" ></b-jumbotron>
        <table class="table table-bordered">
            <thead class="thead-light">
                <tr>
                    <th scope="col">年月日</th>
                    <th scope="col">名前</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:style="{ 'background-color': item.color }">
                    <td>{{ item.ym + item.day + '日'}}</td>
                    <td>{{ item.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        data() {
            return {
                dateYM: Vue.moment().format('YYYY年M月'),
                config: {
                    format: 'YYYY年M月',
                    useCurrent: true,
                },
                items: []
            }
        },
        created() {
            this.handleSearch();
        },
        methods: {
            handleSearch: async function() {
                var vm = this;
                var dateYM = this.dateYM;
                await axios.get('https://makey-nodejs-applications.herokuapp.com/wagaya', {
                        params: {
                            ym: dateYM
                        },
                        headers: {
                            'Access-Control-Allow-Credentials': true
                        }
                    })
                    .then(function(response) {
                        vm.items = _.map(response.data, function(value) {
                            console.log('Today', value.ym + value.day === Vue.moment().format('YYYY年M月DD'));
                            if (value.ym + value.day === Vue.moment().format('YYYY年M月DD')) {
                                value.color = '#ffd68b';
                            } else {
                                value.color = '';
                            }
                            console.log('100Yen', value);
                            return value;
                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    }
</script>
