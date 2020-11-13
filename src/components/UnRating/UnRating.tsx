import React, {useState} from "react";


function UnRating() {
    let [value, setValue] = useState(0);
    return (
        <div>
            <Star selected={value > 0} setValue={() => { setValue(1) }}/>
            <Star selected={value > 1} setValue={() => { setValue(2) }}/>
            <Star selected={value > 2} setValue={() => { setValue(3) }}/>
            <Star selected={value > 3} setValue={() => { setValue(4) }}/>
            <Star selected={value > 4} setValue={() => { setValue(5) }}/>
        </div>
        // <div>
        //     <Star selected={value > 0}/>
        //     <button onClick={() => {
        //                 if (value === 0){
        //                     setValue(1)
        //                 }
        //                 if (value >= 1){
        //                     setValue(1)
        //                 }
        //                 if (value === 1) {
        //                     setValue(0)
        //                 }}}>1</button>
        //     <Star selected={value > 1}/>
        //     <button onClick={() => {setValue(2)}}>2</button>
        //     <Star selected={value > 2}/>
        //     <button onClick={() => {setValue(3)}}>3</button>
        //     <Star selected={value > 3}/>
        //     <button onClick={() => {setValue(4)}}>4</button>
        //     <Star selected={value > 4}/>
        //     <button onClick={() => {setValue(5)}}>5</button>
        // </div>
        // <div>
        //     <Star selected={value > 0}/>
        //     <button onClick={() => {
        //         if (value === 0){
        //             setValue(1)
        //         }
        //         if (value >= 1){
        //             setValue(1)
        //         }
        //         if (value === 1) {
        //             setValue(0)
        //         }
        //         // value === 0 ? setValue(1) : setValue(0)
        //     }}>1
        //     </button>
        //     <Star selected={value > 1}/>
        //     <button onClick={() => {
        //         if (value >= 0) {
        //             setValue(2)
        //         }
        //         if (value === 2) {
        //             setValue(1)
        //         }
        //     }}>2
        //     </button>
        //     <Star selected={value > 2}/>
        //     <button onClick={() => {
        //         if (value >= 0) {
        //             setValue(3)
        //         }
        //         if (value === 3) {
        //             setValue(2)
        //         }
        //     }}>3
        //     </button>
        //     <Star selected={value > 3}/>
        //     <button onClick={() => {
        //         if (value >= 0) {
        //             setValue(4)
        //         }
        //         if (value === 4) {
        //             setValue(3)
        //         }
        //     }}>4
        //     </button>
        //     <Star selected={value > 4}/>
        //     <button onClick={() => {
        //         if (value >= 0) {
        //             setValue(5)
        //         }
        //         if (value === 5) {
        //             setValue(4)
        //         }
        //     }}>5
        //     </button>
        // </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => { props.setValue() }}>{ props.selected ? <b>start </b> : "start " }</span>
    // return props.selected ? <span><b>start</b></span> : <span>start</span>
    // if (props.selected) {
    //     return <span><b>star</b></span>
    // } else {
    //     return <span>star</span>
    // }
}

export default UnRating