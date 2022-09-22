import styles from "./result.module.css"

export default function Result({ result }) {
    function copyToClip() {
        navigator.clipboard.writeText(result)
    }

    return (
        <>
        <p>
            <label>{result}</label>
        </p>
        <p>
            <button onClick={copyToClip} className={result ? "" : styles.btnhide}>Copy to Clipboard</button>
        </p>
        </>
    )
}