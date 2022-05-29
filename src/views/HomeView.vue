<template>
  <div>
    <Navbar />
    <!-- <v-container> -->
    <body>
      <div class="header">
        <!-- header contents -->
        <span class="menuItems"
          ><a href="https://www.gmail.com" alt="gmail">Gmail</a></span
        >
        <span class="menuItems"
          ><a
            href="https://www.google.co.ke/imghp?hl=en&tab=wi&authuser=0&ogbl"
            alt="image"
            >Images</a
          ></span
        >
        <span class="menuItems">
          <span class="menu">
            <v-icon>mdi-apps</v-icon>
          </span>
          <div class="dropdown-content">
            <!-- google app logo -->
            <div class="appLogo">
              <a href="#">
                <img
                  class="menuItemLogo"
                  src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
                />
              </a>
              <div class="caption" alt="search">Search</div>
            </div>
            <!-- google map -->
            <div class="appLogo">
              <a href="#">
                <img
                  class="menuItemLogo"
                  src="http://pluspng.com/img-png/google-maps-png-google-maps-icon-1600.png"
                />
              </a>
              <div class="caption">Maps</div>
            </div>
            <!-- google drive -->
            <div class="appLogo">
              <a href="#">
                <img
                  class="menuItemLogo"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
                />
              </a>
              <div class="caption">Drive</div>
            </div>
            <!-- google calender -->
            <div class="appLogo">
              <a href="#">
                <img
                  class="menuItemLogo"
                  src="data:image/png;base64,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"
                />
              </a>
              <div class="caption">Calender</div>
            </div>
            <!-- google photo -->
            <div class="appLogo">
              <a href="#">
                <img
                  class="menuItemLogo"
                  src="https://blogs.acu.edu/innovation_foundry/files/2017/06/google_photos1600.png"
                />
              </a>
              <div class="caption">Photo</div>
            </div>
            <!-- keep -->
            <div class="appLogo">
              <a href="#">
                <img
                  class="menuItemLogo"
                  src="https://i.pinimg.com/originals/09/96/92/099692d1d651d51b7caf3040fce0f748.png"
                />
              </a>
              <div class="caption">Keep</div>
            </div>
          </div>
        </span>
        <span class="menuItems"
          ><img
            class="userImage"
            src="https://lh3.googleusercontent.com/a-/AOh14GhRowOcRCeXt5Uw7plDEq6qacBrFbyjB-UQ7txUbw=s96-c-rg-br100"
        /></span>
      </div>

      <!-- google image woth search box and buttons -->
      <div class="container" style="text-align: center">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />

        <!-- search box -->
        <div class="search">
          <input type="text" class="input" name="SearchBox" />
          <img
            class="voiceSearch"
            src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png"
          />
        </div>
      </div>
    </body>
    <!-- </v-container> -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
}

.header {
  font-size: 13px;
  text-align: right;
  padding-top: 22px;
  padding-right: 10px;
}

.menuItems {
  font-size: 13px;
  padding-right: 10px;
  padding-left: 20px;
  display: inline-block;
}

.header a {
  text-decoration: none;
  color: #000000;
}

.header a:hover {
  text-decoration: underline;
}

.menu {
  background-color: white;
  border: none;
  outline: none;
  box-shadow: none;
  padding-right: none;
}

.dropdown-content {
  width: 270px;
  padding: 28px;
  margin-right: 82px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: none;
  z-index: 1;
  position: absolute;
  right: 0;
}

.menuItems:hover .dropdown-content {
  display: block;
}

.appLogo {
  text-align: center;
  display: inline-block;
  width: 86px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.dropdown-content .appLogo:hover {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.menuItemLogo {
  width: 50px;
  height: 50px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.userImage {
  border-radius: 50%;
  margin: -1px;
  overflow: hidden;
  position: relative;
  height: 32px;
  width: 32px;
  vertical-align: middle;
}

.container {
  padding-top: 140px;
  padding-bottom: 160px;
}

.search {
  font-size: 13px;
  margin: auto;
  margin-top: 30px;
  padding: 14px;
  width: 600px;
  color: #222;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  outline: none;
}

.container .search:hover {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
}

.container .search:focus-within {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
}

.input {
  text-align: left;
  width: 95%;
  border: none;
  outline: none;
}

.voiceSearch {
  float: right;
  height: 24px;
  width: 24px;
}
</style>