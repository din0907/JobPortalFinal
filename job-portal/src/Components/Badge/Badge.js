import  "./Badge.scss";
const Badge = (props) => {
    const {
        className,
        title
    } = props;
    return (
        <button type = "text" className = {className}>{title}</button>
    )
}
export default Badge;