const fs = require('fs');
const jdown = require('jdown');

jdown('content', { assets: { output: 'public' } }).then(content => {
	fs.writeFileSync('src/posts.json', JSON.stringify(content), 'utf8');
});
