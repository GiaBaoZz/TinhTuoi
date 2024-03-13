
let button = document.getElementById('click');

button.addEventListener('click', function() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');

    output.style.display = 'block';
    
    let oldSpan = document.getElementsByTagName('span')[0];
    
    if (oldSpan != null) {
        oldSpan.remove();
    }

    let newSpan = document.createElement('span');
    newSpan.innerHTML = input.value;
    newSpan.classList = 'h5';
    output.appendChild(newSpan);
}); 
