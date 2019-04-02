<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-btn
        @click="saveBook()">
        Save
      </v-btn>
    </v-flex>
    <v-flex
      xs12
    >
      <v-btn
        @click="getBook2()"
      >
        Get book 2
      </v-btn>
      <div
        v-if="book"
      >
        {{ book }}
      </div>
    </v-flex>
    <v-flex
      xs12
      >
      <v-btn
        @click="getAllBooks()"
      >
        Get all books
      </v-btn>
      <div
        v-if="books"
      >
        {{ books }}
      </div>
    </v-flex>
    <v-flex xs12>
      <v-btn
        @click="deleteBook2()"
      >
        Delete book 2
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      book: null,
      books: null
    }
  },
  methods: {
    async saveBook() {
      const data = {
        title1: 'Pentesting',
        title2: 'Programming'
      }
      const config = {
        headers: {
          'content-type': 'application/json'
        }
      }
      await this.$axios.$post('books', data, config)
    },

    async getBook2() {
      const id = 2
      this.book = await this.$axios.$get(`books/${id}`)
    },

    async getAllBooks() {
      this.books = await this.$axios.$get('books')
    },

    async deleteBook2() {
      const id = 2
      await this.$axios.$delete(`books/${id}`)
    }
  }
}
</script>
