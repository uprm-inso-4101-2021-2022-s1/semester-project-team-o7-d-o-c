/* Thanks to the HeroSection.js file, putting texts or images here is much simpler, */

/* These homeObjects will be included in Home.js which would be the Homepage of DOC */


export const homeObjOne = {
    lightBg: false,    // Declaring true or false in lightText, lightBg, or LightTextDesc, will result in this text being a dark 
    lightText: true,   // or light color. In HeroSection.js for example, if this lightText is delcared false, it will call on the .dark
    lightTextDesc: true, //version of this text, resulting in the dark color we choose it to be.   
    topLine: 'Book anytime, anywhere',
    headline: "Doctor's Office Calendar",
    description: 'Get access to be able to book an appointment to an office and have it saved on your calendar.',
    buttonLabel: 'Get Started',
    imgStart: '',
    // img: 'Images/INSO_LOGO_noBG (1).png',
    // alt: 'Credit Card'
}

export const homeObjTwo = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Bridge the Gap',      //The lines, description and button label is very simple to include. Writing the text here is the only 
    headline: "Stay in contact with your Doctor",//thing one has to do while HeroSection.js and .css work on this text placement and alignment.
    description: 'D.O.C provides you with the ability to come in contact with your doctor if the need would arise. No more accidentally ignoring phone calls.',
    buttonLabel: 'Get Started',
    imgStart: ''
    // img: 'images/svg-1.svg',
    // alt: 'Credit Card'
}

export const homeObjThree = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Already a Doctor?',
    headline: "Get ahead by registering your office",
    description: 'By registering your office in the D.O.C database, your office will be viewed by users who are looking for appointments.',
    buttonLabel: 'Register Office',
    imgStart: ''
    // img: 'images/svg-1.svg',
    // alt: 'Credit Card'
}