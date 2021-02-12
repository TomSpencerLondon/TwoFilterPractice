let express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
let clients = [
  {name: "Bankable", tier: "low", logo: "https://f.hubspotusercontent00.net/hubfs/8685554/Bankable-logo-only-wheel-154x154.jpg", problems: ["Software Creation"], industry: "Finance", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor mi, fringilla dictum hendrerit sit amet, fringilla sit amet dui. Praesent ullamcorper vitae ex sit amet vestibulum. Fusce pulvinar ligula.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum pretium elit rhoncus ornare. Aenean in nisl ultrices, luctus quam.", case_study: "http://example.com/", video: "http://example.com/"},
  {name: "Cazoo", tier: "high", logo: "https://f.hubspotusercontent00.net/hubfs/8685554/external-content.duckduckgo.com.png", problems: ["Software Creation"], industry: "Transport", testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor mi, fringilla dictum hendrerit sit amet, fringilla sit amet dui. Praesent ullamcorper vitae ex sit amet vestibulum. Fusce pulvinar ligula.", video: "http://example.com/"},
  {name: "eClinicalWorks", tier: "medium", logo: "https://f.hubspotusercontent00.net/hubfs/8685554/eClinicalWorks-logo1.png", problems: ["Software Modernisation", "Software Creation", "Expert Advice"], industry: "Health", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum pretium elit rhoncus ornare. Aenean in nisl ultrices, luctus quam." },
  { name: "Asos", tier: "medium", problems: ["Software Modernisation", "Software Creation", "Expert Advice"], industry: "Fashion" },
  {name: "Mango", tier: "low", logo: "https://f.hubspotusercontent00.net/hubfs/8685554/Bankable-logo-only-wheel-154x154.jpg", problems: ["Software Modernisation", "Software Creation", "Expert Advice"], industry: "Fashion" },
]

let allIndustries = [];
let allProblems = [];
clients.forEach((client) => {
  allIndustries.push(client.industry);
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
