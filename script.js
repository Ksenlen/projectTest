const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElement = function (text) {
    if (this.selector[0] == '.') {
        const div = document.createElement('div');
        div.classList.add(this.selector.slice(1));
        div.textContent = text;
        div.style.cssText = `
       height:${this.height}px;
       width:${this.width}px;
       background-color:${this.bg};
       font-size:${this.fontSize}px`;
        document.body.prepend(div);
    }
    if (this.selector[0] == '#') {
        const newP = document.createElement('p');
        newP.setAttribute('id', this.selector.slice(1));
        newP.textContent = text;
        newP.style.cssText = `
       height:${this.height}px;
       width:${this.width}px;
       background-color:${this.bg};
       font-size:${this.fontSize}px`;
        document.body.prepend(newP);
    };
}

const domElement1 = new DomElement('.set', 100, 100, 'red', 40);
domElement1.createElement('что-то пишу');
