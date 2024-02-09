import ProjectCard from "./ProjectCard.tsx";
import AppEventoPNG from "./../assets/images/app-eventos.png"

interface Project {
    title: string;
    description: string;
    link: string;
    image: string;
}

const projects: Project[] = [
    {
        title: 'App Eventos',
        description: 'App desarrollada con Angular y Laravel',
        link: 'https://app-eventos-luisdev.netlify.app/eventos',
        image: AppEventoPNG
    }
];

const Skills = () => {
    return (
        <section className="container mx-auto py-8">
            <p className="text-3xl font-bold text-white text-center">Proyectos</p>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title}
                                 description={project.description}
                                 link={project.link}
                                 image={project.image}

                    />
                ))}
            </div>
        </section>
    )
}
export default Skills;