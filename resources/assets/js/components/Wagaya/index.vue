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
                        <input type="text" v-model="searchYM" class="form-control" id="inputYM" aria-describedby="ymHelp" placeholder="年月を入力してください">
                        <small id="ymHelp" class="form-text text-muted">年月を入力してください</small>
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
export default {
    data() {
        return {
            items: [{
                ym: '2018年3月',
                day: '3',
                name: 'テスト'
            }],
            searchYM: null
        }
    },
    created() {
        // view が作られた時にデータを取得し、
        // そのデータは既に監視されています
        this.fetchData()
    },
    watch: {
        // ルートが変更されたらこのメソッドを再び呼び出します
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {

        },
        handleSearch: function() {
            axios.get('http://localhost:3000/wagaya', {
                    params: {
                        ID: this.searchYM
                    }
                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
            console.log(this, this.searchYM);
        }
    }
}
</script>
