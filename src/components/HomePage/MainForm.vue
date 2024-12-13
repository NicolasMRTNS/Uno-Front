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
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="6">
        <v-text-field v-model="username" label="Enter your username" density="comfortable" />
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-text-field
          v-model="gameId"
          label="Enter the ID of a game to join"
          density="comfortable"
        />
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-btn color="primary" @click="createNewGame" :disabled="disableCreateNewGameBtn" block>
          Create new game
        </v-btn>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-btn color="primary" @click="joinGame" :disabled="disableJoinGameBtn" block>
          Join game
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
