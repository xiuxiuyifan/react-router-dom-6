import { useSearchParams } from "react-router-dom";

function Home() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  return (
    <div>
      <h1>我是 Home 页面</h1>
    </div>
  );
}

export default Home;
