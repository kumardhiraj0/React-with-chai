import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tailwind Test</h1>
      <h2 className="bg-green-400 text-black p-4 rounded-xl mb-4">hello</h2>
      {/* <figure class="bg-slate-100 rounded-xl dark:bg-slate-800">
        <img
          class="w-24 h-24"
          src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure> */}

      {/* crad component  */}
      <Card name="dhiraj" age={20} btnText = "click me"/>
      <Card name="pankaj" age={17} />
    </>
  );
}

export default App;
