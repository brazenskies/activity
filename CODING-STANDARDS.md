
# zadar-ui() {

## Table of Contents

  1. [General](#general)
  2. [Variables](#variables)
  3. [Objects](#objects)
  4. [Functions](#functions)
  5. [React](#react)
  6. [Unit Testing](#testing)
  7. [Documentation](#documentation)
  8. [Contibutors](#contributors)


## General

  - [1.0](#general)  **General Styles**: Basic general zadar-ui styles

    Use 4 spaces for indentation
    
    ```javascript
    //Good
    function foo() {
        //I've been indented with 4 spaces!
    }
    
    //Bad
    function foo() {
               //ridiculous, wild indent
    }
    ```
    
    
    Try to keep line length to a maximum of 100 characters (or thereabouts).  This is simply a guide and can be ignored if your line is 105 characters for example
    
    ```javascript
    //Good
    var longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ut labnnny";
    
    //Also acceptable
    var longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e ut labnnny conir";
    
    //Better
    var longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        + "do e ut labnnny conir";
        
    //Bad
    var longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labew fLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labewrf efbr";
    ```
    
    
    
    Use leading operators when splitting a long line of code...
    
    ```javascript
    //Good
    value: this.props.value 
        || (this.props.valueLink && this.props.valueLink.value)
        || this.props.defaultValue 
        || '';
        
    //Bad
    value: this.props.value ||
        (this.props.valueLink && this.props.valueLink.value) ||
        this.props.defaultValue ||
        '';
    
    //Also bad
    value: this.props.value || (this.props.valueLink && this.props.valueLink.value) || this.props.defaultValue || '';
    ```
    
    
    
    
    
    Use trailing commas instead of leading commas
    
    ```javascript
    //Good
    var myObect = {
        name: "Greg",
        age 33,
        weight: undefined,
    }
    
    //Bad
    var myObect = {
        name: "Greg"
        , age 33,
        , weight: undefined,
    }
    ```
    
    Use an additional trailing comma after the last object attribute.  Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don't have to worry about the trailing comma problem in legacy browsers.
    
     ```javascript
    //Good
    var myObect = {
        name: "Greg",
        age 33,
        weight: undefined,
    }
    
    //Try to avoid
    var myObect = {
        name: "Greg",
        age 33,
        weight: undefined
    }
    ```
    
    Feel free to convert your .js files to .jsx in order to take advantage of fully supported ES6 features
    
    
    
    Use dot notation where possible.  Bracket notation is perfectly acceptable for variable property names
    ```javascript
    //Good
    function foo() {
        var user = {
                name: 'Greg Young',
                age: 33
            },
            newAge;

        newAge = user.age
    }
    
    //Bad - unless the property you're accessing is a variable
    function foo() {
        var user = {
                name: 'Greg Young',
                age: 33
            },
            newAge;

        newAge = user[age];
    }
    ```
    
    
    
    
    Minimal use of jQuery.  Always try to use native JS
    ```javascript
    //Good
    var el = document.querySelector(".assetTable"),
        tableHead = el.querySelector("thead");
    
    //Bad
    var $el = $(".assetTable"),
        $tableHead = $el.find("thead");
    ```    
    
    
    
    
    
    Where possible use single quotes for strings.  'Hello'.  When you have a string with apostrophes you can escape them.  On occasion it makes sense to be consistent with the rest of a file, but it's preferable to update all strings to use single quotes as you find them 
    
    ```javascript
    //Good
    function foo() {
        var myString = 'Hello,  I\'m a string!';
    }
    
    //Not so good
    function foo() {
        var myString = "Hello,  I'm an \"EPIC\" string!";
    }
    ```
    
    Follow standard coding/programming conventions where possible
    
    ```javascript
    _doSomething: function () {} - An inferred private function
    AssetItem - UpperCamelCase for classes
    aVariable - lowerCamelCase for variable names
    RESPONSES - UPPERCASE for constants
    etc
    ```
    
    
    
    Use verbs for functions and methods...
    
    ```javascript
    //Good
    isMounting: function () {
        return true;
    }
    
    //bad
    mounting: function () {
        return true;
    }
    ```
    
    Avoid verbs for other values...
    
    ```javascript
    //Good
    mounting: true;
    
    //bad - a property
    isMounting: true;
    ```


    
 
**[⬆ back to top](#table-of-contents)**














## Variables

  - [2.0](#variables)  **Single var pattern**
  
    Always declare ALL variables at the top of the function scope (single var pattern)
    
    ```javascript
    //Good
    function foo() {
        var i = 0,
            name = 'Greg',
            age = 33,
            weight, height, nationality;
            
        if (name === 'Greg') {
            nationality = 'British';
        }
    }
    
    //Bad
    function foo() {
        var i = 0,
            name = 'Greg',
            age = 33,
            weight, height;
            
        if (name === 'Greg') {
            var nationality;
            nationality = 'British';
        }
    }
    ```
    
  - [2.1](#variables)  **Variable Declaration**
    
    All assigned variables should be on a new line.  Optionally use blank lines between groups of variables if it makes sense to do so.
    
    ```javascript
    //Good
    function foo() {
        //A group of variables defining person properties
        var nationality = 'British',
            age = 33,
            weight = undefined,
            height = 193,
            
            //Another distinct group of vars with a blank line between
            weather = 'sunny',
            temperature = '18',
            unit = 'c',
            date = Date.now();  
    }
    
    //Bad
    function foo() {
        var nationality = 'British', age = 33, weight = undefined,
            weather = 'sunny',
            height = 193,
            
                temperature = '18',unit = 'c',
            date = Date.now()
    }
    ```
    
    All unassigned variables should be on the same line, comma separated, with a space after each, but may be split onto multiple lines if the list of unassigned variables becomes too long. They may also be logically grouped
    
    ```javascript
    //Good
    function foo() {
        var nationality = 'British',
            age = 33,
            height, weight, temperature, unit, time;
    }
    
    //Also good - a blank line between logically grouped variables.  Add a comment if required
    function foo() {
        var nationality = 'British',
            age = 33,
            height, weight,
            
            //Vars relating to atmosphere
            temperature, unit, time;
    }
    ```

    Avoid using underscores in JS variable names. This isn't python!
    
    ```javascript
    //Good
    var firstName = 'Greg',
        lastName = 'Young';
        
    //Bad
    var first_name = 'Greg',
        last_name = 'Young;
    ```
    
    
    
    Always add a blank line after variable declaration before starting any method logic for the sake of readability
    
    ```javascript
    //Good
    function foo() {
        var nationality = 'British',
            age = 33;

        if (age === 33) {
            //Do something
        }
    }
    
    //Bad
    function foo() {
        var nationality = 'British',
            age = 33;
        if (age === 33) {
            //Do something
        }
    }
    ```
    
**[⬆ back to top](#table-of-contents)**













## Objects

  - [3.0](#objects)  **Working with user defined objects**
    
    Where possible we should avoid quotes around property names
    
    ```javascript
    //Good
    this.setState({
        loading: true,
        numAssets: 15,
        name: 'My collection',
    });
    
    //Bad (Unless there's a good reason to do so)
    this.setState({
        'loading': true,
        'numAssets': 15,
        'name': 'My collection',
    });
    ```
    
    
    When specifying object properties each property should be on a new line
    
    ```javascript
    //Good
    this.setState({
        loading: true,
        numAssets: 15,
        name: 'My collection',
    });
    
    //Bad
    this.setState({
        loading: true, numAssets: 15, name: 'My collection'
    });
    ```
    
    Exceptions can be made when there's a single property or a small number of shorthand properties
    
    ```javascript
    //Good
    this.setState({ loading: true });
    
    //Also ok
    this.setState({ name, age });
    ```
    
    

**[⬆ back to top](#table-of-contents)**
















## Functions

**[⬆ back to top](#table-of-contents)**

  - [4.0](#functions)  **Functions**

    Avoid using function expressions where possible, and consider using function declarations instead.  This makes the functions easier to identify in call-stacks.
    
    Use Arrow Functions where possible (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
    
    Never name a paramenter 'arguments' as this will take precedence over the arguments object that is given to every function scope.
    
  - [4.1](#functions)  **function style**
  
    Always add a space between brackets and opening braces
    
    ```javascript
    //Good
    doSomething: function () {
        //Code
    }
    
    //Bad
    doSomething:function (){
        //code
    }
    ```
    
    Always add a single blank line between distinct blocks of code and a blank line before return statements
    ```javascript
    //Good
    function fib (n) {
        if (n < 2) {
            return 1;
        }

        return fib(n - 1) * fib(n - 2);
    }
    
    //Bad (unless there's a good reason to do so)
    function fib (n) {
        if (n < 2) {
            return 1;
        }
        return fib(n - 1) * fib(n - 2);
    }
    ```
    
    Functions should always have their body on a new line.  Exceptions can de made for functions with a single line of code but you should consider using arrow functions for this
    
    ```javascript
    //Best
    var sayHi = name => 'hi ' + name;
    
    //Good
    function sayHi (name) {
        return 'hi ' + name;
    }
    
    //Less good, but acceptable
    function sayHi (name) { return 'hi ' + name; }
    
    //Bad, very bad!
    function doSomething () { var a, b, c; b = 1, c = 3; a = b + c; return a; }
    ```
    
    


## React - WIP (More to come)

  - [5.0](#react)  **ReactJS style guide**
  
    When creating a ReactClass group methods firstly by built-in react components in order of their lifecycle, followed by user-defined methods.  
    
    ```javascript
    //Good
        React.createClass({
            displayName : 'AssetItem',
            
            getInitialState: function() {},
            
            componentWillMount: function() {},
            
            componentWillUnmount: function() {},
            
            render: function() {},
            
            myCustomfunction1: function () {},
            
            myCustomfunction2: function () {}
        });

    //Bad
        React.createClass({
            displayName : 'AssetItem',
            
            render: function() {},
            
            componentWillUnmount: function() {},
            
            getInitialState: function() {},
            
            myCustomfunction2: function () {},
            
            myCustomfunction1: function () {},
            
            componentWillMount: function() {} 
        });
    ```
    
    Use self-closing tags where possible
    
    ```javascript
    //Good
    <assetItem />
        
    //Avoid
    <assetItem></assetItem>
    ```
    
    
    
  
    When instantiating a React component always add each attribute onto a new line.  Exceptions can be made when there's only 1 or 2 small attributes

    ```javascript
    //Good
    <AssetItem
        id='asset3'
        key='asset3'
        ref='asset3'
        model={assetModel}
        job={job} />
        

    //Also acceptable
    <AssetItem id='asset3' />
    
    or...
    
    <AssetItem id='asset3' key='asset3'/>
        
    //Bad
    <AssetItem id='asset3' key='asset3' ref='asset3' model={assetModel} job={job} />
    ```

**[⬆ back to top](#table-of-contents)**





## Unit Testing

**[⬆ back to top](#table-of-contents)**

  - [6.0](#testing)  **Unit Testing**
  
    It's imperative that any new JavaScript written is supported by unit tests.  This also goes for changes to existing code.  
    
    Tests live in a ‘test’ subdirectory inside the directory with their component
    
    To run the tests you have 2 options from within zadar-ui repo...
    
    ```
    Headless mode:  "Grunt test"
    Headed mode:  "./node_modules/karma/bin/karma start karma/dev.conf.js"
    ```
  
    Do not use jQuery in tests unless absolutely necessary. This should pretty much be never, with the possible exception of `$.ajax`
    
    Mockjax is no longer supported.  Use testUtils.js/Sinon methods instead.  If you come across Mockjax being used and you have time, refactor it out.
    
    Use Utils.setupMocks() to setup and cleanup multiple mocks at once (xhr, promise, clock, etc)
    
    ```javascript
    var Utils = require('utils/testUtils')
    
    beforeEach(function () {
        var mocks;
        mocks = Utils.setupMocks(this, 'server clock promise');
    });
    ```
    
    Always tear down your tests by using the afterEach hook

    ```javascript
    afterEach(function () {
        mocks.restore()
        Model.emptyAllModelCaches();
    });
    ```
    
    Add an extra indent for all assertions for easy readability.  Consider using blank lines before/after blocks of assertions
    
    ```javascript
    //Good - Do this...
    it("should do something cool", function () {
        var numRequests = 1,
            checkRequests = mocks.requests.length;
            
            //Here comes my assertion with an extra indent for readability
            assert.equal(numRequests, checkRequests, "Number of requests is correct");
        
        function.....
    });
    
    //Not so good - Avoid doing this...
    it("should do something cool", function () {
        var numRequests = 1,
            checkRequests = mocks.requests.length;
            
        //Here comes my assertion without an extra indent for readability
        assert.equal(numRequests, checkRequests, "Number of requests is correct");
        function.....
    });
    
    ```
    



## Documentation

**[⬆ back to top](#table-of-contents)**

  - [7.0](#documentation)  **JSDocs**
    
    Add JSDocs for all user-defined functions.  Simply add an override doc for any overrides which are not immediately obvious. E.g. we can skip @override for getResources(), componentDidUpdate(), render(), etc.
    
    ```javascript
    //Bad
    myCrazyComplicatedMethod: function (name, age, height) {
        //Lots of lines of non-obvious code
    }
    
    //Good
    /**
     * This function take some parameters, calculates a match and returns a Person Model
     * @param  {string}         [name] Name of the person we're going to calculate
     * @param  {int}            [age] Age of the person we're going to calculate
     * @param  {string}         [height] Height of the person we're going to calculate
     * @return {Model.Person}   A person model of the calculated result
     */
    myCrazyComplicatedMethod: function (name, age, height) {
        //Lots of lines of non-obvious code
    }
    ```




## Contributors

  - [8.0](#contributors)  **People who care enough to make this document**
    

    - **Greg Young**
    - **Daniel Ghita**

**[⬆ back to top](#table-of-contents)**

# };
