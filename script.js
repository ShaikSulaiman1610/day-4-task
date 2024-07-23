// 1) create your own resume data in json format
           

var resumeData = {
    "name": "Shaik Sulaiman",
    "age": 22,
    "languages": ["Tamil", "English"],
    "profession": "Student",
    "school": "Muhiydeen Matriculation Higher Secondary School",
    "college": "Aalim Muhammed Salegh College of Engineering",
    "skills": ["JavaScript", "Git & GitHub", "MS Office", "Reading", "Writing", "Playing Soccer"],
    "contact": {
        "email": "shaiksulaimannoor@gmail.com",
        "phone": "+91 8754881610",
        "address": "138, Sethu Raja Street"
    }
};




// 2) for above the json ,iterate over all for loops(for , for in , for of , forEach)


// Using for loop
    var resumeData = {
        "name": "Shaik Sulaiman",
        "age": 22,
        "languages": ["Tamil", "English"],
        "profession": "Student",
        "school": "Muhiydeen Matriculation Higher Secondary School",
        "college": "Aalim Muhammed Salegh College of Engineering",
        "skills": ["JavaScript", "Git & GitHub", "MS Office", "Reading", "Writing", "Playing Soccer"],
        "contact": {
            "email": "shaiksulaimannoor@gmail.com",
            "phone": "+91 8754881610",
            "address": "138, Sethu Raja Street"
        }
    };

    for (var key in resumeData) {
        console.log(key + ": " + resumeData[key]);
    }
    

// Using for...in loop
    for (var key in resumeData) {
        console.log(key + ": " + resumeData[key]);
    }


// Using for...of loop for arrays
    for (var i in resumeData.languages) {
        console.log(resumeData.languages[i]);
    }        


// Using forEach loop for arrays
    resumeData.skills.forEach(function(skill) {
        console.log(skill);
    });

    