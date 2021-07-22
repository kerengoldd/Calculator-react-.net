import React, { Fragment, useState } from 'react';
import agent from '../api/agent';

const Calculator = () => {
    const [result, setResult] = useState("")
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backSpace = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        const values = result;
        try {
            const total = eval(result).toString();
            setResult(eval(result).toString());
           agent.Calculation.add({values,total}).then(response => {
               console.log(response);
           });
           
        } catch {
            setResult("Error");
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row p-2">
                    <div className="col-lg-4 col-md-2"></div>
                    <div className="col-lg-3 col-md-8 calculator-div">
                        <form>
                            <input type="text" value={result} />
                        </form>
                        <div className="keypad">
                            <button className="hightlight" onClick={clear} id="clear">Clear</button>
                            <button className="hightlight" onClick={backSpace} id="backspace">C</button>
                            <button className="hightlight" name="/" onClick={handleClick}>&divide;</button>
                            <button name="7" onClick={handleClick}>7</button>
                            <button name="8" onClick={handleClick}>8</button>
                            <button name="9" onClick={handleClick}>9</button>
                            <button className="hightlight" name="*" onClick={handleClick}>&times;</button>
                            <button name="4" onClick={handleClick}>4</button>
                            <button name="5" onClick={handleClick}>5</button>
                            <button name="6" onClick={handleClick}>6</button>
                            <button className="hightlight" name="-" onClick={handleClick}>&ndash;</button>
                            <button name="1" onClick={handleClick}>1</button>
                            <button name="2" onClick={handleClick}>2</button>
                            <button name="3" onClick={handleClick}>3</button>
                            <button className="hightlight" name="+" onClick={handleClick}>+</button>
                            <button name="0" onClick={handleClick}>0</button>
                            <button name="." onClick={handleClick}>.</button>
                            <button className="hightlight" onClick={calculate} id="equal">=</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-2"></div>
                </div>

            </div>
        </Fragment>
    )
}

export default Calculator
