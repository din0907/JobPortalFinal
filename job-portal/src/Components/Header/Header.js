import Button from "../../Utils/CommonComponents/Button";
import "./Header.scss";
const Header = (props) => {
const {
    headerData
} = props;
const signInHandler = () => {
    console.log("signIn")
}
const registerHandler = () => {
    console.log("registerHandler");
}
return (
    <header className="c-header">
        <section className="c-logo">
            <h3 className="c-title">
                <span>{headerData.headerTitle1}</span>
                <span className="c-title-color">{headerData.headerTitle2}</span>
            </h3>
        </section>
            <ul className="c-nav-bar">
                {headerData.HeaderLabelList.map((rec,index) => {
                    return <li key={index}>{rec.lable}</li>
                })}
            </ul>
        <section className="c-acticon-container">
            <Button title="SignIn" className="c-btn c-primary" BtnClickHandler = {signInHandler}/>
            <Button title="Register" className="c-btn c-secondary" BtnClickHandler = {registerHandler}/>
        </section>
    </header>
)
}

export default Header;