import './Input.style.css';

export default function Input({ ...props }) {
    return (
        <input
            type="text"
            className='input'
            {...props}
        />
    )
}
