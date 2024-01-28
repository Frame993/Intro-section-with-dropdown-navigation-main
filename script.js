const buttonFeatures = document.getElementById("Features");
const features = document.getElementById("FeaturesContent");

const buttonCompany = document.getElementById("Company");
const company = document.getElementById("CompanyContent");



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