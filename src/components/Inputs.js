import { useState } from "react"

export default function Inputs() {


    const [form, setForm] = useState({ name: "", surname: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div>
                <input onChange={handleChange} type="text" name="name" value={form.name} />
                <hr />
                <input onChange={handleChange} type="text" name="surname" value={form.surname} />
                <hr />
                {form.name} {form.surname}
            </div>
        </>
    )
}