import  "./Badge.scss";
const Badge = (props) => {
    const registerInfo =  useSelector(state => state.registerInfo);

    console.log(registerInfo);
    const {
        className,
        title
    } = props;
    return (
        <button type = "text" className = {className}>{title}</button>
    )
}
export default Badge;