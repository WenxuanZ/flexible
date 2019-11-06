const routeList = [
    {
      path: '/',
      name: 'index',
      meta:{group: ''},
      component: () => import(/* webpackChunkName: "about" */ './views/Index.vue')
    },
    {
      path:'/index',
      name:'index',
      meta:{group: ''},
      component:() => import(/* webpackChunkName: "about" */ './views/Index.vue')
    },
    {name: 'Form-star', path: '/star', meta: {title: '好评', group: '基础组件'}, component: () => import('./views/star.vue')},
    {name:'Popup', path: '/popup', meta: {title: '遮罩', group: '基础组件'}, component: () => import('./views/popup.vue')},
    {name: 'TabBar', path: '/tab-bar', meta: {title: '标签', group: '基础组件'}, component: () => import('./views/tab-bar.vue')},
    {name: 'Swipe-label', path: '/swipe-label', meta: {title: '滑动标签', group: '基础组件'}, component: () => import('./views/swipe-label.vue')},
    {name: 'Text', path: '/text', meta: {title: '文字', group: '基础组件'}, component: () => import('./views/text.vue')},
    {name: 'Form-swtich', path: '/row', meta: {title: '行', group: '基础组件'}, component: () => import('./views/row.vue')},
    {name: 'Form-radio', path: '/form-radio', meta: {title: '单选', group: 'Form表单类组件'}, component: () => import('./views/form-radio.vue')},
    {name: 'Form-checkbox', path: '/form-checkbox', meta: {title: '多选', group: 'Form表单类组件'}, component: () => import('./views/form-checkbox.vue')},
    {name: 'Cell', path: '/cell', meta: {title: '列表单元', group: 'Form表单类组件'}, component: () => import('./views/cell.vue')},
    {name: 'Form-swtich', path: '/switch', meta: {title: '开关', group: 'Form表单类组件'}, component: () => import('./views/form-switch.vue')},
    {name: 'marquee', path: '/marquee', meta: {title: '无缝滚动', group: '无缝滚动'}, component: () => import('./views/marquee.vue')}
  ]
  export default routeList;
  export const menus = routeList;