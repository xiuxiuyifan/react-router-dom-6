import { useRoutes, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import router from "./router";
const About = lazy(() => import("./pages/Model1/About"));
const Home = lazy(() => import("./pages/model1/Home"));
const LayoutPage = lazy(() => import("./pages/LayoutPage"));
const Login = lazy(() => import("./pages/Login"));

// 使用 配置的方式渲染路由树

function App() {
  let element = useRoutes(router);
  return <div className="App">{element}</div>;
}

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             <Suspense fallback={<div>loading</div>}>
//               <Login />
//             </Suspense>
//           }
//         ></Route>
//         <Route
//           path="/"
//           element={
//             <Suspense fallback={<div>loading</div>}>
//               <Layout />
//             </Suspense>
//           }
//         >
//           <Route
//             path="/home"
//             element={
//               <Suspense fallback={<div>loading</div>}>
//                 <Home />
//               </Suspense>
//             }
//           ></Route>
//           <Route
//             path="/about"
//             element={
//               <Suspense fallback={<div>loading</div>}>
//                 <About />
//               </Suspense>
//             }
//           ></Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// }
export default App;
