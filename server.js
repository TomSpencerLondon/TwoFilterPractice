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
    { name: 'Broadly', tier: 'low', logo: 'chinese-new-year.png',
    problems: [{ name: 'Software Creation'} ], industry: { name: 'Finance'}, video: 'https://www.youtube.com/watch?v=THdZRpFacZY&feature=youtu.be',
      book: 'https://github.com/indrabasak/Books/blob/master/Kubernetes%20in%20Action.pdf'},
    { name: 'Cindo', tier: 'high', logo: 'chinese-new-year.png',
    problems: [{ name: 'Software Creation'}], industry: { name: 'Transport' } },
    { name: 'Drive', tier: 'medium', logo: 'chinese-new-year.png',
    problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice' }],
    industry: { name: 'Health' } },
    { name: 'Areana', tier: 'medium', logo: 'chinese-new-year.png',
    problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice'}],
    industry: { name: 'Fashion' } },
    { name: 'Cindo', tier: 'high', logo: 'chinese-new-year.png',
    problems: [{ name: 'Software Creation'}], industry: { name: 'Transport' }, video: 'https://www.youtube.com/watch?v=THdZRpFacZY&feature=youtu.be' },
    { name: 'Drive', tier: 'medium', logo: 'chinese-new-year.png',
    problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice' }],
    industry: { name: 'Health' } },
    { name: 'Areana', tier: 'medium', logo: 'chinese-new-year.png',
    problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice'}],
    industry: { name: 'Fashion' } },
    { name: 'Cindo', tier: 'high', logo: 'chinese-new-year.png',
      problems: [{ name: 'Software Creation'}], industry: { name: 'Transport' } },
    { name: 'Drive', tier: 'medium', logo: 'chinese-new-year.png',
      problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice' }],
      industry: { name: 'Health' } },
    { name: 'Areana', tier: 'medium', logo: 'chinese-new-year.png',
      problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice'}],
      industry: { name: 'Fashion' }, video: 'https://www.youtube.com/watch?v=THdZRpFacZY&feature=youtu.be' },
    { name: 'Cindo', tier: 'high', logo: 'chinese-new-year.png',
      problems: [{ name: 'Software Creation'}], industry: { name: 'Transport' } },
    { name: 'Drive', tier: 'medium', logo: 'chinese-new-year.png',
      problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice' }],
      industry: { name: 'Health' } },
    { name: 'Asos', tier: 'medium', logo: 'chinese-new-year.png',
      problems: [{ name: 'Software Modernisation'}, { name: 'Software Creation'}, { name: 'Expert Advice'}],
      industry: { name: 'Fashion' }, video: 'https://www.youtube.com/watch?v=THdZRpFacZY&feature=youtu.be', book: 'https://github.com/indrabasak/Books/blob/master/Kubernetes%20in%20Action.pdf' }
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
