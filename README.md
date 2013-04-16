# JavaScript namespace demo

Unfortunately, the current JavaScript version does not include namespaces (although future versions probably will), which are ideal for separating functionality into separate containers. This demo applications hows how to simulate namespaces in JavaScript.

## Implementation
The basic gist is that you can use the dot notation (used when accessing properties) to mimic how namespaces are usually defined. Basically, what we will be doing is creating global objects with sub-namespaces being defined as properties.

It is best to show this with an example. Let us suppose that we want to create two functions, `upperCase` and `lowerCase`, in the namespace **helpers.strings**. We start with creating a variable which names corresponds to the first parts of the namespace (**helpers**):
    
    // Create the root object of the namespace
    var helpers = helpers || {};

The `helpers || {}` statement is a basically a little trick that ensures that when the `helpers` variable is already defined, it is not created again. If `helpers` does not exist, it is instantiated as an empty object.

The second step is to create the sub-namespace **strings**, which adds a `strings` property to our `helpers` variable using the same instantiation trick:

    // Create the sub-namespace
    helpers.strings = helpers.strings || {};

At this point we are ready to add the functions to the namespace. We do this by adding them to our `helpers.strings` instance:

    helpers.strings.upperCase = function (stringToConvert) {
        return stringToConvert.toUpperCase();
    };

    helpers.strings.lowerCase = function (stringToConvert) {
        return stringToConvert.toLowerCase();
    };

At this point we are done with creating our namespace and can start using it. This is actually very simple:

    // Call the helper function in the "helpers.strings" namespace
    helpers.strings.upperCase(alertString)

## License
[Apache License 2.0](LICENSE.md)