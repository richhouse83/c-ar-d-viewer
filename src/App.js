import { Router } from "@reach/router";
import AFrame from "./components/AFrame";
import HomePage from "./components/HomePage";

function App() {
  console.log("update to v5");
  return (
    <Router
      basepath="/c-ar-d-viewer"
      style={{ height: "100%", width: "100%", overflow: "hidden" }}
    >
      <HomePage path="/" />
      <AFrame path="/:file_id/:file_type" />
      {/* <VRFrame path="vr/:file_id/:file_type" /> */}
    </Router>
  );
}

export default App;
