import { useState } from "react"
import convertToRoman from "../lib/conv";

export default function RomanConverter() {
    const [roman, setRoman] = useState(null);
    
    function handleChange(e) {
        setRoman(() => convertToRoman(e.target.value))
    }
    return (
        <>
        <p>
        <input onChange={handleChange} type="number" placeholder="Number to convert" min={1} />
        </p>
        <p>
        <label>{roman}</label>
        </p>
        </>
    )
}