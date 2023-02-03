import React from "react";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="container">
            <h1>Navigation app</h1>
            <canvas className="canvas" />
            <div className="control-panel">
                <button>Button 1</button>
                <button>Button 2</button>
            </div>
            <Footer />
        </div>
    )
}
