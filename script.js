const buttonFeatures = document.getElementById("Features");
const features = document.getElementById("FeaturesContent");
const buttonCompany = document.getElementById("Company");
const company = document.getElementById("CompanyContent");
const featuresArrow = document.getElementById("FeaturesArrow");
const companyArrow = document.getElementById("CompanyArrow");

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