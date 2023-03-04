import "./Button.scss";

const Button = (props) => {
    const {
        className,
        title,
        disabled
    } = props;
    const clickHandler = () => {
        props.BtnClickHandler()
    }
    return (
        <button disabled = {disabled} onClick={clickHandler} className = {disabled ? 'c-btn c-btn-disabled' : className}>{title}</button>
    )
}

export default Button;