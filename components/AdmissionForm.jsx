import React, { useState } from "react";
import axios from "axios";

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        selectedBatch: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/submitForm", formData);
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="age">Age:</label>
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
            />

            <label htmlFor="selectedBatch">Selected Batch:</label>
            <select
                name="selectedBatch"
                value={formData.selectedBatch}
                onChange={handleChange}
            >
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="5-6PM">5-6PM</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );
};

export default AdmissionForm;
