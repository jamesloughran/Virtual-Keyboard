(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let spacekey = document.querySelector('.space');
    let backspace = document.querySelector('.backspace');

    let chars = []

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            screen.value += btn.innerText
            chars = screen.value.split('')
        })
    })

    backspace.addEventListener('click', () => {
        chars.pop()
        screen.value = chars.join('')
    })

    spacekey.addEventListener('click', () => {
        chars.push(' ')
        screen.value = chars.join('')
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    });
})();