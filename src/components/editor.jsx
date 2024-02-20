import { useState } from "react";

export default function Editor({ onSubmit }) {

    const [inputMessage, setInputMessage] = useState("");

    return (
        <>

            <div className="editor">
                <input type="text" className="input-editor"
                    value={inputMessage}
                    onChange={
                        (e) => setInputMessage(e.target.value)
                    } />

                <button className="button"
                    onClick={() => onSubmit(inputMessage)} >
                    Send
                </button>
            </div>

        </>
    )
}