
interface ContactCardProps {
    text: string;
    icon :string;
}
const ContactCard = ({text,icon}: ContactCardProps) =>{
    return (
        <div className="px-10 py-6 bg-gray-700 text-white font-medium shadow-lg rounded-xl flex justify-center items-center gap-4">
            <div className="w-6 h-6" dangerouslySetInnerHTML={{__html: icon}}/>
            <span>{text}</span>
        </div>
    )
}
export default ContactCard