export default [
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/developer', component: require('./components/Developer.vue') },
    { path: '/users', component: require('./components/Users.vue') },
    { path: '/profile', component: require('./components/Profile.vue') },
    { path: '*', component: require('./components/NotFound.vue') }

]










// let routes = [



//    {

//       path: '/dashboard',
//       component: require('./components/Dashboard.vue'),
//       name: 'Gate',
//       component: Gate,
//       beforeEach: (to, from, next) => {
//             if ( Gate ) {
//         //    console.log('inside route setup');
//          next('/dashboard');
//             }
//             else {
//               to('/');
//             }
//       }
//     }




//    //  {
//    //    path: '/developer',
//    //    name: 'Gate',
//    //    component: require('./components/Developer.vue'),
//    //    component: Gate,
//    //    beforeEnter: (to, from, next) => {
//    //          if ( Gate ) {
//    //          next();
//    //          }
//    //          else {
//    //            to('/');
//    //          }
//    //    }      
//    //  },
//    //   {
//    //    path: '/users',
//    //    name: 'Gate',
//    //    component: require('./components/Users.vue'),
//    //    component: Gate,
//    //    beforeEnter: (to, from, next) => {
//    //          if ( Gate ) {
//    //                        next();
//    //          }
//    //          else {
//    //            to('/');
//    //          }
//    //    }      
//    //  },
//    //    {
//    //    path: '/profile',
//    //    name: 'Gate',
//    //    component: require('./components/Profile.vue'),
//    //    component: Gate,
//    //    beforeEnter: (to, from, next) => {
//    //          if ( Gate ) {
//    //                        next();
//    //          }
//    //          else {
//    //            to('/');
//    //          }
//    //    }      
//    //  },

//    // { path: '*', component: require('./components/NotFound.vue') }
          

//  // //   { path: 'dashboard', name: 'Gate', component: Gate, meta: { user: true} },
//  //   // { path: '/dashboard', component: require('./components/Dashboard.vue') },
//  //    { path: '/developer', component: require('./components/Developer.vue') },
//  //    { path: '/users', component: require('./components/Users.vue') },
//  //    { path: '/profile', component: require('./components/Profile.vue') },
//  //    { path: '*', component: require('./components/NotFound.vue') }
//   ]

