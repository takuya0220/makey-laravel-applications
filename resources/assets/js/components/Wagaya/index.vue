<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    検索してね
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="inputYM">年月</label>
                        <date-picker v-model="dateYM" :config="config"></date-picker>
                    </div>
                    <button v-on:click="handleSearch" class="btn btn-primary">検索</button>
                </div>
            </div>
        </div>
    </div>
    <br />
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">年月日</th>
                                <th scope="col">名前</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items">
                                <td>{{ item.ym + item.day + '日'}}</td>
                                <td>{{ item.name }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'

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
                    vm.items = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
}
</script>
