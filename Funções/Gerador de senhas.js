// Gera caracteres aleatórios
randomChars(len) {
	
	// Armazenará a sequência aleatória
	var text = '';

	// Lista de caracteres que podem ser usados
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

	// Obtém a sequência
	for (var i = 0; i < len; i++) {
		text += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	
	// Retorna sequência pronta
	return text;
}

// Para usar: gera uma sequencia com 10 caracteres  
randomChars(10);
