import "./DropDown.scss";
const DropDown = (props) => {
    const {
        optionList,
        className,
        isActive,
        type
    } = props;
    const onChangeHandler = (e) => {
        props.dropDownChangeHandler(e.target.value,type);
    }
    return (
        <select className={className} onChange = {onChangeHandler}>
            {optionList.map(({ value, id }, index) => <option value={id} >{value}</option>)}
        </select>
    )
}
export default DropDown;