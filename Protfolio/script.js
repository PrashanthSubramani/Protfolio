
$(document).ready(function(){
    LoadingSpinner();
    Hometab();
})

function LoadingSpinner(){
    $("#overlay").fadeIn(300);

    setTimeout(function(){
        $("#overlay").fadeOut(300);
    },500);
}

function HomeActiveTabs(){
    $('#home').addClass('active');
    $('#skill').removeClass('active');
    $('#projects').removeClass('active');
    $('#education').removeClass('active');
    $('#contacts').removeClass('active');
}

function SkillActiveTab(){
    $('#home').removeClass('active');
    $('#skill').addClass('active');
    $('#projects').removeClass('active');
    $('#education').removeClass('active');
    $('#contacts').removeClass('active');
}

function ProjectActiveTab(){
    $('#home').removeClass('active');
    $('#skill').removeClass('active');
    $('#projects').addClass('active');
    $('#education').removeClass('active');
    $('#contacts').removeClass('active');
}


function EducationActiveTab(){
    $('#home').removeClass('active');
    $('#skill').removeClass('active');
    $('#projects').removeClass('active');
    $('#education').addClass('active');
    $('#contacts').removeClass('active');
}


function ContactActiveTab(){
    $('#home').removeClass('active');
    $('#skill').removeClass('active');
    $('#projects').removeClass('active');
    $('#education').removeClass('active');
    $('#contacts').addClass('active');
}



function Hometab(){
    LoadingSpinner();
    HomeActiveTabs();
    document.getElementById("Hometab").style.display = "block";
    document.getElementById("Skilltab").style.display = "none";
    document.getElementById("Projecttab").style.display = "none";
    document.getElementById("Educationtab").style.display = "none";
    document.getElementById("Contacttab").style.display = "none";

}


function Skilltab(){
    LoadingSpinner();
    SkillActiveTab();
    document.getElementById("Hometab").style.display = "none";
    document.getElementById("Skilltab").style.display = "block";
    document.getElementById("Projecttab").style.display = "none";
    document.getElementById("Educationtab").style.display = "none";
    document.getElementById("Contacttab").style.display = "none";
}


function Projecttab(){
    LoadingSpinner();
    ProjectActiveTab();
    document.getElementById("Hometab").style.display = "none";
    document.getElementById("Skilltab").style.display = "none";
    document.getElementById("Projecttab").style.display = "block";
    document.getElementById("Educationtab").style.display = "none";
    document.getElementById("Contacttab").style.display = "none";
}


function Educationtab(){
        LoadingSpinner();
        EducationActiveTab();
        document.getElementById("Hometab").style.display = "none";
        document.getElementById("Skilltab").style.display = "none";
        document.getElementById("Projecttab").style.display = "none";
        document.getElementById("Educationtab").style.display = "block";
        document.getElementById("Contacttab").style.display = "none";
}

function Contacttab(){
    LoadingSpinner();
    ContactActiveTab();
    document.getElementById("Hometab").style.display = "none";
    document.getElementById("Skilltab").style.display = "none";
    document.getElementById("Projecttab").style.display = "none";
    document.getElementById("Educationtab").style.display = "none";
    document.getElementById("Contacttab").style.display = "block";
}