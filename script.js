const buttonFeatures = document.getElementById("Features");
const features = document.getElementById("FeaturesContent");
const buttonCompany = document.getElementById("Company");
const company = document.getElementById("CompanyContent");
const featuresArrow = document.getElementById("FeaturesArrow");
const companyArrow = document.getElementById("CompanyArrow");
const hamburgerBtn = document.getElementById("menu");
const closeBtn = document.getElementById("closeMenu");


//open and close
buttonFeatures.addEventListener("click", function(){
    if(features.style.display === "none"){
        features.style.display = "flex";
        company.style.display = "none";
    }else{
        features.style.display = "none";
    }
})

buttonCompany.addEventListener("click", function(){
    if(company.style.display === "none"){
        company.style.display = "flex";
        features.style.display = "none";
    }else{
        company.style.display = "none";
      
    }
})


//rotate arrow
buttonFeatures.addEventListener("click", function(){
    if(featuresArrow.style.transform === "rotate(0deg)"){
        featuresArrow.style.transform = "rotate(180deg)";
    }else{
        featuresArrow.style.transform = "rotate(0deg)";
    }    
})

buttonCompany.addEventListener("click", function(){
    if(companyArrow.style.transform === "rotate(0deg)"){
        companyArrow.style.transform = "rotate(180deg)";
    }else{
        companyArrow.style.transform = "rotate(0deg)";
    }    
})


//hamburger menu
hamburgerBtn.addEventListener("click", function(){
    if (hamburgerBtn.style.display === "block"){
        hamburgerBtn.style.display = "none";
        closeBtn.style.display = "block";
    }else{
        hamburgerBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
})

closeBtn.addEventListener("click", function(){
    if (hamburgerBtn.style.display === "none"){
        hamburgerBtn.style.display = "block";
        closeBtn.style.display = "none";
    }else{
        hamburgerBtn.style.display = "none";
        closeBtn.style.display = "block";
    }
})