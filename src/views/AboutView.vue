<template>
  <div>
    <Navbar />
    <v-container>
      <div id="resume">
        <div class="left-column">
          <div class="substrate">
            <!-- <h2>My Profile</h2> -->
            <img
              class="profilepic"
              src="https://lh3.googleusercontent.com/a-/AOh14GhRowOcRCeXt5Uw7plDEq6qacBrFbyjB-UQ7txUbw=s96-c-rg-br100"
              alt="abhaymakadia"
            />
            <ul class="main-info-list">
              <li>
                Name<span>Mohammad Sharifi</span>
                <div class="floatlimit"></div>
              </li>
              <li>
                Born<span>26 June 1994</span>
                <div class="floatlimit"></div>
              </li>
              <li>
                Address<span>Iiran - Kermanshah - Kermanshah</span>
                <div class="floatlimit"></div>
              </li>
              <li>
                Email<span>amirpeace1080@gmail.com</span>
                <div class="floatlimit"></div>
              </li>
            </ul>
            <div class="paper-clip"></div>
          </div>
        </div>
        <div class="right-column">
          <div class="substrate gradient-blue font-blue">
            <h2>About Me</h2>
            <h3>Hay, I'm Mohammad Sharifi . . .</h3>
            <div class="p">
              Interested in new challenges, keen interest in the world of open
              source and Linux, eagerly awaiting new technologies
            </div>
          </div>

          <div class="substrate">
            <h2>Skill I</h2>
            <h3>Front End Development</h3>
            <ul class="skills">
              <li class="skill">
                <span>HTML</span>
                <div class="b">
                  <span class="eighty" style="width: 90%"></span>
                </div>
              </li>
              
              <li class="skill">
                <span>css</span>
                <div class="b">
                  <span class="eighty" style="width: 90%"></span>
                </div>
              </li>

              <li class="skill">
                <span>Sass</span>
                <div class="b">
                  <span class="eighty" style="width: 90%"></span>
                </div>
              </li>

              <li class="skill">
                <span>Bootstrap</span>
                <div class="b">
                  <span class="eighty" style="width: 90%"></span>
                </div>
              </li>

              <li class="skill">
                <span>Javascript</span>
                <div class="b">
                  <span class="eighty" style="width: 85%"></span>
                </div>
              </li>

              <li class="skill">
                <span>VueJs</span>
                <div class="b">
                  <span class="eighty" style="width: 85%"></span>
                </div>
              </li>

              <li class="skill">
                <span>NuxtJs</span>
                <div class="b">
                  <span class="eighty" style="width: 85%"></span>
                </div>
              </li>

              <li class="skill">
                <span>Bulma</span>
                <div class="b">
                  <span class="eighty" style="width: 85%"></span>
                </div>
              </li>

              <li class="skill">
                <span>Git</span>
                <div class="b">
                  <span class="eighty" style="width: 70%"></span>
                </div>
              </li>
            </ul>
            <div class="paper-clip"></div>
          </div>
        </div>

        <div class="floatlimit"></div>
      </div>
    </v-container>
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
#resume {
  float: left;
  background: url("http://leta.artrow.net/images/background.jpg");
  color: #333333;
  font: 14px/20px "Open Sans", Helvetica, Arial, sans-serif;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  z-index: 0;
}

#resume .substrate {
  background: none repeat scroll 0 0 #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  display: block;
  margin-bottom: 30px;
  padding: 15px 20px;
  position: relative;
}

#resume .substrate:before {
  bottom: 15px;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.3);
  content: "";
  height: 20%;
  left: auto;
  position: absolute;
  right: 5px;
  transform: rotate(3deg);
  width: 80%;
  z-index: -1;
  -webkit-transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -o-transform: rotate(3deg);
  transform: rotate(3deg);
  -ms-transform: rotate(3deg);
}

#resume .left-column {
  float: left;
  margin: 20px 0 0 20px;
  padding: 15px;
  width: 270px;
}

#resume .left-column .substrate {
  width: 230px;
}

#resume .right-column {
  float: right;
  margin: 20px 20px 0 0;
  padding: 15px;
  width: 490px;
}

#resume .substrate h2 {
  margin: 0 0 30px;
}

#resume h2 {
  font: 400 28px/28px "Open Sans", Helvetica, Arial, sans-serif;
  margin-bottom: 10px;
}

#resume .right-column .substrate {
  padding-left: 30px;
  width: 440px;
}

#resume .gradient-blue {
  background: linear-gradient(to bottom, #479cd7 0%, #2c7eb8 100%) repeat scroll
    0 0 rgba(0, 0, 0, 0);
}

#resume .substrate h2 {
  margin: 0 0 30px;
  font: 400 28px/28px "Open Sans", Helvetica, Arial, sans-serif;
  margin-bottom: 10px;
}

#resume .font-blue h2,
.font-yellow h2 {
  color: #ffffff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

#resume .font-blue h3,
.font-blue h4,
.font-blue h5,
.font-blue h6 {
  color: #d4edff;
}

#resume h3 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
}

#resume h4 {
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
}

#resume .p {
  margin-bottom: 20px;
  color: #a9dcff;
}

#resume .main-info-list {
  list-style: none;
  margin: 20px 0 20px;
  padding: 0;
}

#resume .main-info-list li {
  margin-bottom: 3px;
  color: #333;
  font-size: 14px;
  vertical-align: baseline;
  padding: 0;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

#resume .main-info-list li span {
  width: 150px;
  color: #666;
  padding-left: 20px;
}

#resume .info-period {
  padding-left: 100px;
}

#resume .time-period-right-blue {
  margin-left: 10px;
  padding: 2px 10px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
}

#resume .time-period-right-blue {
  background: #2d7fb9;
}

#resume .left-blue {
  margin: 0 0 20px 10px;
  padding-left: 25px;
  border-left: 10px solid #2d7fb9;
}

#resume .time-period-left-blue {
  position: relative;
  float: left;
  width: 90px;
  font-weight: 600;
  color: #2d7fb9;
}

#resume .time-period-left-blue:before {
  position: absolute;
  top: -3px;
  left: -44px;
  width: 16px;
  height: 16px;
  border: 6px solid #2d7fb9;
  border-radius: 15px;
  background: #fff;
  content: "";
}

#resume .skills {
  margin: 10px 0 20px;
  list-style: none;
  padding: 0;
}

#resume .skills li {
  margin-bottom: 3px;
  height: 40px;
}

#resume .skill span {
  float: left;
  width: 100px;
}

#resume .skill .b {
  float: left;
  width: 70%;
  margin-left: 10px;
  background: rgba(141, 149, 167, 0.2);
}

#resume .skills .b .eighty {
  height: calc(2em);
  background: #2d7fb9;
}

#resume .paper-clip {
  width: 60px;
  height: 85px;
  background: url("https://lh5.googleusercontent.com/-_VvJpGXP9N0/UwdDY7l-CQI/AAAAAAAABTI/xXPDe4i5lbQ/s330/paper-clip.png")
    repeat scroll 0% 0% transparent;
  position: absolute;
  top: -14px;
  right: -13px;
}

.profilepic {
  width: 100%;
}

@media screen and (max-width: 860px) {
  #resume {
    width: 620px;
  }

  #resume.left-column {
    padding-left: 5px;
  }

  #resume .right-column {
    padding-left: 0;
    width: 270px;
  }

  #resume .right-column .substrate {
    width: 230px;
  }

  #resume .substrate {
    margin-bottom: 20px;
  }

  #resume .time-period-left-blue {
    position: relative;
    float: left;
    width: 50px;
    font-weight: 600;
  }
}
@media screen and (max-width: 620px) {
  #resume {
    width: 320px;
  }

  #resume.left-column {
    float: none;
    margin: 20px 20px 0;
    padding: 0 0 0 5px;
  }

  #resume .right-column {
    margin: 0 25px 0;
    padding: 10;
  }

  #resume .right-column .substrate {
    width: 220px;
  }

  #resume .substrate {
    margin-bottom: 20px;
  }

  #resume .time-period-left-blue {
    position: relative;
    float: left;
    width: 50px;
    font-weight: 600;
  }
}
</style>