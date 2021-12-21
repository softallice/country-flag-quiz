<template>
  <q-scroll-area class="page-home absolute-top fit">

    <slot id="q-app-body"/>

    <div class="page-body-spacer-footer"></div>

  </q-scroll-area>
</template>

<script>
export default {
  name: 'PageBody'
}
</script>