import angular from "angular";
//angularjs路由
import "@uirouter/angularjs";
//懒加载
import "oclazyload";
import {appRouting} from "./app.routing";

let mainApp = angular.module("app",[
  "ui.router",
  "oc.lazyLoad"
]).config(appRouting);

//手动构建angular应用
angular.bootstrap(document.getElementById("app"),["app"], {
  strictDi: true
});