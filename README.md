Resume printer appliction fellow the below steps for better usage,

import the resume-print in your desired React component

Example : 1
    import Resume from "resume-print";

    let userDetails = {
        userName: 'Kevin Roy',
        role: 'React js Developer',
        about: `I have 4 years of experience in Reactjs, Redux, Bootstrap, AntDesing, CSS, SASS, HTML5 along with
        knowledge on React Native, Nodejs, Expressjs, MongoDB, and Angular2 basics. worked around 5 web
        Applications and 1 cross-platform App, Responsibilities involved in finding the quick Solutions for R&D
        Tasks, and the end to end development.`,
        email: 'kevin.roy@gmail.com',
        phone: '9900990010',
        location: ' Hyderabad',
        linkedinProfileLink: 'https://www.linkedin.com/in/durga-raju-tagulla-60a7a3165/',
        clgName: 'XYZ Hyderbad',
        passedOutYear: '2018',
        majorDegree: 'ECE',
        persantage: '81%',
        skills: ['React js', 'Reudx', 'HTML', 'CSS', 'Javascript'],
        workExperience: [{
            companyName: 'Accolite Digital',
            designation: 'Software Engineer',
            workDuration: 'mar/2018 - feb/2022',
            workingStatus: 'currently Working here'
        },
        {
            companyName: 'Accolite Digital',
            designation: 'Software Engineer',
            workDuration: 'mar/2018 - feb/2022',
            workingStatus: 'currently Working here'
        }],
        projects: [{
            projectName: 'Demo Project',
            projectDuration: 'sep/2021 - feb/2022',
            projectDesc: 'it is video application',
            techknowledgeyUsed: ['React js', 'Reudx', 'HTML', 'CSS'],
            responsibility: 'I am a major developer here',
            touchPoints: ''
        },]
    }

    function App(){
        return(
            <Resume userDetails={userDetails} >
        )
    }

 
>> commands to publish
> npm version patch
> npm publish