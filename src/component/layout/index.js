import angular from "angular";



class MenuController{
  constructor(MenuService){
    this.MenuService = MenuService;
  }

  $onInit(){
    this.menus= this.MenuService.getMenu();
  }
}



class MenuService{
  constructor(){}

  getMenu(){
    return [{
      name:"盘点总览"
    },{
      name:"数据盘点配置"
    },{
      name:"盘点基础配置"
    },{
      name:"菜单权限"
    }]
  }

}

MenuController.$inject=["MenuService"];

class MenuComponent{
  constructor(){
    this.controler  = MenuController;
    this.template=require("./index.html");
  }
}

const LAYOUT_MODULE = angular.module("layout.module")
.component("layout",new MenuComponent()).
service("MenuService",MenuService);

export {LAYOUT_MODULE};