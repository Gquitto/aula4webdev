<template>
    <div class="container">
        <h6>Login</h6>
        <br>
        <form class="form-group"> <!--Login-->
            <label for="usernameInput">Username: </label>
            <input class="form-control" type="text" id="usernameInput">
            <br>
            <label for="passInput">Password: </label>
            <input class="form-control" type="password" id="passInput">
        </form>
        <hr>
        <form class="form-group"> <!--TExt area-->
            <label for="textArea">Escreve ai man</label>
            <br>
            <textarea class="form-control" id="textArea" cols="30" rows="10" :maxlength="maxsize" v-model="textarea"></textarea>
            <span>{{maxsize - textarea.length}}</span>
        </form>
        <hr>
        <form class="form-group"> <!--Select-->
            <select class="form-control">
                <option v-for="(item, j) in items" :key="j">{{item}}</option>
            </select>
        </form>
        <hr>
        <form class="form-group" v-for="(item, i) in items" :key="i">
            <input type="checkbox" :value="item" v-model="checkboxResult">{{item}}
        </form>
        <hr>
        <form class="form-group" v-for="(item, l) in items" :key="l">
            <input type="radio" :value="item" v-model="radioResult">{{item}}
        </form>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            maxsize: 140,
            textarea: '',
            items: ['Batata', 'Cenoura', 'Lorem', 'Ultimo item', 'MAtheus'],
            checkboxResult: [], 
            radioResult: [],
        }
    }
    
}
</script>

<style>

</style>