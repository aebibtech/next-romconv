import { useState } from "react"
import convertToRoman from "../lib/conv";
import Result from "./result";

export default function RomanConverter() {
    const [roman, setRoman] = useState("");
    
    function handleChange(e) {
        setRoman(() => convertToRoman(e.target.value))
    }

    return (
        <>
        <p>
            <input onChange={handleChange} type="number" placeholder="Number to convert" min={1} />
        </p>
        <Result result={roman} />
        </>
    )
}