/* All Objects Decleration */
//bio object
var bio = {
    "name": "Norah Alhunti",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0591990291",
        "email": "norah.alhinti@gmail.com",
        "github": "NorahAlhinti",
        "twitter": "@TheOneNorah",
        "location": "Saudi Arabia"
    },
    "welcomeMessage": "Hello to my world!",
    "skills": ["HTML", "CSS", "JS", "Teaching", "Leadership"],
    "biopic": "images/me.jpg"
};

//bio display function 
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    //display footer and header contacts
    $("#header").prepend(formattedName,formattedRole);
    $("#topContacts , #footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
    $("#header").append(formattedbioPic,formattedwelcomeMessage);

    //display skills info
    $("#header").append(HTMLskillsStart);

    for (var skill = 0, len = bio.skills.length; skill < len; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
};


//work object
var work = {
    "jobs": [{
            "employer": "Wipro",
            "title": "Project Engineer",
            "location": "Riyadh",
            "dates": "In progress",
            "description": "CAD Tools Training (Microstation, SmartPlant)."
        },
        {
            "employer": "e-Government program (Yesser)",
            "title": "Web Portals & e-Services Analyst and Assessor",
            "location": "Riyadh",
            "dates": "JUNE, 2015 - AUG, 2015",
            "description": "Summer trainee in Web Portals & e-Services Analysis and Assessment Department at e- Government program (Yasser)."
        }
    ]
};

//display work function
work.display = function() {

    for (var job = 0, len = work.jobs.length; job < len; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle,formattedworkDates,formattedworkLocation,formattedworkDescription);
    }
};

//education object
var education = {
    "schools": [{
        "name": "PNU",
        "location": "Riyadh",
        "degree": " Bachelor's Degree",
        "majors": ["Computer Science", "CS", "Programing"],
        "dates": "2011 - 2016",
        "url": "www.pnu.edu.sa"
    }],
    "onlineCourses": [{
            "title": "The Complete Python Bootcamp: Go from zero to hero in Python.",
            "school": "Udemy",
            "dates": "Feb.23 , 2017",
            "url": "www.udemy.com"
        },
        {
            "title": "Front-End web development nanodegree.",
            "school": "Udacity",
            "dates": "2017",
            "url": "www.Udacity.com"
        }
    ]
};

//education display function 
education.display = function() {
    $("#education").append(HTMLschoolStart);

    for (var school = 0, len = education.schools.length; school < len; school++) {
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedschoolName,formattedschoolDegree,formattedschoolDates,formattedschoolLocation,formattedschoolMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);

    for (var course = 0, l = education.onlineCourses.length; course < l; course++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedonlineURL = HTMLschoolLocation.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineTitle,formattedonlineSchool,formattedonlineDates,formattedonlineURL);
    }
};

//projects object
var projects = {
    "projects": [{
            "title": "SAS: Semi-Automated Scheduling Web Application for Exams Session",
            "dates": "2015 - 2016",
            "description": "Planning and building web application for exams session to simplify and improve the exams scheduling process.",
            "images": ["images/project11.png", "images/project12.png"]
        },
        {
            "title": "The Gallery Books",
            "dates": "2017",
            "description": "The Gallery Books: Is a simple website for reading and finding books Online, you can download the book as a PDF and leave a review about it.",
            "images": ["images/project21.png", "images/project22.png"]
        }
    ]
};

//projects display function
projects.display = function() {
    $("#projects").append(HTMLprojectStart);

    for (var project = 0, len = projects.projects.length; project < len; project++) {
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedprojectTitle,formattedprojectDates,formattedprojectDescription);

        for (var img = 0, l = projects.projects[project].images.length; img < l; img++) {
            var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
            $(".project-entry:last").append(formattedprojectImage);
        }
    }
};

/* functions calls for display */
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
//$("#main").append(internationalizeButton);
