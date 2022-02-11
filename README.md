# Reactjs

1. What is React?
    - It is a template by React Team to create a react project with production-ready structure.
    - React is a Javascript library that we use to create interactive website and uses interfaces.
    - It makes easy to understand and create a single page application(SPA's) for short.
        - Single page
            - The server only need to send a single HTML Page to browser to run full functionality.
            

    ![image](https://user-images.githubusercontent.com/89001655/133786030-ac23d212-3974-4c8e-83f7-216b11d90a32.png)

    - here then react takes over and manages whole website in browser including any kind of data or using interactivity such as ClickEvent, routing etc.

    - the pages are not changes, the current page will change on the click of next event.

    ![image](https://user-images.githubusercontent.com/89001655/133787279-5ffdc346-8269-4aaf-af00-038e36f39eef.png)

    - we are gonna learn all the fundamental of react, from using state, react router, fetch data, react hooks.

    - You need to have some basic knowledge of HTML, CSS and Javascript because we are going to use this functionality together.

    - we are using VS Code, easy to use and do git-> pull, commit, push, etc.

    - download the snippet in vscode from extensions.
        - Simple React Snippets

        ![image](https://user-images.githubusercontent.com/89001655/133788417-193dc4ee-3c53-42e1-9ae7-e89e4c7fed1a.png)

    - Now go to setting
        - search for Emmet and add this
            - this will be used like when we write .hello then it will create a div of class hello.

            ![image](https://user-images.githubusercontent.com/89001655/133788802-2cbb6c0b-1b8c-48d6-b9d9-a66f9dc4a1a7.png)

2. Creating a react app
    - it is a command to run and create a react app by it's own.
        - we need latest node version for this
            - go to cmd
            - node -v (to check version)
        - go to directory in which you want to install the react app with modules.
            - cd [path]
             [nodejs command] [create app with global installation] [appname(in-small-case)]
            - npx create-react-app blogixlive
            - enter (may take 5 minutes)
            - go to the directory[appname]
            - let's play with this.
    
    - let's look all the files we have got!
        - node_modules
            - this is where our project dependencies live 
            - including the react library
            - we don't have to do anything inside it!.
        - public
            - all the public files even html file.
            - open index.html where we are injecting our javascript code i.e div tag with some id.
        - source(SRC)
            - probably 99% of the code you are working on is inside SRC folder
            - all the component we are making in this folder only
            - as an example we can take app.js in this folder
            - we have every kind of file present here.
            - index.js is the file which will kickstart our application
                - this file will take all the DOM code and inject inside the index file
                - it contains the APP component and rendering it to the DOm in 'root' id look same in index.html in public folder
                - it uses <React.StrictMode> to additional check during development and show them on  console, and mark them as error.
            - some kind of svg icon or image files.
            - reportwebvitals it is kind of performance file
            - we are going to delete some files that we are not gonna use!
                - App.test.js
                - reportWebVitals.js
                    - inside index file remove
                        - import reportWebVitals from './reportWebVitals';
                        - reportWebVitals();
                - setupTests.js
        - gitignore for version control
        - package.json
            - dependencies
                - it is having all the dependencies on which our app depends on.
            - Scripts
                - we can use the script to preview our application in browser or server or for production
            - etc
    - To preview our project in the browser
        - go to terminal in vscode or press ctrl + t    
        - we are going to run the script that we saw

        # to run the script 
        - check the location or change it according to your path
            - [path/project/projectname] npm run [script-name]
            - npm run start (may take 2 to 3 minutes)
            - it will automatically start a local develpoment server to preview the web app.
            - it will automatically open the server and the preview page for you
            - go to check inside inspect
            - ctrl + s to save and it will reload automatically.
        - done

3. Components & Templates
    - Component
        - Components are the building block of any react app, or beating heart of the react app.
        - and a typical web page may be made of sevral different components.
        - components are self contained sections of content.
            - for example
                - top navigation bar can be a component.
                - blog or any side navigation may be a component
                - it is like the flutter which contains number of n number of widget.
        - the basic job for us is to create the component and render it to the DOM and show on to the web page
            - component contains
                - Template
                - Logic
        - if you go and see the app.js file where all the data is present at the moment, it contains some HTML element but it is not a HTML element, it is a JSX it has some syntax that are identical to HTML.
            - JSX allows us to create this style templates with JAVASCRIPT in Components, in background babel do all the converting job of this file to render and show it to the browser.
        - we ar eusing className as a class to make it uniques because as you know in the END javascript also contains Class.
            - while rendering it will be converted to class, you can see that in Inspect in browser.
        - let's headup to the app.js and clear some data that we will going to work in different way.
            - remove the data [inside] the div class.
            - remove logo importer->
                - import logo from './logo.svg'; (remove this)
            - add a div of content type
                    - shortcut->
                        - div.content and tab (from snippets)
                    - inside div
                        - add h1
                            - App Component   
                    - then open terminal then
                        - npm run start 

4. Dynamic Values in Template
    - we can dynamically output the value of any variable.
    - we can use this as a general way but, what if there are a lot of values that are going to be changed dynamically.
    - we will use const [variablename] = [any-string]; to declare a variable  inside the APP function and return inside the return as <h1>{ variablename } </h1>.
    - React will know that we are return a variable dynamiclly and it will look for the variable value.
    - even when we use the number as a variable value, even then react will transfer or convert it to the string first then show us the output!.
    - the only thing we can't output is boolean or objects.

    - exampple->
    
        import './App.css';

        function App() {
        const title = 'Welcome to the TechWorld!';
        const likes = 50;
        // const person = {name: 'Nayan', age: 23}; //error
        const 
        return (
            <div className="App">
                <div className="content">
                    <h1>{ title }</h1>
                    <p>liked { likes } times</p>
                    {/* <p>person details { person }</p> //error */}
                </div>
            </div>
        );
        }

        export default App;
    
    - run it npm run start

    - we can also write some dynamic values inside the {}, anything like number, string, array, or any method like math module to take random number and multiply it!.
    - example
        
        
        import './App.css';

        function App() {
        const title = 'Welcome to the TechWorld!';
        const likes = 50;
        // const person = {name: 'Nayan', age: 23}; //error
        return (
            <div className="App">
            <div className="content">
                <h1>{ title }</h1>
                <p>liked { likes } times</p>

                {/* <p>person details { person }</p> //error */}

                <p>{ 10 }</p>
                <p>{ "Hello form anyone!" }</p>
                <p>{ [10, 20, 30, 40, 50] }</p>
                <p>{ Math.random() * 5 }</p>
            </div>
            
            </div>
        );
        }

        export default App;

        - ctrl + s (reload)
        - now reload the page the value will be changed

    - we can use dynamic values in anchor tag
        - create an variable for any link like google.com
        - and use it like this

            
            import './App.css';

            function App() {
            const title = 'Welcome to the TechWorld!';
            const likes = 50;
            // const person = {name: 'Nayan', age: 23}; //error

            const link = "https://google.com";

            return (
                <div className="App">
                <div className="content">
                    <h1>{ title }</h1>
                    <p>liked { likes } times</p>

                    {/* <p>person details { person }</p> //error */}

                    <p>{ 10 }</p>
                    <p>{ "Hello form anyone!" }</p>
                    <p>{ [10, 20, 30, 40, 50] }</p>
                    <p>{ Math.random() * 5 }</p>

                    <a href={link}> google site</a>
                </div>
                
                </div>
            );
            }

            export default App;
        
5. Multiple Components
    - basically if we go deep inside the reactjs app rendering process.
    - we will get to know their is only one file which rendered inside the react app.
    - app.js is a root file
    - like if we want to add a new file we need to add inside the app.js like a tree structure.

        ![image](https://user-images.githubusercontent.com/89001655/133907999-94f91528-7f26-49a7-9f0b-6831d016c1d1.png)

    - now we will create the navigation bar to navigate the pages in one page.

    - remove the last code, to use this code

    - now let's create a new file in src folder named as Navbar.js.
    - we are going to use snippet 
        - type SFC(stateless functional component) and tab
        - it will create a stateless functional component
        - give a name and copy and paste it to the export part.
        - use nav.navbar to create a class with className="navbar".
        - write heading 
            - <h1>Blogix.live</h1>
            - add a div for links
                - div.links
        - add a anchar tag (this will not work it is just a demo)
            - <a href="/">Home</a>
            - <a href="/create">New Blog</a>
    
    - now we need to export the navbar and import it into the App.js and nest it inside the App function.
        - import
            - import Navbar from './Navbar';
        - use it above content div (like this)
            - <Navbar /> (self closing tags)

        - run it 

        ![image](https://user-images.githubusercontent.com/89001655/133908346-a09229de-2fc9-4ff5-90f5-6c146d0f2934.png)


    - now let's create a new file Home.js for the individual content of the home page.
        - add this 

            const Home = () => {
                return ( 
                    <div className="home">
                        <h2>Home page</h2>
                    </div>
                );
            }
            
            export default Home;

        - import it inside the app.js, and use it inside the content div
            - <Home /> (self closing tags)



    


