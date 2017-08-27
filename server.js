var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
	title: 'Article One'
	heading: 'Article One'
	date: '27/8/17'
	content:`   <p>
					Content blah blah blah
				</p>
				<p>
					More content blah blah blah
				</p>`
}
var articleTwo = {
	title: 'Article Two'
	heading: 'Article Two'
	date: '27/8/17'
	content: `   <p>
					Content blah blah blah
				</p>
				<p>
					More content blah blah blah
				</p>`
}
var articleThree = {
	title: 'Article Three'
	heading: 'Article Three'
	date: '27/8/17'
	content: `   <p>
					Content blah blah blah
				</p>
				<p>
					More content blah blah blah
				</p>`
}
function createTemplate(data){
	title = data.title;
	heading = data.heading;
	date = data.date;
	content = data.content;
var htmlTemplate = `
	<html>
		<head>
			<link href="/ui/style.css" rel="stylesheet" />
			<meta name="vieport" content = "width=device-width, intial-scale=1" />
			<title>
			${title}
			</title>
		</head>
		<body>
			<div class = "container">
				<div>
				<a href="/">Home</a>
				</div>
				<hr/>
				<h4>
				${heading}
				</h4>
				<div>
					${date}
				</div>
				<div>
					${content}
				</div>
			</div>
		</body>			
	</html>
	`;
	return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article-one', function(req, res)	{
  res.send(createTemplate(articleOne));
});
app.get('/article-two', function(req, res)	{
    res.send(htmlTemplate(articleTwo));
});
app.get('/article-three', function(req, res)	{
	res.send(htmlTemplate(articleThree));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
