<template>
  <div>
    <header class="nomaddemo-sitehd">
      <div class="nomaddemo-sitehd-content">
        <div class="nomaddemo-sitehd-logo"></div>

        <div class="nomaddemo-sitehd-main">
          <!-- Topbar -->
          <div class="nomaddemo-sitehd-topbar">
            <div class="nomaddemo-sitehd-topbar-content">
              <button class="btn-icon btn-back" title="Back">
                <span class="pri pri-back" aria-hidden="true"></span>
                <span class="btn-title">Back</span>
              </button>
              <span class="nomaddemo-sitehd-topbar-title">Reader</span>
              <select onchange="onLangChange(event)">
                <option value="en" selected>EN</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </div>

          <!-- Navbar -->
          <nav class="nomaddemo-sitehd-navbar">
            <a
              role="link"
              tabindex="0"
              class="nav-link"
              href="#/catalog/newspapers"
            >
              <span class="title">Newspapers</span>
            </a>
            <a
              role="link"
              tabindex="0"
              class="nav-link is-selected"
              href="#/catalog/magazines"
            >
              <span class="title">Magazines</span>
            </a>
          </nav>
        </div>
      </div>
    </header>

    <div>
      <div id="widget-catalog-container"></div>
    </div>
  </div>
</template>
<script>
import { createWidget } from "@/plugins/pr-widget-catalog.cjs.js";

export default {
  name: "PressReader",
  data() {
    return {
      configPath: "http://127.0.0.1:2020",
    };
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    let catalogWidget = createWidget({
      element: document.getElementById("widget-catalog-container"),
      //configPath : "@/assets/packages",
      configPath: this.configPath + `/packages`,
      //press2 is the page with reader component
      //readerPath: this.$router.currentRoute + `/press2?configPath=${this.configPath}`,
      //readerPath: this.configPath + `?configPath=packages`,
      readerPath: "press2",
      locale: "en-US",
      groupByCategory: true,
      consistency: "none",
    });
  },
};
</script>




 <style>
/* @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"); */

.nomaddemo-sitehd {
  font-family: FrutigerNextLight, "Source Sans Pro", Arial, Helvetica,
    sans-serif;
  color: #5a5a5a;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
.nomaddemo-sitehd-content {
  width: 87.5%;
  max-width: 1239px;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto;
}
.nomaddemo-sitehd-logo {
  width: 250px;
  margin-right: 32px;
  background: url(https://cockpit.norwegiansuppliers.no/images/company_logo/1609927949.png)
    no-repeat center center;
  background-size: contain;
}
.nomaddemo-sitehd-main {
  -ms-flex: 1;
  flex: 1;
}
.nomaddemo-sitehd-topbar {
  margin: 28px 0 14px 0;
}
.nomaddemo-sitehd-topbar .btn-back {
  width: 32px;
  margin: 0 16px 0 0;
  color: #fff;
  background: #5a5a5a;
}
.nomaddemo-sitehd-topbar .btn-back .pri {
  font-size: 20px;
}
.nomaddemo-sitehd-topbar-content {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.nomaddemo-sitehd-topbar-title {
  font-size: 32px;
  font-weight: 300;
}
.nomaddemo-sitehd-topbar select {
  margin-left: auto;
  border: none;
}
.nomaddemo-sitehd-navbar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  font-size: 15px;
}
.nomaddemo-sitehd-navbar .nav-link {
  position: relative;
  display: inline-block;
  padding: 5px 14px 14px 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
}
.nomaddemo-sitehd-navbar .nav-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 10px;
  width: 1px;
  background: #5a5a5a;
}
.nomaddemo-sitehd-navbar .nav-link:first-child::before {
  display: none;
}
.nomaddemo-sitehd-navbar .nav-link.is-selected::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 7px;
  background: #5a5a5a;
}
</style>