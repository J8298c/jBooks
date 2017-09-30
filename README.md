<h1>jBooks</h1>

## Installation

Download via git

1. Clone the app using the Git clone command
```
  git clone https://github.com/J8298c/jBooks.git
  cd jBooks
  yarn install || npm install 
```
2. Once all the packages are installed your all set up and ready to run jBooks!


## Running jBooks

Once your are in the jBooks directory run the command

```
  yarn start || npm start 
```
This runs the dev server then open your browser and point it to 
<a href="https://localhost:300">https://localhost:3000</a>

<h2> Developers </h2>
## Folder Structure

After creation, your project should look like this:

```
jBooks/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.js
    App.css
    App.test.js
    AppTitle.js
    AppTitle.js
    Book.js
    BookDemo.js
    BooksAPI.js
    index.css
    index.js
    SearchBook.js
    Shelf.js
    Shelves.js
```
<h2>Scripts in package.json</h2>

<ol>
<li>yarn start || npm start : starts the dev server</li>
<li>yarn test || npm test : runs all tests</li>
<li>yarn eject || npm eject : ejects all config files for customization</li>
</ol>