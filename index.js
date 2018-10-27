console.log(JSON.stringify(items))

Vue.component('sale-item', {
  props: ['title', 'prices', 'discount', 'url', 'image_url'],
  data: function () {
    return {
      count: 0
    }
  },
  computed: {
    newPrice: function() {
      return this.prices[0]
    },

    oldPrice: function() {
      return this.prices[1]
    }
  },
  methods: {
    click: function(event) {
      // Allows us to avoid default <a href...> styling
      window.location.href = this.url
    }
  },
  template: '<div class="card" v-on:click="click"><span class="font2">{{title}}</span><br><img :src="image_url"></img><br><div class="right"><span class="font3">{{oldPrice}}</span><span class="font1">{{newPrice}}</span></div></div></a>'
})

new Vue({el: '#app',
data: {items: items}})