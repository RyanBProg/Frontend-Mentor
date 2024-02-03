const toggleDisplay = (element, propName, state1, state2) => {
    if (element.style[propName] === state1) {
        element.style[propName] = state2;
    } else {
        element.style[propName] = state1;
    }
};

const mobileMenuIcon = document.querySelector("#mobile-menu-icon");
const mobileMenu = document.querySelector("#mobile-menu");

mobileMenuIcon.addEventListener("click", (e) => {
    if (e.target.src.includes("/images/icon-menu.svg")) {
        e.target.src = "./images/icon-close-menu.svg";
    } else {
        e.target.src = "./images/icon-menu.svg";
    }

    toggleDisplay(mobileMenu, "display", "", "flex");
});

const featuresMenuArrow = document.querySelector(".features-menu-arrow");
const featuresDropdown = document.querySelector(".desktop-features-dropdown");

featuresMenuArrow.addEventListener("click", () => {
    toggleDisplay(featuresDropdown, "display", "", "flex");
    toggleDisplay(featuresMenuArrow, "transform", "", "rotate(180deg)");
});

const companyMenuArrow = document.querySelector(".company-menu-arrow");
const companyDropdown = document.querySelector(".desktop-company-dropdown");

companyMenuArrow.addEventListener("click", () => {
    toggleDisplay(companyDropdown, "display", "", "flex");
    toggleDisplay(companyMenuArrow, "transform", "", "rotate(180deg)");
});

const featuresMenuArrowMobile = document.querySelector(
    ".features-menu-arrow-mobile"
);
const featuresDropdownMobile = document.querySelector(
    ".features-dropdown-mobile"
);

featuresMenuArrowMobile.addEventListener("click", () => {
    toggleDisplay(featuresDropdownMobile, "display", "", "flex");
    toggleDisplay(featuresMenuArrowMobile, "transform", "", "rotate(180deg)");
});

const companyMenuArrowMobile = document.querySelector(
    ".company-menu-arrow-mobile"
);
const companyDropdownMobile = document.querySelector(
    ".company-dropdown-mobile"
);

companyMenuArrowMobile.addEventListener("click", () => {
    toggleDisplay(companyDropdownMobile, "display", "", "flex");
    toggleDisplay(companyMenuArrowMobile, "transform", "", "rotate(180deg)");
});
