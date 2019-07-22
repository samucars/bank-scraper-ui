# bank-scraper-ui

A simple page for integration with [bank-scraper-api](https://github.com/samucars/bank-scraper-api).

> Before proceeding, clone the [bank-scraper-api](https://github.com/samucars/bank-scraper-api) and follow the instructions.

## Build Setup

``` bash
# install dependencies
npm install

# Url for connect API
export API_URL="http://localhost:3000"

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run prod
```

## Notes

* Integration is only made with itaú.
* Be careful when you delete the password, it can be blocked.

## Future resources

* Improved test coverage
* Integration with other banks
* Layout enhancements

## Built with
- [Vue](https://vuejs.org/) - A progressive JavaScript framework
- [Vue-router](https://router.vuejs.org/) - The official router for Vue.js
- [Vuex](https://vuex.vuejs.org/) - The state manager for Vue.js
- [Axios](https://github.com/axios/axios/) - Promise based HTTP client for the browser and node.js
- [Bootstrap-vue](https://bootstrap-vue.js.org/) - Is an open source toolkit for developing with HTML, CSS, and JS
