import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
<!-- NeuroDesk AI Widget -->
<script>
  window.NeuroDeskConfig = { botId: 3 };
</script>
<script src="http://localhost:8080/api/widget.js" async></script>
