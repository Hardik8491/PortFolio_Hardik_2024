import type { CoreComponentsProps } from "../../../types";

const Row = (props: Readonly<CoreComponentsProps>) => {
    const { children, className, onClick, id, elementRef } = props;

    return (
        <div
            className={`relative flex flex-row justify-start items-start transition duration-300 ease-in-out ${className}`}
            id={id}
            ref={elementRef}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Row;
