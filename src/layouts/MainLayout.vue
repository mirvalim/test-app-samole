<template>
  <q-layout view="lHr lpR lFr">

    <q-header elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fas fa-dove"
            size="sm"
            color="primary"></q-icon>
          <span class="gt-sm">{{ $route.name }}</span>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>


    </q-header>

    <q-drawer width="250" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-icon
        class="q-pa-md"
        name="fas fa-dove"
        size="sm"
        color="primary"></q-icon>
      <q-list bordered>
        <q-item to="/" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item to="/about" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <q-input color="purple-12" v-model="text"  placeholder="search" class="q-ma-md" outlined rounded>
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
      <q-list separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Foods</q-item-label>
            <q-item-label class="text-weight-bold">very amazing</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Foods</q-item-label>
            <q-item-label class="text-weight-bold">very amazing</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Foods</q-item-label>
            <q-item-label class="text-weight-bold">very amazing</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>

