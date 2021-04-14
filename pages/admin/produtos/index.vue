<template>
  <div>
    <AdminNavbar />
    <h1 style="padding-top: 100px; padding-bottom: 50px; font-size: 16px; font-family: Comic Sans MS; text-align:center;">PAINEL ADMINISTRATIVO</h1>


    <!--<b-tabs v-model="activeTab" type="is-toggle" expanded>
        <b-tab-item label="Listar Produtos" icon="google-photos">

            <h1 style="padding-bottom: 50px; margin-top: 50px; text-align: center; font-size: 22px">Produtos</h1>
           <b-table :bordered="true" :data="data" :columns="columns"></b-table>
        </b-tab-item>
        <b-tab-item label="Cadastrar Produtos" icon="video">
         <section style="padding-left: 200px; padding-right: 200px;" class="container">
        <div class="block">
            <b-radio v-model="labelPosition"
                native-value="on-border">
                On Border
            </b-radio>
            <b-radio v-model="labelPosition"
                native-value="inside">
                Inside
            </b-radio>
        </div>

        <b-field label="Name" :label-position="labelPosition">
            <b-input value="Kevin Garvey"></b-input>
        </b-field>

        <b-field label="Email"
            :label-position="labelPosition"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            :label-position="labelPosition"
            type="is-success"
            message="This username is available">
            <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            :label-position="labelPosition"
            type="is-warning">
            <b-input value="123" type="password" maxlength="30"></b-input>
            <template #message>
                <div>Password is too short</div>
                <div>Password must have at least 8 characters</div>
            </template>
        </b-field>

        <b-field label="Subject"
            :label-position="labelPosition">
            <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
        </b-field>

        <b-field label="Message"
            :label-position="labelPosition">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>

        <b-field label="Find a JS framework" :label-position="labelPosition">
            <b-autocomplete
                rounded
                :data="['jQuery', 'Vue', 'React']"
                placeholder="e.g. jQuery"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>

        <b-field label="Select a date" :label-position="labelPosition">
            <b-datepicker
                placeholder="Click to select..."
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
        </b-field>

        <b-field label="Select datetime" :label-position="labelPosition">
            <b-datetimepicker
                rounded
                placeholder="Click to select..."
                icon="calendar-today"
                horizontal-time-picker>
            </b-datetimepicker>
        </b-field>

        <b-field label="Number!" :label-position="labelPosition">
            <b-numberinput laceholder="99" :min="95"></b-numberinput>
        </b-field>

        <b-field label="Add some tags" :label-position="labelPosition">
            <b-taginput
                :value="['My first tag', 'My second tag']"
                ellipsis
                icon="label"
                placeholder="Add a tag">
            </b-taginput>
        </b-field>

        <b-field label="Select time" :label-position="labelPosition">
            <b-timepicker
                rounded
                placeholder="Click to select..."
                icon="clock">
            </b-timepicker>
        </b-field>

        <hr>
        <p class="title is-6">Also works for grouped field and with addons.</p>

        <b-field label="Search..." :label-position="labelPosition" grouped>
            <b-input placeholder="Search..." type="search"></b-input>
            <p class="control">
                <b-button class="button is-primary">Search</b-button>
            </p>
        </b-field>

        <b-field label="Search..." :label-position="labelPosition">
            <b-input placeholder="Search..." type="search"></b-input>
            <p class="control">
                <b-button class="button is-primary">Search</b-button>
            </p>
        </b-field>
    </section>
        </b-tab-item>
    </b-tabs>-->
  </div>
</template>

<script>

import AdminNavbar from '@/components/AdminNavbar/AdminNavbar'

export default {
  components: {
    AdminNavbar
  },
          created() {
           this.$forceUpdate();
        },
        data() {
            return {          activeTab: 0,
                showBooks: false,
                labelPosition: 'on-border',
                data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
        },
        methods: {

        },

}
</script>

<style scoped>

</style>
