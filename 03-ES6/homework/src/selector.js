var traverseDomAndCollectElements = function(matchFunc, startEl) {
    var resultSet = [];

    if (typeof startEl === "undefined") {
        startEl = document.body;
    }

    // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
    // usa matchFunc para identificar elementos que matchien

    // TU CÓDIGO AQUÍ
    if (matchFunc(startEl)) {
        resultSet.push(startEl)
    }
    for (let i = 0; i < startEl.children.length; i++) {
        let childrenResult = traverseDomAndCollectElements(matchFunc, startEl.children[i])
        resultSet = resultSet.concat(childrenResult)
            // resultSet = [...resultSet, ...childrenResult]
    }
    return resultSet

    /**
     * 
     * body
     *    - div 
     *        -ul
     *           -li
     *    -footer
     * 
     */

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag



var selectorTypeMatcher = function(selector) { // selector = ".class"
    // tu código aquí
    if (selector[0] === "#") return "id";
    if (selector[0] === ".") return "class";
    //-------------------------------
    if (selector.includes(".")) return "tag.class"
    return "tag"
};
// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
    var selectorType = selectorTypeMatcher(selector);
    var matchFunction;
    if (selectorType === "id") {

        matchFunction = function(elemento) {
            return `#${elemento.id}` === selector; //es lo mismo que hacer if ... 
            // if(`#${elemento.id}` === selector){
            //   return true;
            // } else return false ;
        }

    } else if (selectorType === "class") {

        matchFunction = function(elemento) {
            const clases = elemento.classList;
            for (let i = 0; i < clases.length; i++) {
                if (`.${clases[i]}` === selector) {
                    return true;
                }
            }
            return false;
        }

    } else if (selectorType === "tag.class") { // 'div.btn'

        matchFunction = function(elemento) {
            const [tag, clas] = selector.split('.'); //['div','btn'] = 'div.btn'.split('.')
            //const tag = elements[0];
            //const clas = elements[1];  estos dos comentarios son lo mismo que hacer const[tag,clas], se llama destructuring
            const classFn = matchFunctionMaker(`.${clas}`);
            const tagFn = matchFunctionMaker(tag);
            // if(tagFn(elemento)){
            //   if(classFn(elemento)){
            //     return true;
            //   }
            // } else {
            //   return false;
            // }
            return tagFn(elemento) && classFn(elemento);

        }

    } else if (selectorType === "tag") {
        matchFunction = function(elemento) {
            const elementTag = elemento.tagName
            if (selector.toUpperCase() === elementTag) return true
            else return false
        }
    }
    return matchFunction;
};
//                   ".btn"         <div class="clas"></div>
// matchFunctionMaker(selector) => fn(elemento) ==> false

var $ = function(selector) { // selector = "#id"
    var elements;
    var selectorMatchFunc = matchFunctionMaker(selector);
    //selectorMatchFunc(elemn)
    elements = traverseDomAndCollectElements(selectorMatchFunc);
    return elements;
};


// $("body") => Fn  === document.querySelector(".class")

// const otraFn = matchFunctionMaker("nombre")
// otraFn(elemento) // return true "nombre" === elemento