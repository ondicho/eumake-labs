import PharmacyCarousel from "./PharmacyCarousel";
import Panel from "./Panel";
import '../../assets/css/home.css';
import walk from '../../assets/images/walk.png'
import doctor from '../../assets/images/doctor.png'
import service from '../../assets/images/service.png'
import contact from '../../assets/images/contact.png'
import appointment from '../../assets/images/appointment.png'

const Home = () => {
    return (
        <>
            <PharmacyCarousel />
            <Panel />

        </>
    )
}

export default Home;