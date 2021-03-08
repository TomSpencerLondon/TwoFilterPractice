let express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
let clients = [
  {name: "Bankable", logo: "https://f.hubspotusercontent00.net/hubfs/8685554/Bankable-logo-only-wheel-154x154.jpg", problems: ["Software Creation"], industry: "Finance", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor mi, fringilla dictum hendrerit sit amet, fringilla sit amet dui. Praesent ullamcorper vitae ex sit amet vestibulum. Fusce pulvinar ligula.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum pretium elit rhoncus ornare. Aenean in nisl ultrices, luctus quam.", case_study: "http://example.com/", video: "http://example.com/", services: ["Specialist Expertise", "Strategic Advice"]},
  {name: "Cazoo", logo: "https://f.hubspotusercontent00.net/hubfs/8685554/external-content.duckduckgo.com.png", problems: ["Lack of Productivity"], industry: "Transport", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor mi, fringilla dictum hendrerit sit amet, fringilla sit amet dui. Praesent ullamcorper vitae ex sit amet vestibulum. Fusce pulvinar ligula.", video: "http://example.com/", services: ["Strategic Advice"]},
  {name: "eClinicalWorks", logo: "https://f.hubspotusercontent00.net/hubfs/8685554/eClinicalWorks-logo1.png", problems: ["Legacy Software"], industry: "Health", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum pretium elit rhoncus ornare. Aenean in nisl ultrices, luctus quam.", case_study: "http://example.com/", video: "http://example.com/", services: ["Specialist Expertise", "Strategic Advice"] },
  { name: "Asos",  problems: ["Lack of Productivity"], industry: "Fashion", services: ["Specialist Expertise"] },
  {name: "Mango", logo: "https://f.hubspotusercontent00.net/hubfs/8685554/Bankable-logo-only-wheel-154x154.jpg", problems: ["Lack of Productivity"], industry: "Fashion", services: "Software Modernisation" },
  {name: "UBS", logo: "https://www.pngjoy.com/pngl/389/7191389_ubs-logo-ubs-investment-bank-logo-hd-png.png", problems: ["Dysfunctional Team"], industry: "Finance", description: "UBS is a global firm", description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum pretium elit rhoncus ornare.", case_study: "https://info.codurance.com/en/best-secret-case-study", services: "Specialist Expertise"},
  {name: "Best Secret", logo: "https://shoplogos.trustedshops.de/Bestsecret-co-uk_20373.jpeg", problems: ["Dysfunctional Team"], industry: "Fashion", description: "Codurance helped us identify the friction and tackle the barriers in our development process, where increased lead times were causing frustration from ideation to release. Their recognised expertise provides us with truthful analysis of our situation, and defined clear solutions to our pain points, ultimately to increase business value.", case_study: "https://info.codurance.com/en/best-secret-case-study", services: ["Specialist Expertise"]},
  {name: "Adevinta", logo: "https://www.adevinta.com/wp-content/themes/scom/assets/img/Adevinta-logo.svg", problems: ["Legacy Software"], industry: "Transport", services: ["Specialist Expertise"]},
  {name: "cxLoyalty", logo: "https://cxloyalty.co.uk/wp-content/uploads/sites/17/2016/07/cxloyalty-logo-big.jpg", problems: ["Lack of Productivity"], industry: "Finance", services: ["Strategic Advice"]},
  {name: "Acuris", logo: "https://www.acuris.com/assets/acuris_logo_1.svg",  problems: ["Legacy Software"], industry: "Finance", services: ["Strategic Advice"]},
  {name: "My Pulse", logo: "https://www.pinclipart.com/picdir/middle/115-1158423_pulse-logos-clipart-logo-pulse-heart-pulse-logo.png", problems: ["Legacy Software"], industry: ["Health"], testimonial: "Codurance is a great partner. Their people really, don't feel like a consultancy and work with us across the full stack (Product, Tech, Infra and even helping us with recruitment). ", description: "MyPulse is a UK based digital healthcare company focusing on making healthcare accessible to the world. We have helped them accelerate their launch in different markets and evolve and future-proof their digital platform for direct consultation between customers and doctors via mobile apps. All through the use of XP best practices, cloud technologies and our functional languages experience.", case_study: "https://info.codurance.com/en-gb/en/mypulse-case-study", services: ["Specialist Expertise"] },
  {name: "Roche", logo: "https://f.hubspotusercontent00.net/hub/8685554/hubfs/roche-1.webp?width=100", problems: ["Lack of Productivity"], industry: "Health", description: "Roche is a Swiss multinational healthcare company that operates worldwide. We are working with them to improve the way they are building the next generation of their digital platforms, helping the team deliver quality systems continuously.", services: ["Strategic Advice"]},
  {name: "Societe Generale", problems: ["Lack of Productivity"], industry: "Finance", services: ["Strategic Advice"]}
]

let allIndustries = [];
let allProblems = [];
clients.forEach((client) => {
  allIndustries.push(client.industry);
  console.log(client);
  client.problems.forEach((problem) => {
    allProblems.push(problem);
  });
});

allIndustries = new Set(allIndustries);
allProblems = new Set(allProblems);

app.get('/', (req, res) => {
  res.render('pages/index', {
    clients: clients,
    allIndustries: allIndustries,
    allProblems: allProblems
  });
});

app.get('/isotope', (req, res) => {
  res.render('pages/isotope', {
    clients: clients,
    allIndustries: allIndustries,
    allProblems: allProblems
  });
});

app.listen(8080);
console.log('8080 is live!');
