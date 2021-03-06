
var bio = {
  "name" : "Laura - Anne Fung",
  "role" : "UX Designer",
  "contacts": {
  "mobile" : "1234567890",
  "email" : "lauraannefung@gmail.com",
  "github" : "@laef02",
  "location" : "New York, NY",
  },
  "welcomeMessage": "lLorem ipsum dolor sit amet, consectetur adipiscing elit," + "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" +  "enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" + "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" + "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"+ "occaecat cupidatat non proident, sunt in culpa qui officia deserunt" + "mollit anim id est laborum.",
  "skills" : ["Photoshop", "Sketch", "Python", "Java"],
  "biopic" : "images/profile.jpg"
};




bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedMessage);
  $("#header").append(formattedPic);



  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
   }



   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
   var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);

        $("#topContacts, #footerContacts").append(formattedMobile);
        $("#topContacts, #footerContacts").append(formattedEmail);
        $("#topContacts, #footerContacts").append(formattedGit);
        $("#topContacts, #footerContacts").append(formattedLocation);
        // 
        // $("#footerContacts").append(formattedMobile);
        // $("#footerContacts").append(formattedEmail);
        // $("#footerContacts").append(formattedGit);
        // $("#footerContacts").append(formattedLocation);

};
bio.display();





var education = {
  "schools": [
    {
      "name": "Adelphi University",
      "location": "Garden City, NY",
      "degree": "BFA",
      "majors": "Studio Art",
      "dates" : "2011-2015",
      "url" : "http://www.adelphi.edu/"
    },

  ],
  "onlineCourses": [
    { "title": "Digital Marketing Nanodegree",
     "titleURL" : "https://www.udacity.com/",
     "school": "Udacity",
     "dates": "August 2017",
      "url": "https://www.udacity.com/course/digital-marketing-nanodegree--nd0188"
    },
    {"title": "Introduction to UI Design",
     "titleURL" : "https://www.coursera.org/",
     "school": "Coursera",
     "dates": "August 2017",
      "url": "https://www.coursera.org/learn/ui-design"
    },
    {"title": "User Research and Design",
     "titleURL" : "https://www.coursera.org/",
     "school": "Coursera",
     "dates": "August 2017",
      "url": "https://www.coursera.org/learn/design-research"
    },
    {"title": "Prototyping and Design",
     "titleURL" : "https://www.coursera.org/",
     "school": "Coursera",
     "dates": "August 2017",
      "url": "https://www.coursera.org/learn/prototyping-design"
    },
    {"title": "Evaluating User Interfaces",
     "titleURL" : "https://www.coursera.org/",
     "school": "Coursera",
     "dates": "August 2017",
      "url": "https://www.coursera.org/learn/ui-testing"
    },
    {"title": "Intro to Programming",
     "titleURL" : "https://www.udacity.com/",
     "school": "Udacity",
     "dates": "October 2017",
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {"title": "Visual Design",
     "titleURL" : "https://generalassemb.ly/",
     "school": "General Assembly",
     "dates": "November 2017",
      "url": "https://generalassemb.ly/education/visual-design"
    }
  ]
};



education.display = function() {
  education.schools.forEach(school => {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);

    var formattedDegree = HTMLschoolDates.replace("%data%", school.degree);

    var formattedCity = HTMLschoolLocation.replace("%data%", school.location);

    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);

    var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

    var formattedHead = formattedName + formattedDegree;


      $(".education-entry:last").append(formattedHead);
      // $(".education-entry:last").append(formattedDegree);

      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedCity);
      $(".education-entry:last").append(formattedMajor);

  });

  $("#education:last").append(HTMLonlineClasses);

  education.onlineCourses.forEach(course => {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.titleURL);

    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);

    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);

    var formattedUrl = HTMLonlineURL.replace("%data%", course.url).replace("#",course.url);

    var formattedHeader = formattedTitle + formattedSchool;



      $(".education-entry:last").append(formattedHeader);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedUrl);


  });
};
education.display();




var work = {
  "jobs": [
    {
      "employer" : "Miele Associates, LLP",
      "title" : "Drafter",
      "url" : "http://www.mieleassociates.com/",
      "location" : "Queens, NY",
        "dates" : "2015-2017",
      "description" : "Played key role in designing projects for clients." +  "Created assembly and layout drawings using AutoCAD. Interpreted drawing" + "markups and implemented drawing revisions provided by engineers." + "Generated new ideas with limited direction and varied internal client" + "needs. Presented projects to internal clients."

    },
    {
      "employer" : "Bounce Creative Group",
      "title" : "Junior Graphic Designer",
      "url" : "https://www.linkedin.com/company/5344966/",
      "location" : "New York, NY",
      "dates" : "2015-2016",
      "description" : "Designed new on-brand visual elements to effectively" + "convey concepts and messaging. Maintained consistent use of graphic" + "imagery in materials and other marketing outreach. Formatted text and" + "graphics for blog posts, newsletters and other materials."
    }
  ]
};

work.display = function() {
  work.jobs.forEach(job => {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);
    // var formattedLink = HTMLworkEmployer.replace("#", job.website);

    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);


    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);



  });
};
work.display();







var projects = {
  "projects": [
  {
  "title": "Make A Web Page",
  "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
  "dates": "2017",
  "description": "Built using HTML and CSS, this project demonstrates knowledge of basic website design.",
  "images": ["images/web.jpg", "images/web.jpg"]
  },
  {
    "title": "Create A Movie Website",
    "url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
    "dates": "2017",
    "description": "Created a simple movie website with images and trailers, this project demonstrates knowledge of Object Oriented Programming.",
    "images": ["images/web1.jpg", "images/web1.jpg"]
  }
 ]
};




projects.display = function() {
  projects.projects.forEach(project => {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);

    if(project.images.length > 0) {
      $("#projects").append(HTMLprojectStart);
      var formattedImage = HTMLprojectImage.replace("%data%", project.images[0]);
      $(".project-entry:last").append(formattedImage);
      formattedImage = HTMLprojectImage.replace("%data%", project.images[1]);
      $(".project-entry:last").append(formattedImage);
    }
  });
};


projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);

  });
