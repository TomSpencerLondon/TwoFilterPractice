let express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
let clients = [
  {name: 'Bankable', video: 'https://www.youtube.com/watch?v=THdZRpFacZY&feature=youtu.be', logo: 'chinese-new-year.png', industry: 'Finance', problems: ['Software Creation'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
      'pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n' +
      'Donec scelerisque sollicitudin enim eu venenatis.', testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n' +
      'pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. \n' +
      'Donec scelerisque sollicitudin enim eu venenatis.', case_study: 'https://github.com/indrabasak/Books/blob/master/Kubernetes%20in%20Action.pdf' },
  {name: 'Asos', industry: 'Fashion', problems: ['Software Modernisation', 'Software Creation', 'Expert Advice'] },
  { name: 'Mango', industry: 'Fashion', problems: ['Software Modernisation', 'Software Creation', 'Expert Advice']},
  { name: 'Cazoo', industry: 'Transport', problems: ['Software Creation'], testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor mi, fringilla dictum hendrerit sit amet, fringilla sit amet dui. Praesent ullamcorper vitae ex sit amet vestibulum. Fusce pulvinar ligula.' },
  { name: 'eClinicalWorks', industry: 'Health', problems: ['Software Modernisation', 'Software Creation', 'Expert Advice'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum pretium elit rhoncus ornare. Aenean in nisl ultrices, luctus quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum pretium elit rhoncus ornare. Aenean in nisl ultrices, luctus quam.'}
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
