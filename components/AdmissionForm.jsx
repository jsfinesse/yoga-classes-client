import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        selectedSlot: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for empty fields
        console.log(formData);
        for (const key in formData) {
            if (formData[key].trim() === "") {
                toast.error("All fields must be filled");
                return;
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Invalid email format");
            return;
        }

        try {
            const API_BASE_URL =
                process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

            const response = await axios.post(
                `${API_BASE_URL}/api/enroll`,
                formData
            );
            console.log(response.data);

            toast.success("Enrolled successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);

            toast.error(error.response.data.error);
        }
    };

    return (
        <>
            <h1>Yoga Classes Admission Form</h1>
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
                    placeholder="Age should be between 18 and 65"
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="selectedSlot">Selected Slot:</label>
                <select
                    name="selectedSlot"
                    value={formData.selectedSlot}
                    onChange={handleChange}
                >
                    <option value="">Select a slot</option>
                    <option value="6-7AM">6-7AM</option>
                    <option value="7-8AM">7-8AM</option>
                    <option value="8-9AM">8-9AM</option>
                    <option value="5-6PM">5-6PM</option>
                </select>
                <label>Amount ₹:</label>
                <input
                    type="text"
                    name="amount"
                    value={500}
                    readOnly = {true}
                    disabled = {true}
                />
                <button type="submit">Submit</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default AdmissionForm;
