import ContactCard from "./ContactCard.tsx";

interface Contact {
    text: string;
    icon: string;
}

const emailSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">\n' +
    '                <path fill-rule="evenodd"\n' +
    '                      d="M1.756 4.568A1.5 1.5 0 0 0 1 5.871V12.5A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5V5.87a1.5 1.5 0 0 0-.756-1.302l-5.5-3.143a1.5 1.5 0 0 0-1.488 0l-5.5 3.143Zm1.82 2.963a.75.75 0 0 0-.653 1.35l4.1 1.98a2.25 2.25 0 0 0 1.955 0l4.1-1.98a.75.75 0 1 0-.653-1.35L8.326 9.51a.75.75 0 0 1-.652 0L3.575 7.53Z"\n' +
    '                      clip-rule="evenodd"/>\n' +
    '            </svg>'
const contacts: Contact[] = [
    {
        text: 'luismurrugarra17@gmail.com',
        icon: emailSVG
    },
]
const ContactMe = () => {
    return (
        <section className="container mx-auto py-8">
            <p className="text-3xl font-bold text-white text-center">Contact me</p>
            <div className="mt-14 flex justify-center items-center flex-wrap gap-4 lg:gap-6">
                {contacts.map((contact, index) => (
                    <ContactCard key={index} text={contact.text} icon={contact.icon}/>
                ))}
            </div>
        </section>
    )
}
export default ContactMe;