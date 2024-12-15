<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { computed, ref } from 'vue'
import { VForm } from 'vuetify/components'

const { createGame, joinGame } = useGameStore()

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

const createNewGameBtn = (): void => {
  if (username.value) {
    createGame(username.value)
  }
}

const joinGameBtn = (): void => {
  if (username.value && gameId.value) {
    joinGame(username.value, gameId.value)
  }
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
        <v-btn color="primary" @click="createNewGameBtn" :disabled="disableCreateNewGameBtn" block>
          Create new game
        </v-btn>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-btn color="primary" @click="joinGameBtn" :disabled="disableJoinGameBtn" block>
          Join game
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
