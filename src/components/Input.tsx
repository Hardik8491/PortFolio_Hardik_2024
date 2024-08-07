"use client";
interface InputProps {
    id: string;
    type: string;
    label: string;
    onChange: () => void;
}

const Input: React.FC<InputProps> = ({ id, label, type, onChange }) => {
    return (
        <div className='relative'>
            <input
                type='text'
                id={id}
                className='block pt-6 pb-1 w-full text-md appearance-none focus:outline-none focus:ring-0 peer border-b-2 border-[#F7AB0A]/10 bg-transparent text-yellow-600'
                placeholder=' '
                onChange={onChange}
            />
            <label
                htmlFor={id}
                className='absolute text-lg  duration-300 transform -translate-y-6 scale-75 top-6 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-md peer-focus:text-yellow-600 '
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
