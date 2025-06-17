// import * as React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import { Header, Counter } from "@repo/ui";

const App = () => (
  <div>
    <Header title="Web" />
    <div className="card">
      <Counter />
      COUNTER MAXIM!!
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
