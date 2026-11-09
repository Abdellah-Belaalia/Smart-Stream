# Smart-Stream
Smart Stream TV est une application web de télévision en direct (IPTV), conçue pour offrir une expérience utilisateur moderne, fluide et immersive, inspirée des interfaces des véritables Smart TV.

Le projet consiste à développer une plateforme interactive permettant aux utilisateurs de parcourir un catalogue de chaînes télévisées, de rechercher instantanément leurs chaînes préférées et de visualiser leur contenu dans une interface intuitive composée d'un panneau de navigation latéral et d'une zone principale de prévisualisation.

Les données des chaînes sont récupérées dynamiquement depuis une API REST via la Fetch API, avec une gestion asynchrone des requêtes, des états de chargement et des erreurs HTTP.

Fonctionnalités principales
Catalogue de chaînes : affichage des chaînes avec leurs numéros, logos, noms et catégories.
Recherche instantanée : filtrage dynamique des chaînes par nom ou numéro.
Navigation interactive : sélection d'une chaîne avec mise en évidence visuelle.
Zone de prévisualisation : affichage de l'image de couverture de la chaîne sélectionnée.
API REST : récupération dynamique des données depuis MockAPI avec Fetch API.
Gestion des états HTTP : prise en charge des réponses 200, 404 et 500.
Gestion asynchrone : utilisation de async/await, try/catch et Promises.
Lecteur vidéo (Bonus) : lecture des flux vidéo avec les URLs HLS.
Guide TV (EPG) (Bonus) : affichage du programme en cours, des horaires et de la progression.
Interface responsive : adaptation aux différentes tailles d'écran.
Technologies utilisées
HTML5
JavaScript ES6+
Tailwind CSS
Fetch API
JSON
MockAPI
Git & GitHub
Architecture du projet
Le projet adopte une architecture modulaire afin de séparer les responsabilités et faciliter la maintenance du code.

services/ : communication avec l'API et récupération des données.
ui/ : composants et fonctions responsables de l'affichage.
events/ : gestion des interactions et événements utilisateur.
data.json : structure initiale des données des chaînes.
Objectifs pédagogiques
Ce projet permet de mettre en pratique les compétences suivantes :

Manipulation des tableaux avec map(), filter() et find().
Utilisation des modules JavaScript avec import et export.
Maîtrise de Fetch API et des requêtes HTTP.
Gestion des opérations asynchrones avec async/await.
Manipulation des données JSON.
Organisation du code selon une architecture modulaire.
Gestion de versions avec Git et GitHub.
Application de la méthodologie Agile et Scrum.
Objectif final
Créer une expérience télévisuelle moderne, intuitive et performante, en reproduisant les fonctionnalités essentielles d'une véritable Smart TV directement depuis un navigateur web.