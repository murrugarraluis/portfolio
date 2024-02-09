interface SkillCardProps {
    name: string;
    icon: string;
}

const SkillCard = ({name, icon}: SkillCardProps) => {
    return (
        <div className='card cursor-pointer flex justify-center items-center bg-gray-800 px-10 py-12 hover:bg-gray-700'>
            <img className="w-16" src={icon} alt=""/>
            <p className="text-center text-white mt-8 text-md lg:text-lg">{name}</p>
        </div>
    )
}
export default SkillCard