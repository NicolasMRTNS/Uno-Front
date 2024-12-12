<script setup lang="ts">
import { computed, ref } from 'vue'
import { VForm } from 'vuetify/components'

const form = ref<VForm | undefined>(undefined)
const username = ref<string | undefined>(undefined)
const gameId = ref<string | undefined>(undefined)

const isUsernameEmpty = computed<boolean>(() => {
  return username.value == undefined || username.value === ''
})

const isGameIdEmpty = computed<boolean>(() => {
  return gameId.value == undefined || gameId.value === ''
})

const disableCreateNewGameBtn = computed<boolean>(() => {
  return isUsernameEmpty.value || !isGameIdEmpty.value
})

const disableJoinGameBtn = computed<boolean>(() => {
  return isUsernameEmpty.value || isGameIdEmpty.value
})

const createNewGame = () => {
  console.log(username.value)
  console.log(gameId.value)
}

const joinGame = () => {
  console.log(username.value)
  console.log(gameId.value)
}
</script>

<template>
  <v-form ref="form">
    <v-text-field
      v-model="username"
      class="text-field-primary-bg-color"
      placeholder="Enter your name"
    />
    <v-text-field
      v-model="gameId"
      class="text-field-primary-bg-color"
      placeholder="Enter the ID of a game to join"
    />
    <v-btn-group>
      <v-btn color="primary-reversed" @click="createNewGame" :disabled="disableCreateNewGameBtn"
        >Create new game</v-btn
      >
      <v-btn color="primary-reversed" @click="joinGame" :disabled="disableJoinGameBtn"
        >Join game</v-btn
      >
    </v-btn-group>
  </v-form>
</template>
