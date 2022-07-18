import React, {
    Dispatch,
    HTMLAttributes,
    ReactElement,
    SetStateAction,
} from "react";
import TabItem from "./TabItem";

type TabProps = {
    items: string[];
    icons: ReactElement[];
    selectedIndex: number;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
} & HTMLAttributes<HTMLDivElement>;

export default function Tab(props: TabProps) {
    return (
        <div
            {...props}
            className={`flex flex-col items-start ${props.className}`}
        >
            {props.items.map((item, i) => {
                return (
                    <TabItem
                        key={i.toString()}
                        icon={props.icons[i]}
                        name={item}
                        active={i === props.selectedIndex}
                        className="my-1"
                        onClick={() => props.setSelectedIndex(i)}
                    />
                );
            })}
        </div>
    );
}
