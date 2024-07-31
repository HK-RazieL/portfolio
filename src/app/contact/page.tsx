import ContactCard from "@/components/ContactCard/ContactCard";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Page() {
    return (
        <main className="space-y-4">
            <ContactCard />
            <ContactForm />
        </main>
    );
}
