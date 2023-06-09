import "dbn-ui-test-1/web";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* @ts-ignore */}
      <dbn-dashboard
        token="f2834487-d196-463c-9a57-9e02f78c7dda"
        dashboardId="dev-orders"
      />
    </div>
  );
}

export default App;
