<script setup>
import axios from 'axios';
import { ref, onMounted, reactive } from 'vue';
const users = ref([]);
const form = reactive({
    name: '',
    email: '',
    password: '',
});
const getUsers = () => {
    axios.get('/api/users')
        .then((response) => {
            users.value = response.data;
        })
}
const createUser = () => {
    axios.post('/api/users', form)
    .then((response) => {
        form.name = '';
        form.email = '';
        form.password = '';
        users.value.unshift(response.data);
    });
};
onMounted(() => {
    getUsers();
});
</script>
<template>
    <div>
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Users</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Users</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="container-fluid">
                <div class="card-body">
                    <!-- Trigger the modal with a button -->
                    <button type="button" class="btn btn-primary btn-lg mb-3" data-toggle="modal" data-target="#addUser">Add New User</button>
                    <!-- Modal -->
                    <div class="modal fade" id="addUser" role="dialog">
                        <div class="modal-dialog">
                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Add New User</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input v-model="form.name" type="text" class="form-control" id="name">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input v-model="form.email" type="email" class="form-control" id="email">
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Password</label>
                                        <input v-model="form.password" type="password" class="form-control" id="pwd">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button @click="createUser" type="button" class="btn btn-primary" data-dismiss="modal">Save</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- Modal end -->
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th style="width: 10px;">#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Registered Date</th>
                                <th>Role</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="user.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
