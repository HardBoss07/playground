import React from 'react';

type InputFieldProps = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
};

export default function InputField({
                                       label,
                                       value,
                                       onChange,
                                       placeholder,
                                       maxLength,
                                   }: InputFieldProps) {
    return (
        <div className="input-field-container">
            {label && <label className="input-field-label">{label}</label>}
            <input
                type="text"
                className="input-field"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                maxLength={maxLength}
            />
        </div>
    );
}