import type {ReactNode} from "react";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";

export default function Item({title, icon, iconClassName, description, href, link = false}: {
    title: string,
    icon: ReactNode,
    iconClassName: string,
    description: string,
    href: string,
    link?: boolean,
}) {
    const Component = link ? "a" : Link;

    return (
        <Component href={href}
                   className="my-8 xl:my-0 block xl:item xl:grow xl:hover:grow-[1.3] xl:basis-0 min-w-0 p-6 opacity-75 bg-neutral-950/50 border-mauve-400/25 border shadow-sm rounded-4xl xl:hover:scale-102 xl:transition-all xl:duration-300 xl:hover:shadow-lg xl:hover:bg-neutral-950/80 xl:hover:opacity-100 xl:group">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className={`rounded-xl size-12 p-2 border-2 ${iconClassName}`}>
                        {icon}
                    </div>
                    <span className="text-white/75 text-xl">{title}</span>
                </div>
                <ArrowUpRight
                    className="text-white size-10 border-sky-500 border-2 rounded-full p-1 opacity-60 xl:group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <p className="text-white/50 mt-4 xl:overflow-hidden xl:text-nowrap">{description}</p>
        </Component>
    )
}