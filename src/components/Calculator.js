import { useState } from "react";
import './style.css'

export function Calculator() {
    const [input, setInput] = useState("");
    const [insertDecimal, setInsertDecimal] = useState(true);
    const [insertOp, setInsertOp] = useState(false);

    const handleNum = (value) => {
        setInsertOp(true);
        setInput(input + value);
    }

    const handleOp = (value) => {
        if (!insertOp) return;
        setInsertOp(false);
        setInsertDecimal(true);
        setInput(input + value);
    }

    const handleDecimal = () => {
        if (input.length === 0 || !insertOp) {
            setInput(input + '0.');
            return;
        }
        if (!insertDecimal) return;
        setInsertDecimal(false);
        setInput(input + '.');
    }

    const handleDelete = () => {
        let temp = input.toString();
        if (temp === "Infinity") {
            setInput("");
            return;
        }
        let lastchar = input[input.length - 1];
        temp = temp.slice(0, -1);
        if (lastchar === "+" || lastchar === "-" || lastchar === "/" || lastchar === "*") {
            if (temp.length === 0) setInsertOp(false);
            else setInsertOp(true);
            setInsertDecimal(false);
        }
        if (lastchar === ".") {
            if (temp.length === 1 && temp === '0') temp = temp.slice(0, -1);
            setInsertDecimal(true);
        }
        setInput(temp);
    }

    const evaluate = () => {
        try {
            setInput(eval(input));
            let temp = input.toString();
            if (temp.includes(".")) setInsertDecimal(false);
            else setInsertDecimal(true);
        }
        catch (error) {
                alert("INVALID EXPRESSION!!");
        }
    }

    const handleMode = (m, notm) => {
        let modebtn = document.getElementsByClassName("color-btn");
        for (let btn of modebtn) {
            btn.classList.remove("btn-color-"+notm);
            btn.classList.add("btn-color-"+m);
        }

        let textarea = document.getElementById("color-text");
        textarea.classList.remove("textarea-"+notm);
        textarea.classList.add("textarea-"+m);

        let upper = document.getElementById("color-upper");
        upper.classList.remove("upper-bg-"+notm);
        upper.classList.add("upper-bg-"+m);

        let calcbtn = document.getElementsByClassName("calc-btn");
        for (let button of calcbtn) {
            button.setAttribute('id','calc-btn-'+m);
        }
    }

    return (
        <div className="rounded-2 upper-bg-light" id="color-upper">
            <div className="d-flex">
                <button onClick={() => handleMode("light", "dark")} className="btn btn2 w-100 rounded-0 btn-color-light color-btn"><i className="fa-regular fa-sun"></i></button>
                <button onClick={() => handleMode("dark", "light")} className="btn btn2 w-100 rounded-0 btn-color-light color-btn"><i className="fa-solid fa-moon"></i></button>
            </div>
            <div>
                <textarea value={input} className="w-100 input textarea-light border-0" id="color-text" rows={5}></textarea>
            </div>
            <div className="d-flex my-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("7")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">7</button>
                        </div>
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("8")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">8</button>
                        </div>
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("9")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">9</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("4")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">4</button>
                        </div>
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("5")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">5</button>
                        </div>
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("6")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">6</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("1")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">1</button>
                        </div>
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("2")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">2</button>
                        </div>
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("3")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">3</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 p-0">
                            <button onClick={() => handleNum("0")} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">0</button>
                        </div>
                        <div className="col-4 p-0">
                            <button onClick={handleDecimal} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">.</button>
                        </div>
                        <div className="col-4 p-0">
                            <button onClick={evaluate} className="btn w-100 pb-3 rounded-0 calc-btn" id="calc-btn-light">=</button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid w-25">
                    <div className="row">
                        <div className="col-12 p-0">
                            <button onClick={handleDelete} className="btn btn2 w-100 rounded-0 calc-btn" id="calc-btn-light"><i class="fa-solid fa-delete-left"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0">
                            <button onClick={() => handleOp("/")} className="btn btn2 w-100 rounded-0 calc-btn" id="calc-btn-light"><i class="fa-solid fa-divide"></i>
                        </button></div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0">
                            <button onClick={() => handleOp("*")} className="btn btn2 w-100 rounded-0 calc-btn" id="calc-btn-light"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0">
                            <button onClick={() => handleOp("-")} className="btn btn2 w-100 rounded-0 calc-btn" id="calc-btn-light"><i class="fa-solid fa-minus"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0">
                            <button onClick={() => handleOp("+")} className="btn btn2 w-100 rounded-0 calc-btn" id="calc-btn-light"><i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}