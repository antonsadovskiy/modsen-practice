import {FormEvent, useState} from "react";

export const Form = () => {
    const [value, setValue] = useState('');

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(value)
    }

    return <form onSubmit={submitHandler} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h3>Form</h3>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type={'submit'}>log</button>
    </form>
}