import styles from "./result.module.css"

export default function Result({ result }) {
    // The hack to properly display an overline lol
    let endBar = result.lastIndexOf("\u0305")
    let withBar = result.slice(0, endBar + 1).split("").filter(e => e != "\u0305").join("")
    let woutBar = result.slice(endBar + 1)
    // End of the hack

    function copyToClip() {
        navigator.clipboard.writeText(result)
    }

    return (
        <>
        <p>
            <label>
                <span className={styles.overline}>{withBar}</span>{woutBar}
            </label>
        </p>
        <p>
            <button onClick={copyToClip} className={result ? "" : styles.btnhide}>Copy to Clipboard</button>
        </p>
        </>
    )
}