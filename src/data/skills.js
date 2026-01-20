import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export const SkillsData = [
        {
            type:"Frontend",
            list:[
                {
                    name:"React",
                    icon: FaReact
                },
                {
                    name:"HTML",
                    icon: FaHtml5
                },
                {
                    name:"CSS",
                    icon: FaCss3Alt
                },
                {
                    name:"Flutter",
                    icon: FaFlutter
                }
            ],
        },

        {
            type: "Backend",
            list:[
                {
                    name:"C++",
                    icon: SiCplusplus
                },
                {
                    name:"Python",
                    icon: FaPython
                }
            ]
        }
    ]