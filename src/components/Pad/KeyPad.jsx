import { useState } from "react";
import Button from "../Button";

function KeyPad({}){

    const [numbers,setNumbers] = useState([])
    const [operator,setOperator] = useState([])
    const [calcul,setCalcul] = useState([])
    const [result,setResult] = useState([])

    let array = []

    const pad = [
        '/','-','C',
        7,8,9,
        4,5,6,
        1,2,3,
        '+',0,'='
    ];

    const add = (left,operators,right) => {
        let results;
        switch(operators){
            case '+':
                results = left + right
                break;
            case '-':
                results = left - right
                break;
            case '=':
                console.log(results)
                break;
            default:
                console.log('Opérateur invlide')
                break;
        } 
       return results
    }

    const calculate = () => {
        let left,operators,right; 
        console.log(calcul.shift())
        if (calcul.length >  1){
            left = calcul.shift()
            operators = operator.shift()
            right = calcul.shift();
            console.log(left,operators,right)
            console.log(add(left,operators,right))
            setResult([...result,add(left,operators,right)])
            return add(left,operators,right)
        }
    }

    const log = (keys) => {
        if (typeof keys === 'number') {
            array.push(keys);
            setNumbers([...numbers, ...array]);
        }

        if (typeof keys === 'string') {
            setCalcul([...calcul, Number(numbers.join(""))]);
            setOperator([...operator, keys]);
            setNumbers([]);
        }

        calculate()

    }





    const keyPad = pad.map((element,index) => 
        <li key={index}>
           <Button keys={element} handleClick={() => log(element)}/>
        </li>
    )

    return(
        <div className="pad">
            <ul>
                {keyPad}
            </ul>
        </div>
    )
}

export default KeyPad