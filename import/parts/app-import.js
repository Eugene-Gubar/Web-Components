
// =============================================================================
// The anonymous function show scope. Start init project
// =============================================================================
(function () {

    // Create definition and prototyping
    var appImportComponentProto = Object.create(HTMLElement.prototype);

    // Call the callback function, clone and paste template #appImport content in custom element (<app-import></app-import>)
    appImportComponentProto.createdCallback = function () {
        var template = document.querySelector('#appImport');

        this.appendChild(document.importNode(template.contant, true));
    };

    // Register and init element
    document.registerElement('app-import', {
        prototype: appImportComponentProto
    });

})();