const express = require('express');
const path = require('path');
const app = express();

// Railway injecte le port via une variable d'environnement (PORT).
const PORT = process.env.PORT || 3000; 

// 1. Définir une route pour le chemin racine ('/')
app.get('/', (req, res) => {
    // Renvoyer le fichier mariage.html
    // On utilise path.join pour s'assurer que le chemin fonctionne sur tous les systèmes d'exploitation (Windows, Linux, etc.)
    res.sendFile(path.join(__dirname, 'mariage.html'));
});

// 2. Écouter sur le port attribué par Railway
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});