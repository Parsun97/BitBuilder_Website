import React from "react";

const CalcifyPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="https://new-calcify-calcify.vercel.app/"
        title="Calcify"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-write"
      />
    </div>
  );
};

export default CalcifyPage;
