var count = 0

function diminui() {
    // window.alert('botão diminui')
    let res = document.getElementById('res')
    if (count == 0) {
        window.alert('The counter do not realize operations under zero.')
    } else {
        count--
        res.innerHTML = `${count}`    
    }
    res.focus()
}

function reset() {
    // window.alert('botão reset')
    let res = document.getElementById('res')
    count = 0
    res.innerHTML = `${count}`
    res.focus()
}

function aumenta() {
    // window.alert('botão aumenta')
    let res = document.getElementById('res')
    count++
    res.innerHTML = `${count}`
    res.focus()
}

var estilo = 1

function muda() {
    // window.alert(estilo)
    let counter = document.querySelector('div#counter')
    let res = document.querySelector('div#res')
    let control = document.querySelector('div#control')
    let button = document.querySelector('input.button')
    let buttonMenos = document.querySelector('input#btn-menos')
    let buttonMais = document.querySelector('input#btn-mais')
    let buttonReset = document.querySelector('input#btn-reset')
    let body = document.querySelector('body#body')

    switch (estilo) {
        case 0:
            // window.alert('entrou no 0')

            body.style.background = 'rgb(134, 189, 158)'
            body.style.justifyContent = 'center'

            counter.style.backgroundImage = 'url(https://image.freepik.com/fotos-gratis/textura-de-fundo-de-papel-vermelho-escuro-velho_113767-1612.jpg)'
            counter.style.backgroundSize = 'cover'
            counter.style.backgroundRepeat = 'no-repeat'
            counter.style.width = '70%'
            counter.style.height = '80%'
            counter.style.color = 'white'
            counter.style.margin = 'auto'
            counter.style.display = 'flex'
            counter.style.flexDirection = 'column'
            counter.style.alignItems = 'center'
            counter.style.justifyContent = 'space-evenly'

            control.style.marginRight = '0'
            control.style.position = 'relative'
            control.style.alignSelf = 'center'
            control.style.justifySelf = 'space-evenly'
            control.style.display = 'flex'
            control.style.flexDirection = 'row'

            buttonMenos.style.color = 'thistle'
            buttonMenos.style.width = '200px'
            buttonMenos.style.height = '80px'
            buttonMenos.style.background = 'transparent'
            buttonMenos.style.borderRadius = '0'
            buttonMenos.style.fontSize = '40px'
            buttonMenos.onmouseover = function() {
                this.style.backgroundColor = "teal"
            }
            buttonMenos.onmouseout = function() {
                this.style.background = "transparent"
            }
            // buttonMenos.click = function() {
            //     this.style.backgroundColor = "rgb(0, 128, 53)"
            // }

            buttonMais.style.color = 'thistle'
            buttonMais.style.width = '200px'
            buttonMais.style.height = '80px'
            buttonMais.style.background = 'transparent'
            buttonMais.style.borderRadius = '0'
            buttonMais.style.fontSize = '40px'
            buttonMais.onmouseover = function() {
                this.style.backgroundColor = "teal"
            }
            buttonMais.onmouseout = function() {
                this.style.background = "transparent"
            }
            // buttonMais.click = function() {
            //     this.style.backgroundColor = "rgb(0, 128, 53)"
            // }
            

            buttonReset.style.color = 'thistle'
            buttonReset.style.width = '200px'
            buttonReset.style.height = '80px'
            buttonReset.style.background = 'transparent'
            buttonReset.style.borderRadius = '0'
            buttonReset.style.fontSize = '40px'
            buttonReset.onmouseover = function() {
                this.style.backgroundColor = "teal"
            }
            buttonReset.onmouseout = function() {
                this.style.background = "transparent"
            }
            // buttonReset.click = function() {
            //     this.style.backgroundColor = "rgb(0, 128, 53)"
            // }
          

            // $(".button").hover(function(){
            //     $(this).css("background", "teal")
            // }, function(){
            //     $(this).css("background", "transparent")
            // })
            
            // body.classList.add('body')
            // counter.classList.add('counter')
            // control.classList.add('control')
            // buttonMenos.classList.add('button')
            // buttonReset.classList.add('button')
            // buttonMais.classList.add('button')

            // body.classList.remove('body1')
            // counter.classList.remove('counter1')
            // control.classList.remove('control1')
            // button.classList.remove('button1')
            // buttonMenos.classList.remove('button1')
            // buttonReset.classList.remove('button1')
            // buttonMais.classList.remove('button1')

            estilo = 1
            // window.alert(estilo)
            break

        case 1:
            // window.alert('entrou no 1')

            body.style.background = 'rgb(134, 169, 189)'
            body.style.justifyContent = 'space-evenly'

            counter.style.background = 'transparent'
            counter.style.width = '100%'
            counter.style.height = '100%'
            counter.style.color = 'black'
            counter.style.display = 'flex'
            counter.style.flexDirection = 'column'
            counter.style.alignItems = 'center'
            counter.style.justifyContent = 'space-evenly'

            control.style.marginRight = '25%'
            control.style.position = 'absolute'
            control.style.alignSelf = 'flex-end'
            control.style.justifySelf = 'flex-end'
            control.style.display = 'flex'
            control.style.flexDirection = 'column-reverse'

            buttonMenos.style.color = 'black'
            buttonMenos.style.width = '100px'
            buttonMenos.style.height = '100px'
            buttonMenos.style.borderRadius = '50%'
            buttonMenos.onmouseover = function() {
                this.style.backgroundColor = "rgb(100, 128, 0)"
            }
            buttonMenos.onmouseout = function() {
                this.style.background = "transparent"
            }

            buttonMais.style.color = 'black'
            buttonMais.style.width = '100px'
            buttonMais.style.height = '100px'
            buttonMais.style.borderRadius = '50%'
            buttonMais.onmouseover = function() {
                this.style.backgroundColor = "rgb(100, 128, 0)"
            }
            buttonMais.onmouseout = function() {
                this.style.background = "transparent"
            }

            buttonReset.style.color = 'black'
            buttonReset.style.width = '100px'
            buttonReset.style.height = '100px'
            buttonReset.style.borderRadius = '50%'
            buttonReset.onmouseover = function() {
                this.style.backgroundColor = "rgb(100, 128, 0)"
            }
            buttonReset.onmouseout = function() {
                this.style.background = "transparent"
            }

            // body.classList.add('body1')
            // counter.classList.add('counter1')
            // control.classList.add('control1')
            // buttonMenos.classList.add('button1')
            // buttonMais.classList.add('button1')
            // buttonReset.classList.add('button1')

            // body.classList.remove('body')
            // counter.classList.remove('counter')
            // control.classList.remove('control')
            // button.classList.remove('button')
            // buttonMenos.classList.remove('button')
            // buttonMais.classList.remove('button')
            // buttonReset.classList.remove('button')
            
            estilo = 0
            // window.alert(estilo)
            break
        
        default:
            window.alert('Erro inesperado!')

    }

    // if (estilo == 0) {
    //     estilo = 1
    // } else if (estilo == 1) {
    //     estilo = 0
    // }
}

