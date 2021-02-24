import { Router } from "@reach/router";
import AFrame from "./components/AFrame";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <AFrame path="/:file_id/:file_type" />
      {/* <VRFrame path="vr/:file_id/:file_type" /> */}
    </Router>
  );
}

export default App;
