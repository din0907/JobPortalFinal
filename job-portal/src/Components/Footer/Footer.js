import "./Footer.scss";
const Footer = (props) => {
    const {
        footerData
    } = props;

    return (
        <div className="c-footer-main-contaienr">
            {footerData.map((rec, index) => {
                return <ul key={index} className={index !== footerData.length - 1 ? "c-footer-container" : "c-footer-container c-icon-container"}>
                    <li className="c-footer-title">{rec.footerTitle}</li>
                    {rec.footerLabelList.map((data, index) => {
                        return <li key={index}>
                            {!data.isIcon && <a>{data.lable}</a>}
                            {data.isIcon && <i className={data.icon}></i>}
                        </li>
                    })}
                </ul>
            })}
        </div>


    )
}
export default Footer;