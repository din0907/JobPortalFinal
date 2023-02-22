import "./Input.scss";
const Input = (props) => {
    const {
        type,
        placeholder,
        className
    } = props;
    return (
        <input type={type} placeholder = {placeholder} className = {className}/>
    )
}
export default Input;