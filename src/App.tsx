import "dbn-ui-test-1/web";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* @ts-ignore */}
      <dbn-dashboard
        token="e0945419-7c0f-4390-9c0c-4c9ffcb4f735"
        dashboardId="dev-orders"
      />
    </div>
  );
}

export default App;
