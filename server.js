let express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page


app.get('/', (req, res) => {
  let clients = [
    { name: 'Bankable', tier: 'low', logo: 'bankable.png',
    problems: [{ name: 'Software Creation'} ], industry: { name: 'Finance'} },
    { name: 'Cazoo', tier: 'high', logo: 'cazoo.png',
    problems: [{ name: 'Software Creation'}], industry: { name: 'Transport' } },
    { name: 'eClinicalWorks', tier: 'medium', logo: 'eclinicalWorks.png',
    problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice' }],
    industry: { name: 'Health' } },
    { name: 'Asos', tier: 'medium', logo: 'asos.png',
    problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice'}],
    industry: { name: 'Fashion' } }
  ]

  let allIndustries = [];
  let allProblems = [];
  console.log(clients);
  clients.forEach((client) => {
    console.log(client);
    allIndustries.push(client.industry.name);
    client.problems.forEach((problem) => {
      allProblems.push(problem.name);
    });
  });

  allIndustries = new Set(allIndustries);
  allProblems = new Set(allProblems);


  res.render('pages/index', {
    clients: clients,
    allIndustries: allIndustries,
    allProblems: allProblems
  });
});

app.listen(8080);
console.log('8080 is live!');
