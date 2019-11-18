"use strict";

appRouting.$inject=['$urlRouterProvider','$stateProvider'];

function appRouting($urlRouterProvider,$stateProvider){
  $urlRouterProvider.otherwise("/notfound");

  const layout={
    name:"layout",
    url:"/",
    component:"layout",
    lazyLoad: ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
  
      return System.import("./src/component/layout/index")
        .then(mod => $ocLazyLoad.load(mod.LAYOUT_MODULE))
        .catch(err => {
          throw new Error("发生某些异常" + err);
        });
    }
  }

  $stateProvider.state(layout);

}


export {appRouting};
