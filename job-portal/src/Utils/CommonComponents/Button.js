import "./Button.scss";

const Button = (props) => {
    const {
        className,
        title
    } = props;
    const clickHandler = () => {
        props.BtnClickHandler()
    }
    return (
        <button onClick={clickHandler} className = {className}>{title}</button>
    )
}

export default Button;