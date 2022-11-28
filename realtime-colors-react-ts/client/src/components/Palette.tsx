import { useState } from "react";
import { send } from "../socketApi";

function Palette({ activeColor }: { activeColor: any }) {
  const [color, setColor] = useState("");
  return (
    <div className="palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e: any) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Click</button>
      {color}
    </div>
  );
}

export default Palette;
