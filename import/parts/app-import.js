
// =============================================================================
// The anonymous function show scope. Start init project
// =============================================================================
(function () {

    // Import current document
    var importDoc = document.currentScript.ownerDocument;

    // Create definition and prototyping
    var appImportComponentProto = Object.create(HTMLElement.prototype);

    // Call the callback function, clone and paste template #appImport content in custom element (<app-import></app-import>)
    appImportComponentProto.createdCallback = function () {
        var template = importDoc.querySelector('#appImport');
        var root = this.createShadowRoot();
        root.appendChild(document.importNode(template.content, true));
    };

    // Register and init element
    document.registerElement('app-import', {
        prototype: appImportComponentProto
    });

})();