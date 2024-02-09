interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

const ProjectCard = ({title, description, link, image}: ProjectCardProps) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white font-bold">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <a className="btn btn-primary" href={link} target="_blank">Ir</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard