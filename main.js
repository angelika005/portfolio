// For school projects list
var buttonSchoolList = document.querySelector(".school_projects_button")
var schoolListContent = document.querySelector(".school_projects_content")

// For labs list
var buttonLabsList = document.querySelector(".it_labs_button");
var labsListContent = document.querySelector(".it_labs_content")

function ToggleSchoolListVisibility(){
    schoolListContent.classList.toggle("hide")
}

function ToggleLabsListVisibility(){
    labsListContent.classList.toggle("hide")
}

buttonSchoolList.addEventListener('click', ToggleSchoolListVisibility)
buttonLabsList.addEventListener('click', ToggleLabsListVisibility)