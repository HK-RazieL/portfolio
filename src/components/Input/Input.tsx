"use client";
import { useState } from "react";

export type InputType = {
    id?: string;
    name: string;
    type: string;
    placeholder?: string;
    className?: string;
    labelClassName?: string;
    label?: string;
    defaultValue?: string;
    required?: boolean;
};

export default function Input({
    id,
    name,
    type,
    className,
    labelClassName,
    label,
    defaultValue = "",
    placeholder,
    required,
}: InputType) {
    const [value, setValue] = useState<any>(defaultValue);

    return (
        <div className="relative flex w-full group transition-all ease-in-out py-2">
            {label && label !== "" ? (
                <label
                    htmlFor={id ?? ""}
                    className={`absolute top-[1rem] transition-all duration-300 group-focus-within:-translate-y-[1.5rem] ${value !== "" ? "-translate-y-[1.5rem]" : ""} ${labelClassName}`}
                >
                    {label}
                </label>
            ) : null}
            <input
                name={name}
                defaultValue={defaultValue}
                id={id}
                type={type}
                placeholder={placeholder}
                className={`p-2 !bg-transparent w-full placeholder:text-transparent focus:placeholder:text-secondary outline-none border-b border-secondary focus:border-b focus:border-secondary focus:border-t-0 ${className}`}
                onChange={(e) => setValue(e.target.value)}
                required={required}
            ></input>
        </div>
    );
}
