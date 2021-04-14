<template>
  <div>
    <div class="columns is-mobile">
      <div class="column">
        <AdminNavbar />
      <h1 style="padding-top: 60px; font-size: 16px; font-family: Comic Sans MS; text-align:center;">PAINEL ADMINISTRATIVO</h1>
      <!--<apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>

         <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>-->

    </div>
  </div>
  <div>
  <div class="columns">
    <div class="column is-one-fifth">
      <h1 style="padding-bottom: 10px; font-size: 16px; text-align:center;">
        <b-icon
            style="color: grey"
            icon="user"
            size="is-small"
          /> Últimos clientes</h1>
      <b-table
            :data="isEmpty ? [] : data"
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :loading="isLoading"
            :focusable="isFocusable"
            :mobile-cards="hasMobileCards">

            <b-table-column field="id" label="ID" width="40" :td-attrs="columnTdAttrs" numeric v-slot="props">
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="first_name" label="First Name" :td-attrs="columnTdAttrs" v-slot="props">
                {{ props.row.first_name }}
            </b-table-column>

            <b-table-column field="last_name" label="Last Name" :td-attrs="columnTdAttrs" v-slot="props">
                {{ props.row.last_name }}
            </b-table-column>

            <b-table-column field="date" label="Date" :th-attrs="dateThAttrs" :td-attrs="columnTdAttrs" centered v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </span>
            </b-table-column>

           <!-- <b-table-column label="Gender" :td-attrs="columnTdAttrs" v-slot="props">
                <span>
                    <b-icon
                        v-if="props.row.id !== 'Total'"
                        pack="fas"
                        :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                    </b-icon>
                    {{ props.row.gender }}
                </span>
            </b-table-column>-->

            <template #empty>
                <div class="has-text-centered">No records</div>
            </template>

        </b-table>


    </div>
    <div class="column">


<div class="column">
    <div style="background-color: rgba(242, 241, 239, 1) !important;" class="card">
      <div class="card-content">
        <div class="content has-text-centered">
          <b-icon
          style="color: grey"
            icon="user"
            size="is-large"
          />
          asd
          s
          das
          das
          das
          as
          das
          das
          d
          asdasd
          sad
          asdsa
          sa
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
      </div>
    </div>
  </div>

    </div>
    <div class="column is-one-fifth">
      <h1 style="padding-bottom: 10px; font-size: 16px; text-align:center;">
        <b-icon
            style="color: green"
            icon="money-bill-wave"
            size="is-small"
          /> Últimos pedidos</h1>
      <Requests />
    </div>
  </div>
</div>
<Footer/>
  </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar/AdminNavbar'
import Requests from '@/components/Requests/Requests'
import Footer from '@/components/Footer/Footer'

export default {
  components: {
    AdminNavbar, Requests, Footer
  },
  data: function() {
    return {
      isEmpty: false,
                isBordered: false,
                isStriped: true,
                isNarrowed: false,
                isHoverable: true,
                isFocusable: true,
                isLoading: false,
                hasMobileCards: true,
      data: [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53'},
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28'},
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46'},
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38'},
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53'},
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28'},
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46'},
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38'},
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38'},
            ],
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
       chartOptions: {
            chart: {
              type: 'area',
              stacked: false,
              height: 350,
              zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
              },
              toolbar: {
                autoSelected: 'zoom'
              }
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
            },
            title: {
              text: 'Stock Price Movement',
              align: 'left'
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
              },
            },
            yaxis: {
              labels: {
                formatter: function (val) {
                  return (val / 1000000).toFixed(0);
                },
              },
              title: {
                text: 'Price'
              },
            },
            xaxis: {
              type: 'datetime',
            },
            tooltip: {
              shared: false,
              y: {
                formatter: function (val) {
                  return (val / 1000000).toFixed(0)
                }
              }
            }
          },
       chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          },
    }
  }
}
</script>

<style scoped>
.tabs li.is-active a{
  text-decoration: none;
}
</style>
