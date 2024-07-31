"use client";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Input from "../Input/Input";

export default function ContactForm() {
    const [sent, setSent] = useState<boolean>(false);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            event.stopPropagation();

            const formData = new FormData(event.currentTarget);
            formData.append("to_name", "RazieL");

            const formDataObj: Record<string, any> = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });

            emailjs
                .send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                    formDataObj,
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then(() => {
                    setSent(true);
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="animate-appearFromBottom2 pt-5 pb-5">
            <AnimatePresence>
                {!sent ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 250 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -350 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div>
                            <h2 className="text-h2">Contact me</h2>
                            <p className="text-secondary">
                                You can also contact me through this form
                            </p>
                        </div>
                        <form
                            onSubmit={onSubmit}
                            className="flex flex-col gap-4"
                        >
                            <Input
                                name="from_name"
                                type="text"
                                label="From:"
                                id="from"
                                placeholder="Terry Bogard"
                            />
                            <Input
                                name="email"
                                type="email"
                                label="Email:"
                                id="email"
                                placeholder="example@example.com"
                            />
                            <label htmlFor="message">Message:</label>
                            <div className="flex flex-col gap-2">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={10}
                                    placeholder="I would like to hear from you!"
                                    className="p-2 !bg-transparent border border-secondary resize-none outline-none"
                                />
                            </div>
                            <button
                                disabled={sent}
                                type="submit"
                                className="bg-gray-900 rounded p-1 hover:outline outline-[1px] outline-secondary"
                            >
                                Send
                                {sent && (
                                    <Image
                                        src="/icons/nodejs-icon.png"
                                        alt="icon"
                                        width="10"
                                        height="10"
                                    />
                                )}
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="thankyou"
                        initial={{ opacity: 0, y: 250 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -550 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <p className="h-[300px] flex items-center justify-center">
                            Thank you for contacting me!
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
