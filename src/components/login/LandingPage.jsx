import Button from '../common/Button';
import bgImage from './../../assets/bg-02.jpg'
import logoDisplay from './../../assets/logo-display-white.png'

const LandingPage = ({
    setIsLandingOpen,
    setIsLoginOpen,
    setIsSignupOpen,
}) => {
    // handlers
    const handleCallToActionClick = () => {
        setIsLandingOpen(false);
        setIsLoginOpen(true);
    }

    // render
    return <>
        <div className={`
        flex justify-center items-center
        pt-10 pb-10
        `} style={{
            height: "calc(100vh - 3.5rem)",
            background: `url(${bgImage}) no-repeat center center fixed`,
            WebkitBackgroundSize: "cover",
            MozBackgroundSize: "cover",
            OBackgroundSize: "cover",
            backgroundSize: "cover",
        }}>
            <div className="
            flex justify-center items-center flex-col
            w-full bg-black bg-opacity-50
            "
            style={{
                height: "calc(100vh - 3.5rem)"}}
            >
                <div className="w-64 lg:w-1/4">
                    <img src={logoDisplay} alt="Next Bank Logo"/>
                </div>
                <Button
                    content="Get Started"
                    color="bg-green-500"
                    hoverColor="hover:bg-green-600"
                    otherStyling="mx-4 mt-4"
                    onClickFunction={handleCallToActionClick}
                />
            </div>

        </div>
    </>
};

export default LandingPage;

