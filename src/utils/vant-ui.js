import Vue from 'vue'
import {
  Search, Swipe, SwipeItem, Grid, GridItem, Button,
  Switch, Rate, Tabbar, TabbarItem, NavBar, Toast, Icon
} from 'vant'

Vue.use(Search)
Vue.use(Icon)
Vue.use(SwipeItem)
Vue.use(GridItem)
Vue.use(Swipe)
Vue.use(Grid)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
// 不能出现 Vue.use(Button， Switch)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Rate)
