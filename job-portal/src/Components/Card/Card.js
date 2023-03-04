import Button from "../../Utils/CommonComponents/Button";
import imgLogo from '../../assets/abc.jpg'
import locationLogo from '../../assets/location.jpg'
const Card = (props) => {
    const {
        logo,
        jobTitle,
        companyName,
        location,
        contact,
        jobType,
        isActive
    } = props.data;
   /*  const logoUrl = '../../assets/'+ logo;
    const locationUrl = '../../assets/'+ location.logo;
    const contactUrl = '../../assets/'+ contact.logo; */
    return (
        <section className="c-card-container">
            <div className="c-card-logo">
                <img src= {imgLogo}/>
            </div>
            <div>
                <h3>{jobTitle}</h3>
                <h6>{companyName}</h6>
                <div className="c-card-location">
                    <span className="c-card-location-logo">
                        <img src={locationLogo}></img>
                    </span>
                    <span>{location.locationName}</span>
                </div>
                <div className="c-card-contact">
                    <span className="c-card-location-logo">
                        <img src={locationLogo}/>
                    </span>
                    <span>{contact.locationName}</span>
                </div>
                <Button title = {jobType}/>
            </div>
        </section>
    )
}

export default Card;