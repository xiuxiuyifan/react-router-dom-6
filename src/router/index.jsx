import {lazy, Suspense} from "react";
import LayoutPage from "../pages/LayoutPage";



// 经过分析发现  菜单是有父子关系的 ， 而路由没有子路由都属于 LayoutPage 的子路由

// path 命名采用 驼峰命名法 helloWorld
// 组件的目录命名采用 HelloWorld 命名方式
// 所以就需要编写一个函数  将 path /helloWorld 转换成 /HelloWorld ，也就是/后面的第一个字符准换成大写的

function convertPath (path) {
  let arr = path.split('/')
  //  forEach 调用的时候 item 如果普通类型如果给 item 重新赋值 则不会修改原始值
  //  如果是引用类型  直接改变指针的指向则原始值不会被修改
  //  如果是引用类型  在原来引用的基础上修改会修改原始值
  return arr.map(item => {
    if (item) {
      return item[0].toUpperCase() + item.substring(1)
    }else {
      return item
    }
  }).join('/')
}

export const menu = [
  {
    id: '1',
    name: "模块一",
    path: "/model1/dashboard",
    children: [
      {
        id: '2',
        name: "首页",
        path: "/model1/dashboard",
        icon: "",
      },
      {
        id: '3',
        name: "二级菜单",
        path: "/model1",
        icon: "",
        children: [
          {
            id: '6',
            name: "2-1-home",
            path: "/model1/home",
            icon: "",
          }
        ]
      },
    ],
  },
  {
    id: '4',
    name: "模块二",
    path: "/model2",
  },
  {
    id: '5',
    name: "模块三",
    path: "/model3",
  },
];

function LazyWrapper(path) {
  const Component = lazy(() => import(`../pages${path}`))
  return (
    <Suspense fallback={<div>loading</div>}>
      <Component/>
    </Suspense>
  );
}

let router = [
  {
    path: "/login",
    element: LazyWrapper('Login'),
  },
  {
    path: "/",
    element: <LayoutPage/>,
    children: [],
  },
];

// 收集所有的叶子节点，生成路由信息
function genRouter(menuConfig, router) {
  menuConfig.forEach(menuItem => {
    if(!menuItem.children) {
      router.push({
        path: menuItem.path,
        element: LazyWrapper(convertPath(menuItem.path))
      })
    }else {
      genRouter(menuItem.children, router)
    }
  })
}
genRouter(menu[0].children, router[1].children)

export default router;
