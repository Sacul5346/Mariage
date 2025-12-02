const express = require('express');
const path = require('path');
const app = express();

// Définir le port d'écoute. Railway injecte le port dans la variable d'environnement PORT.
const PORT = process.env.PORT || 3000; 

// Définir le chemin racine de l'application sur le serveur (où se trouvent index.html et package.json)
const APP_ROOT = __dirname; 

// 1. DÉFINITION DE LA ROUTE PRINCIPALE
// Intercepte toutes les requêtes à la racine de l'URL (ex: http://votre-domaine.up.railway.app/)
app.get('/', (req, res) => {
    // Renvoyer le fichier index.html
    // path.join() construit le chemin absolu vers le fichier.
    res.sendFile(path.join(APP_ROOT, 'index.html'));
});


// 2. GESTION DES REQUÊTES 404 (Optionnel, mais recommandé)
// Cette route intercepte toutes les autres requêtes qui n'ont pas été gérées ci-dessus
app.use((req, res) => {
    // Renvoyer une simple réponse 404
    res.status(404).send("404 Not Found");
});


// 3. DÉMARRAGE DU SERVEUR
app.listen(PORT, () => {
    console.log(`Serveur Express démarré avec succès sur le port ${PORT}`);
    console.log(`URL de base : http://localhost:${PORT} (local)`);
});