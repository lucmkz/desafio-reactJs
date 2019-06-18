import React from 'react'

const CounterContainer = ({ counter, increment, decrement }) => (
    <div className="fieldset">
        <div className="space-md" />
        <label>
            <strong>Quantos stickers de cada?</strong>
        </label>
        <div className="space" />
        <div className="counter">
            <svg className={counter === 0 ? "counterSvgZero" : "counterSvg"} xmlns="http://www.w3.org/2000/svg" width="42" height="42" onClick={decrement}>
                <path d="M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z" /></svg>
            <input type="text" readOnly value={counter} />
            <svg className="counterSvg" xmlns="http://www.w3.org/2000/svg" width="42" height="42" onClick={increment}>
                <path d="M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z" /></svg>
        </div>
    </div>
)

export default CounterContainer