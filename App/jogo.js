
var altura = 0 
var largura = 0
var vidas = 1
var tempo = 60

var criaMoscatempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'paia') {

	criaMoscatempo = 1500
} else if(nivel === 'brabo') {

	criaMoscatempo = 1000
} else if(nivel === 'deus') {

	criaMoscatempo = 500

}

function ajustaTamanhoPalcoJogo() {

 altura = window.innerHeight 
 largura = window.innerWidth


}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	
	tempo -= 1

	if(tempo < 0) {
		window.location.href = 'venceu.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}

}, criaMoscatempo)



function posicaoRandomica() {

	if(document.getElementById('mosca')) {
		document.getElementById('mosca').remove() 

		if(vidas > 3) {



			window.location.href = 'perdeu.html'
		} else  {
		document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"

			vidas++
		}

	}

	

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90


	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function() {
		this.remove()

	}

	document.body.appendChild(mosca)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosca1'

		case 1: 
			return 'mosca2'

		case 2: 
			return 'mosca3'

	}
	
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'mosca4'

		case 1: 
			return 'mosca5'


	}
}

