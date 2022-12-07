export const ACTION = {
  HOME: "Home",
  ABOUT: "About",
  MENU: "Menu",
  SPECIALS: "Specials",
  EVENTS: "Events",
  GALLERY: "Gallery",
  CONTACT: "Contact",
  SHOWALL: "Show All",
  STARTERS: "Starters",
  SALAD: "Salad",
  SPECIALTY: "Specialty",
  LISTCLICK: "List Click",
};

export const headerState = {
  Home: "",
  About: "",
  Menu: "",
  Specials: "",
  Events: "",
  Gallery: "",
  Contact: "",
  "List Click": false,
};

export const menuState = {
  "Show All": "",
  Starters: "",
  Salad: "",
  Specialty: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "Home":
      return {
        ...headerState,
        "List Click": state["List Click"],
        Home: "text-Bilos-primary",
      };
    case "About":
      return {
        ...headerState,
        "List Click": state["List Click"],
        About: "text-Bilos-primary",
      };
    case "Menu":
      return {
        ...headerState,
        "List Click": state["List Click"],
        Menu: "text-Bilos-primary",
      };
    case "Specials":
      return { ...headerState, Specials: "text-Bilos-primary" };
    case "Events":
      return { ...headerState, Events: "text-Bilos-primary" };
    case "Gallery":
      return { ...headerState, Gallery: "text-Bilos-primary" };
    case "Contact":
      return { ...headerState, Contact: "text-Bilos-primary" };
    case "Show All":
      return {
        ...menuState,
        "Show All": "bg-Bilos-primary text-white  ",
      };
    case "Starters":
      return { ...menuState, Starters: "bg-Bilos-primary text-white" };
    case "Salad":
      return { ...menuState, Salad: "bg-Bilos-primary text-white" };
    case "Specialty":
      return { ...menuState, Specialty: "bg-Bilos-primary text-white" };
    case "List Click":
      return {
        ...state,
        "List Click": !state["List Click"],
      };
    default:
      throw new Error();
  }
};
