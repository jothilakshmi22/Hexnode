import "./App.css";
import { lazy, Suspense } from "react";

const Accordion = lazy(() => import("./Accordion/Accordion"));
const SlidingAccordion = lazy(() =>
  import("./SlidingAccordion/SlidingAccordion")
);
const Carousel = lazy(() => import("./Carousel/Carousel"));
const Marquee = lazy(() => import("./Marquee/Marquee"));
const PlatformSupport = lazy(() => import("./PlatformSupport/PlatformSupport"));
const Banner = lazy(() => import("./Banner/Banner"));
const SubBanner = lazy(() => import("./SubBanner/SubBanner"));
const Footer = lazy(() => import("./Footer/Footer"));
const SignupForm = lazy(() => import("./SignUpForm/SignupForm"));
const Tabs = lazy(() => import("./Tabs/Tabs"));
const NavBar = lazy(() => import("./NavBar/NavBar"));

function App() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <div className="container">
        <NavBar />
        <Banner />
        <SubBanner />

        <div className="tab-wrapper">
          <div className="tab-container container-width">
            <h1 className="container-title ">
              Specific kiosk modes for unique use cases
            </h1>
            <Accordion />
            <Tabs />
          </div>
        </div>

        <div className="sliding-accordion-wrapper">
          <div className="sliding-accordion-container container-width">
            <h1 className="container-title max">
              What additional possibilities does the Kiosk mode offer?
            </h1>
            <SlidingAccordion />
          </div>
        </div>

        <div className="caruosels-wrapper">
          <div className="carousels container-width">
            <h1 className="container-title">Why should you choose Hexnode? </h1>
            <Carousel />
            <div className="marquee-wrapper">
              <Marquee />
            </div>
          </div>
        </div>

        <div className="platform-support-wrapper">
          <div className="platform-support-container  container-width">
            <h1 className="container-title platform-heading-padding">
              Platforms supported
            </h1>
            <PlatformSupport />
          </div>
        </div>

        <div className="sign-up-wrapper">
          <div className="sign-up-container container-width">
            <h1>Sign up and try Hexnode free for 14 days!</h1>
            <SignupForm />
            <p>
              No credit cards required. <span> Request a demo &gt;</span>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
