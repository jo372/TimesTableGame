const app = document.body;

  /** generating the button which will generate time tables. */
function generateButton() {
  let generatedButton = document.createElement('button');
      generatedButton.innerText = "generate timestables";
      generatedButton.addEventListener('click', generateTables);
  
  return generatedButton;
}

function generateNumber() {
  return Math.floor((Math.random() * 12) + 1);
}

function generateTables() {
    /** removing all previous tables */
    app.innerHTML = "";
    
    for(let i=0; i < 10; i++) {
      let multiplier = generateNumber();
      let multiplicand = generateNumber();
      let product = document.createElement('input');
          product.type = "number";
          product.addEventListener('input', function(e) {
            let target = e.target;
            let value = target.value;
            let parent = target.parentElement;
            let equation = parent.innerText.trim().split('x');
            let multiplicand = parseInt(equation[0].trim());
            let multiplier = parseInt(equation[1].replace('=', '').trim());
            
            if(value == (multiplicand * multiplier)) {
              target.classList.remove('incorrect');
              target.classList.add('correct');
            } else {
              target.classList.remove('correct');
              target.classList.add('incorrect');
            }
          }, false);
    let p = document.createElement('p');
        p.innerText = `${multiplicand} x ${multiplier} = `;
        p.appendChild(product);

        app.appendChild(p);
  }
  app.appendChild(generateButton());
}

generateTables();