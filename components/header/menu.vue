<template>
    <div id="main-menu" class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">
            <!-- HEADER BLACK LOGO -->
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-black"><img src="/assets/images/logo-pink.png" alt="logo" /></NuxtLink>
            </div>
            <!-- HEADER WHITE LOGO -->
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-white"><img src="/assets/images/logo-white.png" alt="logo" /></NuxtLink>
            </div>
            <!-- MAIN MENU -->
            <nav class="wsmenu clearfix">
                <ul class="wsmenu-list nav-theme">
                    <!-- DROPDOWN SUB MENU -->
                    <li aria-haspopup="true" class="mg_link" :class="{ open: isOpen[0] }">
                        <NuxtLink to="/" class="h-link">Home</NuxtLink>
                    </li>
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/product" class="h-link">Products</NuxtLink></li>
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/vuetify" class="h-link">Vuetify</NuxtLink></li>
                    <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/about" class="h-link">About Us</NuxtLink></li>
                    <template v-if="authStore.isLoggedIn">
                      <li class="nl-simple" aria-haspopup="true">
                        <a href="javascript:void(0)" @click.native="handleLogout" class="h-link">{{ authStore.login }}</a>
                      </li>
                    </template>
                    <template v-else>
                      <li class="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true">
                          <NuxtLink to="/login" class="h-link">Sign in</NuxtLink>
                      </li>
                      <li class="nl-simple" aria-haspopup="true">
                          <NuxtLink to="/signup" class="btn r-04 btn--theme hover--tra-white last-link">Sign up</NuxtLink>
                      </li>
                    </template>
                </ul>
            </nav>
            <!-- END MAIN MENU -->
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { useAuth } from '@/stores/auth'

export default {
    setup() {
        const authStore = useAuth()
        const state = reactive({
            isOpen: [false, false]
        });
        const toggle = (index) => {
            state.isOpen[index] = !state.isOpen[index];
        };

        function handleLogout() {
          authStore.logout();
        }

        return {
            toggle,
            isOpen: state.isOpen,
            authStore,
            handleLogout
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const menu = document.getElementById("main-menu");
            if (menu) {
              const header = document.getElementById("header");
              if (window.pageYOffset > 100) {
                menu.classList.add("scroll");
                header.classList.add("scroll");
              } else {
                menu.classList.remove("scroll");
                header.classList.remove("scroll");
              }
            }
        }
    }
};
</script>
