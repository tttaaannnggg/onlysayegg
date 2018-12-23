// gets all elements on page
var elements = document.getElementsByTagName('*');

// iterates through each element
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

// selects an element and goes through its children
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

// checks if the child element is just text
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/\b(\w*\w)\b/gi, 'egg');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
