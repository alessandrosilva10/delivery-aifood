<template>
<div class="wrapper">
  <div class="">
    <aside class="sidebar">
      <nav class="menu">
        <div class="menu-category">
          <header class="category-header">
              <b-icon
              icon="view-dashboard"
              size="is-small" /> Dashboard</header>
              <ul class="menu-list">
              <a>
                <b-icon
                icon="rocket"
                size="is-small" /> Static
              </a>
              <a>
                <b-icon
                icon="rocket"
                size="is-small" /> Static
              </a>
          </ul>
        </div>
        <div class="menu-category">
          <header class="category-header"><b-icon
              icon="view-dashboard"
              size="is-small" /> Elements</header>
          <ul class="menu-list">
              <a>
                <b-icon
                icon="rocket"
                size="is-small" /> Static
              </a>
              <a>
                <b-icon
                icon="rocket"
                size="is-small" /> Static
              </a>
              <a>
                <b-icon
                icon="rocket"
                size="is-small" /> Static
              </a>
              <a>
                <b-icon
                icon="rocket"
                size="is-small" /> Static
              </a>
              <a>
                <b-icon
                icon="rocket"
                size="is-small" /> Static
              </a>
              <a>
                <b-icon
                icon="rocket"
                size="is-small" /> Static
              </a>
          </ul>
        </div>
        <div class="menu-category">
          <header class="category-header">Components</header>
          <ul class="menu-list">
            <li><a>Panels</a></li>
            <li><a>Breadcrumb</a></li>
            <li><a>Card</a></li>
            <li><a>Dropdown</a></li>
            <li><a>Menu</a></li>
            <li><a>Message</a></li>
            <li><a>Modal</a></li>
            <li><a>Navbar</a></li>
            <li><a>Pagination</a></li>
            <li><a>Panel</a></li>
            <li><a>Tabs</a></li>
          </ul>
        </div>
        <div class="menu-category">
          <header class="category-header">Pages</header>
          <ul class="menu-list">
            <li><a>Login</a></li>
            <li><a>Logout</a></li>
            <li><a>Page not found</a></li>
          </ul>
        </div>
      </nav>
    </aside>

    <main class="main">

<div class="container">
<div class="columns is-mobile">
    <div class="column">
    <!--<chart :width="400" :height="400" :type="'pie'" :data="data" :options="options"></chart>-->
  </div>
    <div class="column">
    <!--<chart :width="400" :height="400" :type="'pie'" :data="data" :options="options"></chart>-->
  </div>
</div>

<div class="columns is-mobile">
    <div class="column">
    <!--<chart :width="400" :height="400" :type="'pie'" :data="data" :options="options"></chart>-->
  </div>
    <div class="column">
    <!--<chart :width="400" :height="400" :type="'pie'" :data="data" :options="options"></chart>-->
  </div>
</div>

  </div>

          <!--<header class="is-clearfix">

        <div class="cats is-pulled-right has-text-right">
          <small>Bulma Theme<br>Dashboard<br> <span class="has-text-weight-bold has-text-white">v.0.1</span></small>
        </div>
        <div>
          <h2>Dashboard</h2>
          <small>Dashboard sdff sdfdsfdsf cvfvxgfd</small>
        </div>
        <hr>
      </header>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">329</p>
            <p class="subtitle">Total Visits</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">+20 %</p>
            <p class="subtitle">Total Page Views</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">201</p>
            <p class="subtitle">Unique Visitor</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">12 %</p>
            <p class="subtitle">Purchases</p>
          </article>
        </div>
      </div>

      <header class="is-clearfix">
        <div class="cats is-pulled-right has-text-right">
          <small>Bulma Theme<br>Dashboard<br> <span class="has-text-weight-bold has-text-white">v.0.1</span></small>
        </div>
        <div>
          <h2>Bulma Boxes</h2>
          <small>Dashboard sdff sdfdsfdsf cvfvxgfd</small>
        </div>
        <hr>
      </header>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box transparent">
            <p class="title">329</p>
            <p class="subtitle">Total Visits</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">+20 %</p>
            <p class="subtitle">Total Page Views</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">201</p>
            <p class="subtitle">Unique Visitor</p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box accent">
            <p class="title">-12 %</p>
            <p class="subtitle">Purchases</p>
          </article>
        </div>
      </div>

      <header class="is-clearfix">
        <div class="cats is-pulled-right has-text-right">
          <small>Dashboard Theme<br>Bulma Elements<br> <span class="has-text-weight-bold has-text-white">v.7.2</span></small>
        </div>
        <div>
          <h2>Bulma Elements</h2>
          <small>Bulma Elements are essential interface elements<br/> that only require a single CSS class.</small>
        </div>
        <hr>
      </header>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div>
              <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><a href="#">Bulma</a></li>
                  <li><a href="#">Components</a></li>
                  <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
                </ul>
              </nav>
              <div class="content">
                <p>A simple breadcrumb component to improve your navigation experience.</p>
              </div>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="tabs is-centered">
              <ul>
                <li><a>Elements</a></li>
                <li class="is-active"><a>Components</a></li>
                <li><a>Widgets</a></li>
                <li><a>Tiles</a></li>
              </ul>
            </div>
            <div class="content">
              <p>Simple responsive horizontal navigation tabs, with different styles.</p>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">

        <div class="tile is-parent">
          <article class="tile is-child box">
            <nav class="pagination" role="navigation" aria-label="pagination">
              <a class="pagination-previous">Previous</a>
              <a class="pagination-next">Next page</a>
              <ul class="pagination-list">
                <li>
                  <a class="pagination-link" aria-label="Goto page 1">1</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 45">45</a>
                </li>
                <li>
                  <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 47">47</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 86">86</a>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </div>

      <header class="is-clearfix">
        <div class="cats is-pulled-right has-text-right">
          <small>Bulma Theme<br>Dashboard<br> <span class="has-text-weight-bold has-text-white">v.0.1</span></small>
        </div>
        <div>
          <h2>Custom Stat Cards</h2>
          <small>Custom stat cards to easily display large numbers, <br/>great for any kind of simple metrics and dashboard content.</small>
        </div>
        <hr>
      </header>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box transparent">
            <div class="statcard">
              <h3 class="statcard-number">28,745</h3>
              <span class="statcard-desc">Page views</span>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box transparent">
            <div class="statcard">
              <h3 class="statcard-number">
                72,134
                <small class="delta-indicator delta-positive">5%</small>
              </h3>
              <span class="statcard-desc">Page views</span>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="statcard">
              <h3 class="statcard-number">12,938</h3>
              <span class="statcard-desc">Page views</span>
            </div>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box accent">
            <div class="statcard">
              <h3 class="statcard-number">12,938</h3>
              <span class="statcard-desc">Page views</span>
            </div>
          </article>
        </div>
      </div>
-->
    </main>
  </div>
</div>
</template>

<script>
//import Chart from 'vue-bulma-chartjs'

export default {
  components: {
   // Chart
  },
  data() {
    return {
      expandOnHover: false,
      mobile: "reduce",
      reduce: false,
      /* data: {
        labels: ['Sleeping', 'Designing', 'Coding', 'Cycling'],
          datasets: [{
          data: [20, 40, 5, 35],
          backgroundColor: [
            '#1fc8db',
            '#fce473',
            '#42afe3',
            '#ed6c63',
            '#97cd76'
          ]
        }]
      },
      options: {
        segmentShowStroke: false,
        maintainAspectRatio: false,
      }*/
    };
  }
};
</script>

<style lang="scss" scoped>
$font-color: #ffffff;
$font-dark-color: #ffffff;
$font-darker-color: #5b646d;
$highlight-color: rgb(60, 179, 113);
$main-color: rgb(60, 179, 113);

$light-color: lighten($main-color, 3%);
$dark-color: darken($main-color, 3%);
$lighter-color: lighten($main-color, 6%);
$darker-color: darken($main-color, 6%);

$gradient-color-start: $light-color;
$gradient-color-end: $dark-color;

$sidebar-width: 13rem;
$header-height: 3.25rem;
$padding: 2rem;

html {
  overflow-y: auto;
}

body {
  color: $font-color;
}

.sidebar {
  padding-left: calc(#{$padding} - 0.75rem);
  padding-right: calc(#{$padding} - 0.75rem);
  position: absolute;
  .category-header {
    padding: 0.5em 0.75em;
  }
  .menu {
    position: fixed;
    width: calc(#{$sidebar-width} - 2.5rem);
    max-width: inherit;
  }
  .menu-list a {
    font-size: 0.875rem;
    line-height: 24px;
    color: $font-dark-color;
  }

  .menu-list a:hover {
    font-size: 0.875rem;
    line-height: 24px;
    color: rgb(55, 122, 9)
  }
}
.sidebar:before {
  content: "";
  background-color: $dark-color;
  width: $sidebar-width;
  position: fixed;
}

.sidebar,
.sidebar:before {
  top: 0;
  bottom: 0;
  left: 0;
}

.main {
  margin-left: $sidebar-width;
  position: relative;
  padding-left: $padding;
  padding-right: $padding;
  header {
    line-height: 18px;
    h2 {
      font-size: 24px;
      font-weight: 600;
      padding-bottom: 0.5rem;
    }
    hr {
      background-color: transparent;
      border-top: 1px solid $lighter-color;
    }
    small {
      color: $font-dark-color;
      text-align: right;
    }
  }
}
.main:before {
  content: "";
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: -2;
  left: 0;
  right: 0;
  background-image: -webkit-radial-gradient(
    top,
    circle farthest-corner,
    $gradient-color-start 0%,
    $gradient-color-end 70%
  );
  background-image: -moz-radial-gradient(
    center,
    circle farthest-corner,
    $gradient-color-start 0%,
    $gradient-color-end 70%
  );
  background-image: -o-radial-gradient(
    center,
    circle farthest-corner,
    $gradient-color-start 0%,
    $gradient-color-end 70%
  );
  background-image: radial-gradient(
    center,
    circle farthest-corner,
    $gradient-color-start 0%,
    $gradient-color-end 70%
  );
  background-position: 50%, 50%;
}

.sidebar,
.main {
  margin-top: $header-height;
  padding-top: $padding;
}

.navbar {
  background-color: rgb(60, 179, 113);
}

.navbar-start a{
  color: #ffffff;
}

.navbar-start a:hover{
  color: white;
}

.navbar-brand {
  width: $sidebar-width;
  background-color: $highlight-color;
  margin-right: calc(#{$padding} - 0.75rem);
  .navbar-item {
    padding-left: $padding;
  }
}

.box {
  hr {
    background-color: $lighter-color;
  }
}
.box.transparent {
  background-color: transparent;
}
.box.accent {
  background-color: $highlight-color;
  .subtitle {
    color: $font-color;
  }
}

.statcard {
  font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  .statcard-number {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.125;
  }
  .statcard-desc {
    font-size: 85%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: $font-dark-color;
  }
  .delta-indicator {
  display: inline-block;
  padding: .4em;
  font-size: 12px;
  vertical-align: middle;
  }
  .delta-indicator:after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    margin-left: 2px;
    vertical-align: middle;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

}

/* overwrite bulma, try to resolve with variables */

.box {
  background-color: $lighter-color;
  box-shadow: none;
  border-radius: 3px;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6,
.title,
.tile {
  color: $font-color;
}

.subtitle {
  color: $font-dark-color;
}

.navbar-item.is-tab:hover {
  background-color: transparent;
  border-bottom-color: $font-dark-color;
}

.navbar-item.is-tab {
  border-bottom: 3px solid transparent;
  min-height: 3.25rem;
  padding-bottom: calc(0.5rem - 1px);
}

a.navbar-item:hover {
  color: $darker-color;
}

.breadcrumb li + li::before,
.breadcrumb li a {
  color: $font-darker-color;
}

.breadcrumb li a:hover,
.breadcrumb li.is-active a {
  color: $font-color;
}

.tabs ul {
  border-bottom-color: $font-darker-color;
}

.tabs li.is-active a {
  border-bottom-color: $font-color;
  color: $font-color;
}

.tabs a {
  border-bottom-color: $font-darker-color;
  color: $font-dark-color;
}

.tabs a:hover {
  border-bottom-color: $font-color;
  color: $font-color;
}

.pagination-link,
.pagination-next,
.pagination-previous {
  border-color: $font-dark-color;
  color: $font-dark-color;
}

.pagination-link.is-current,
.pagination-link:hover,
.pagination-next:hover,
.pagination-previous:hover {
  background-color: transparent;
  border-color: $font-color;
  color: $font-color;
}

</style>
