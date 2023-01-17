import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-icon">
            <LocationOnIcon />
          </div>
          <div className="contact-title">Address</div>
          <p className="contact-info">
            Bengaluru 560010 <br></br> Karnataka
          </p>
        </div>
        <div className="contact-center">
          <div className="contact-icon">
            <PhoneInTalkIcon />
          </div>
          <div className="contact-title">Phone</div>
          <p className="contact-info">080-5678655</p>
        </div>
        <div className="contact-right">
          <div className="contact-icon">
            <EmailIcon />
          </div>
          <div className="contact-title">Email</div>
          <p className="contact-info">customer@cozy.com</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
