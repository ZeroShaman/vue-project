<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list two-line subheader>
          <v-list-tile avatar v-for="order of orders" :key="order.id">
            <v-list-tile-action>
              <v-checkbox
                color="success"
                :input-value="order.done"
                @change="markDone(order)">
              </v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-btn color="primary" :to="'/ad/' + order.adId">Open</v-btn>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '1',
          name: 'Andrey',
          phone: '+7 952 866 28 33',
          adId: '1',
          done: false
        },
        {
          id: '2',
          name: 'Katherina',
          phone: '+7 952 861 86 61',
          adId: '2',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>