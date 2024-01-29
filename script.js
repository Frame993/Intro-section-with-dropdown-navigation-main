const buttonFeatures = document.getElementById("Features");
const features = document.getElementById("FeaturesContent");
const buttonCompany = document.getElementById("Company");
const company = document.getElementById("CompanyContent");
const featuresArrow = document.getElementById("FeaturesArrow");
const companyArrow = document.getElementById("CompanyArrow");
const featuresArrowMobile = document.getElementById("FeaturesArrowMobile");
const companyArrowMobile = document.getElementById("CompanyArrowMobile");
const hamburgerBtn = document.getElementById("menu");
const closeBtn = document.getElementById("closeMenu");

const buttonFeaturesMobile = document.getElementById("FeaturesMobile");
const featuresMobile = document.getElementById("FeaturesContentMobile");
const buttonCompanyMobile = document.getElementById("CompanyMobile");
const companyMobile = document.getElementById("CompanyContentMobile");


//open and close
buttonFeatures.addEventListener("click", function () {
    if (features.style.display === "none") {
        features.style.display = "flex";
        company.style.display = "none";
    } else {
        features.style.display = "none";
    }
})

buttonCompany.addEventListener("click", function () {
    if (company.style.display === "none") {
        company.style.display = "flex";
        features.style.display = "none";
    } else {
        company.style.display = "none";

    }
})

//open and close Mobile
buttonFeaturesMobile.addEventListener("click", function () {
    if (featuresMobile.style.display === "none") {
        featuresMobile.style.display = "flex";
        companyMobile.style.display = "none";
    } else {
        featuresMobile.style.display = "none";
    }
})

buttonCompanyMobile.addEventListener("click", function () {
    if (companyMobile.style.display === "none") {
        companyMobile.style.display = "flex";
        featuresMobile.style.display = "none";
    } else {
        companyMobile.style.display = "none";

    }
})


//rotate arrow
buttonFeatures.addEventListener("click", function () {
    companyArrow.style.transform = "rotate(0deg)";
    if (featuresArrow.style.transform === "rotate(0deg)") {
        featuresArrow.style.transform = "rotate(180deg)";
    } else {
        featuresArrow.style.transform = "rotate(0deg)";
    }
})

buttonCompany.addEventListener("click", function () {
    featuresArrow.style.transform = "rotate(0deg)";
    if (companyArrow.style.transform === "rotate(0deg)") {
        companyArrow.style.transform = "rotate(180deg)";
        
    } else {
        companyArrow.style.transform = "rotate(0deg)";
    }
})

//rotate arrow Mobile

//rotate arrow
buttonFeaturesMobile.addEventListener("click", function () {
    companyArrowMobile.style.transform = "rotate(0deg)";
    if (featuresArrowMobile.style.transform === "rotate(0deg)") {
        featuresArrowMobile.style.transform = "rotate(180deg)";
    } else {
        featuresArrowMobile.style.transform = "rotate(0deg)";
    }
})

buttonCompanyMobile.addEventListener("click", function () {
    featuresArrowMobile.style.transform = "rotate(0deg)";
    if (companyArrowMobile.style.transform === "rotate(0deg)") {
        companyArrowMobile.style.transform = "rotate(180deg)";
        
    } else {
        companyArrowMobile.style.transform = "rotate(0deg)";
    }
})



//open menu
function openMenu() { 
    if (document.getElementById("headerMobile").style.display === "flex") {
        document.getElementById("headerMobile").style.display = "none";
        hamburgerBtn.style.display = "block";
        closeBtn.style.display = "none";
       
    } else {
        document.getElementById("headerMobile").style.display = "flex";
        hamburgerBtn.style.display = "none";
        closeBtn.style.display = "block";
    }
}

