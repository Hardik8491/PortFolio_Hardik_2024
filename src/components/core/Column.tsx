import type { CoreComponentsProps } from "../../../types";

const Column = (props: Readonly<CoreComponentsProps>) => {
    const { children, className, onClick, id, elementRef } = props;

    return (
        <div
            className={`relative flex flex-col justify-start items-start transition duration-300 ease-in-out ${className}`}
            id={id}
            ref={elementRef}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Column;
