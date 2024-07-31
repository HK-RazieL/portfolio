import Input from "../Input/Input";

export default function ContactForm() {
    return (
        <div className="space-y-2 animate-appearFromBottom2">
            <h2 className="text-h2">Contact me</h2>
            <p className="text-secondary">
                You can also contact me through this form
            </p>
            <form action="" className="flex flex-col gap-4">
                <Input
                    type="text"
                    label="From:"
                    id="from"
                    placeholder="Terry Bogard"
                />
                <div className="flex flex-col gap-2">
                    <label htmlFor="from">From</label>
                    <input
                        id="from"
                        type="text"
                        placeholder="Terry Bogard"
                        className="p-2 pt-6 rounded !bg-gray-950"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                        className="p-2 rounded !bg-gray-950"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Hello"
                        className="p-2 rounded !bg-gray-950"
                    />
                </div>
                <label htmlFor="message">Message</label>
                <div className="flex flex-col gap-2">
                    <textarea
                        rows={10}
                        placeholder="I would like to hear from you!"
                        className="p-2 rounded !bg-gray-950 resize-none"
                    />
                </div>
                <button className="bg-gray-900 rounded p-1">Send</button>
            </form>
        </div>
    );
}
