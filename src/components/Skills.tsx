import SkillCard from "./SkillCard.tsx";
import ReactSvg from "../assets/react.svg";
import HtmlSvg from "../assets/Html.svg";
import DockerSvg from "../assets/Docker.svg";
import GitSvg from "../assets/Git.svg";
import AngularSvg from "../assets/Angular.svg";
import CssSvg from "../assets/css.svg";
// import JavascriptSvg from "../assets/Javascript.svg";
import LaravelSvg from "../assets/Laravel.svg";
import LinuxSvg from "../assets/Linux.svg";
import MysqlSvg from "../assets/Mysql.svg";
// import NestSvg from "../assets/Nest.svg";
import NodeSvg from "../assets/Node.svg";
import PhpSvg from "../assets/Php.svg";
// import TailwindSvg from "../assets/Tailwind.svg";
import TypescriptSvg from "../assets/Typescript.svg";

const skills = [
    // { name: 'Javascript', icon: JavascriptSvg },
    { name: 'Php', icon: PhpSvg },
    { name: 'Laravel', icon: LaravelSvg },
    { name: 'Node', icon: NodeSvg },
    { name: 'Typescript', icon: TypescriptSvg },
    { name: 'Angular', icon: AngularSvg },
    { name: 'React.js', icon: ReactSvg },
    // { name: 'Nest', icon: NestSvg },
    { name: 'Html 5', icon: HtmlSvg },
    { name: 'CSS', icon: CssSvg },
    { name: 'Docker', icon: DockerSvg },
    { name: 'MySQL', icon: MysqlSvg },
    { name: 'Git', icon: GitSvg },
    // { name: 'Tailwind', icon: TailwindSvg },
    { name: 'Linux', icon: LinuxSvg },
];

const Skills = () => {
    return (
        <section className="container mx-auto py-8">
            <p className="text-3xl font-bold text-white text-center">My Skills</p>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {skills.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </section>
    )
}
export default Skills;