
// import Vue from 'vue'
import App from './App.vue'
import router from './router'

// sync the router with the vuex store.
// this registers `store.state.route`

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
// new Vue(Vue.util.extend({ el: '#root', router}, App))
var stream = weex.requireModule('stream')
new Vue ({
	el : '#root',
	data : {
		temp : [],
	},
	render : h => h(App),
	router : router,
	methods : {
		populateData(repo) {
        var self = this;
        console.log("function being called");
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: 'https://walkin.asiatrotter.org/api/v1/nearby?lat=12.9716&lng=77.5946&radius=15&query=&limit=20&page=&categoryId=1&city='
        },function(res){
        	self.temp = res.data;
        })
      }
	},
	created : function() {
		console.log("created!!");
		this.populateData();
	}
})

router.push('/')
