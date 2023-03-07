import pro1 from "../assets/bank.png";
import pro2 from "../assets/superhero.png";
import pro3 from "../assets/portfolio.png";

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Bank App",
        text: "Customers should be able to create an account, view their account balances, view details of their checking and savings accounts, transfer funds between their checking and savings accounts and  provide customers with a history of their transactions.",
        view: "http://bankfe.s3-website.ca-central-1.amazonaws.com/",
        source: "https://github.com/GraceXinH/bank-app.git",
        function: "Customers should be able to create an account, view their account balances, view details of their checking and savings accounts, transfer funds between their checking and savings accounts and  provide customers with a history of their transactions.",
        intro: "It is a full-stack project. The backend is created by Java and Spring Boot, is secured by Spring security and is multi-layed. The project was including unit test to JPA repository, controller, service. The database is MySQL, and using JPA to manipulate the data. The frontend is implemented by React, and using JWT to login to the server. All pages are responsive.",
        tech: "Spring Boot, React, JWT, Spring Security, MySQL, JUnit5, Mockito, Postman, JDK 17"
    },
    {
        imgsrc: pro2,
        title: "Super Hero",
        text: "This project is used to manager super hero profiles including super power, organization. User can record the super hero sightings with specified location info, and search the sightings by date, location and hero. Each hero can join many organizations, can have many super powers.",
        view: "http://ec2-15-222-241-151.ca-central-1.compute.amazonaws.com:8080/",
        source: "https://github.com/GraceXinH/superHero.git",
        function: "A user should be able to record a superhero sighting for a particular location and date. The system should be able to report all of the superheroes sighted at a particular location. The system should be able to report all locations where a particular superhero has been seen. The system should be able to report all sightings (hero and location) for a particular date.  The system should be able to report all of the members of a particular organization. The system should be able to report all of the organizations to which a particular superhero belongs.",
        intro: "It is a full-stack project, created by Java and Spring Boot, and is multi-layed. The project was including unit test (not for all models). The database is MySQL, and using JDBCTemplate to manipulate the data. The frontend is implemented by ThymeLeaf, and combining the validation. All pages are responsive.",
        tech: "Spring Boot, ThymeLeaf, Spring Validation, MySQL, JUnit5, Postman, JDK 11"
    },
    {
        imgsrc: pro3,
        title: "Portfolio",
        text: "This is a website to represente myself. Home page includes a professional-quality photograph, a link to the profile, a summary of the portfolio project. Profile page includes Full name, a photograph, contact information, a short biography. Project page includes a description of the projects and technologies.",
        view: "http://xportfolio.s3-website.ca-central-1.amazonaws.com",
        source: "https://github.com/GraceXinH/portfolio.git",
        function: "It has home page, project page and profile page. Home page includes a professional-quality photograph, a link to the profile, Links to the selected projects, a summary of the portfolio project. Profile page includes Full name, a professional-quality photograph, contact information, a short biography. Project page includes an overview of the portfolio, the goals of the project, a description of each of the programming projects included in the portfolio, technologies.",
        intro: "It is a website project. It only use front-end technology without database.",
        tech: "React, HTML, CSS, Javascript"
    }
];

export default ProjectCardData;
