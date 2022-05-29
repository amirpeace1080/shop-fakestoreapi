<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="#321fdb" dark flat>
                <v-toolbar-title>ورود به سایت</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <p>فرم ورود به پنل کاربری</p>
                <v-form>
                  <v-text-field
                    label="نام کاربری"
                    v-model="username"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="رمز عبور"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn color="#321fdb" text @click="forgotpassword">فراموشی رمز عبور</v-btn> -->
                <!-- <v-btn color="#321fdb" text @click="register">ثبت نام</v-btn> -->
                <v-btn color="#321fdb" class="vbtn" @click="login">ورود</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: "mor_2314",
      password: "83r5^_",
    };
  },
  methods: {
    login() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => {
          // window.location('/')
          this.$router.push("/");
        })
        .catch(() => {
          this.$fire({
            title: "خطا !",
            text: "نام کاربری و رمز عبور وارد شده صحیح نمی باشد",
            type: "error",
            confirmButtonText: "دوباره تلاش می‌کنم",
            timer: 3000,
          }).then((r) => {
            console.log(r.value);
          });
        });
    },
  },
};
</script>

<style>
</style>
