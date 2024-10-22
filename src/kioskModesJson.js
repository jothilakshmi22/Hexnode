import singleApp from "../src/Assets/kioskModels/single-app.png";
import multiApp from "../src/Assets/kioskModels/multi-app.png";
import webBased from "../src/Assets/kioskModels/web-based.png";
import digitalSign from "../src/Assets/kioskModels/digital-sign.png";
import asam from "../src/Assets/kioskModels/asam.png";

export const kioskModesData = [
  {
    title: "Single App Kiosk",
    image: `${singleApp}`,
    contextTitle: "Powerful Single-App Kiosk solutions for enhanced control",
    points: [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time.",
      "Use Hexnode's Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      "Empower your administrators with full control over the kiosk devices.",
    ],
  },
  {
    title: "Multi-App Kiosk",
    image: `${multiApp}`,
    contextTitle: "Elevate efficiency with Multi-App Kiosk",
    points: [
      "Limit device access to approved apps, ensuring focus and productivity.",
      "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
      "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
      "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
    ],
  },
  {
    title: "Web-based kiosk",
    image: `${webBased}`,
    contextTitle: "Explore the new way to manage web apps and websites",
    points: [
      "Let users access essential and approved web apps, website and files only.",
      "Make the best use of website kiosk with Hexnode's advanced settings.",
      "Tailor your experience to match your unique use case.",
      "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
    ],
  },

  {
    title: "Digital Signages",
    image: `${digitalSign}`,
    contextTitle: "Capture attention with Digital Signage Kiosks",
    points: [
      "Transform your devices into captivating digital signage kiosks that grab attention.",
      "Engage your audience with vibrant images and seamless video streaming.",
      "Customize media files with trimming, muting, and background music.",
      "Advertise and show off your brand aesthetics to attract customers in different ways.",
      "Take control with Hexnode to reestablish your brand's presence.",
    ],
  },

  {
    title: "ASAM Kiosk",
    image: `${asam}`,
    contextTitle: "Unlock the power of Autonomous Single App Mode (ASAM)",
    points: [
      "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
      "Create focused, efficient and secure digital environments to match your requirements.",
      "Configure ASAM effortlessly and elevate your user experience like never before.",
    ],
  },
];
