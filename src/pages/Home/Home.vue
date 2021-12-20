<template>
  <page>
    <page-header>
      <template #title>Home</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">

        <div class="text-h5 q-mb-md">국가/수도 맞추기 퀴즈!</div>

        <q-btn
          to="/home/FlagQuiz"
          label="국가 맞추기"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />

        <q-btn
          to="/home/FlagCaptalQuiz"
          label="수도 맞추기"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />
      </div>
    </page-body>
  </page>
</template>

<script>

export default {
  name: 'Home',
}
</script>
