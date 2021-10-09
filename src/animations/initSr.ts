import ScrollReveal from 'scrollreveal'

export const initSr = () => {
  const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
  }

  // Welcome page
  ScrollReveal().reveal(
    "#saluteText",
    {
      ...defaultProps,
      delay: 300,
      origin: "left",
    }
  )
  ScrollReveal().reveal(
    "#knowMoreButton",
    {
      ...defaultProps,
      delay: 700,
      origin: window.innerWidth > 600 ? "left" : "bottom",
    }
  )
  ScrollReveal().reveal(
    "#aboutFrameTop",
    {
      ...defaultProps,
      delay: 500,
      origin: "top",
    }
  )

  // About page
  ScrollReveal().reveal(
    "#avatarImg",
    {
      ...defaultProps,
      delay: 300,
      origin: "top",
    }
  )
  ScrollReveal().reveal(
    "#aboutTitle",
    {
      ...defaultProps,
      delay: 450,
      origin: "right",
    }
  )
  ScrollReveal().reveal(
    "#myName",
    {
      ...defaultProps,
      delay: 600,
      origin: "right",
    }
  )
  ScrollReveal().reveal(
    "#whatDo",
    {
      ...defaultProps,
      delay: 700,
      origin: "right",
    }
  )
  ScrollReveal().reveal(
    "#seeProyects",
    {
      ...defaultProps,
      delay: 1200,
      origin: "bottom",
    }
  )

  // Proyects page
  ScrollReveal().reveal(
    "#myWorkTitle",
    {
      ...defaultProps,
      delay: 300,
      origin: "left",
    }
  )
  ScrollReveal().reveal(
    "#proyectContainer",
    {
      ...defaultProps,
      delay: 400,
      origin: "center",
    }
  )
  
  ScrollReveal().reveal(
    "#checkApp",
    {
      ...defaultProps,
      delay: 650,
      origin: "bottom",
    }
  )
  ScrollReveal().reveal(
    "#sourceCode",
    {
      ...defaultProps,
      delay: 850,
      origin: "bottom",
    }
  )
  ScrollReveal().reveal(
    "#appLogo",
    {
      ...defaultProps,
      delay: 500,
      origin: "top",
    }
  )

  // Contact page
  ScrollReveal().reveal(
    "#thanksForView",
    {
      ...defaultProps,
      delay: 300,
      origin: "top",
    }
  )
  ScrollReveal().reveal(
    "#contactDescription",
    {
      ...defaultProps,
      delay: 500,
      origin: "top",
    }
  )
  ScrollReveal().reveal(
    "#sendMailButton",
    {
      ...defaultProps,
      delay: 550,
      origin: "bottom",
    }
  )

  // Social buttons
  ScrollReveal().reveal(
    "#socialButton1",
    {
      ...defaultProps,
      delay: 400,
      origin: "bottom",
    }
  )
  ScrollReveal().reveal(
    "#socialButton2",
    {
      ...defaultProps,
      delay: 550,
      origin: "bottom",
    }
  )
  ScrollReveal().reveal(
    "#socialButton3",
    {
      ...defaultProps,
      delay: 700,
      origin: "bottom",
    }
  )
  ScrollReveal().reveal(
    "#socialButton4",
    {
      ...defaultProps,
      delay: 850,
      origin: "bottom",
    }
  )
}