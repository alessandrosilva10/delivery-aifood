<template>
  <div>
    <div class="columns is-mobile">
      <div class="column">
        <AdminNavbar />

      <h1 style="padding-top: 100px; padding-bottom: 50px; font-size: 16px; font-family: Comic Sans MS; text-align:center;">PAINEL ADMINISTRATIVO</h1>
      <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>

         <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>

    </div>
  </div>
  <div>

  <div class="columns">
  <div class="column is-2">
    <br><br><br><br>
    teste <br><br><br><br>
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
       <!-- <div>

      <md-icon class="fa fa-plus"></md-icon>
      <md-icon class="fa fa-thumbs-up"></md-icon>
      <md-icon class="fa fa-shield"></md-icon>
      <md-icon class="fa fa-home"></md-icon>
    </div>-->
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
</div>
</div>

            </div>
  </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar/AdminNavbar'

export default {
  components: {
    AdminNavbar
  },
  data: function() {
    return {
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

<style>

</style>
