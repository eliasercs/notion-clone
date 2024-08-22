import React, {useState} from "react";
import {ChevronDownIcon, ChevronUpIcon, DocumentMinusIcon} from "@heroicons/react/24/solid";

const SideBarSubButton = ({icon, title}) => {
    return <li>
        <a href="#" className="flex items-center p-1 hover:bg-gray-700">
            {icon}
            <p className="truncate">{title}</p>
        </a>
    </li>
}

const SideBarButton = ({icon, title, dropdown = false, submenu = []}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [background, setBackground] = useState("")

    const handleClick = () => {
        setIsOpen(!isOpen)
        setBackground(!isOpen ? "bg-gray-700" : "")
    }

    return <li className="mb-4">
        <a href="#" className={"flex justify-between items-center p-2 hover:bg-gray-700 rounded "+background}>
            <div className="flex items-center">
                { icon }
                { title }
            </div>
            {dropdown ? 
                isOpen ? <ChevronUpIcon className="size-3" onClick={handleClick} /> : <ChevronDownIcon className="size-3" onClick={handleClick} /> 
            : ""}
        </a>
        {
            isOpen ? <ul>
                {
                    submenu.map((item, id) => <SideBarSubButton key={id} title={item.title} icon={item.icon !== undefined ? <img src={item.icon} className="size-4 mr-1" /> : <DocumentMinusIcon className="size-4 mr-1" />} />)
                }
            </ul> : ""  
        }
    </li>
}

export default SideBarButton