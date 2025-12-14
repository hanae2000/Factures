Projet Gestion de Factures
Description

Ce projet est une application web de gestion de factures, développée avec Angular et utilisant Dexie (IndexedDB) pour le stockage local des données.

Elle permet de :

Gérer les clients : ajouter, modifier, supprimer.

Gérer les produits : ajouter, modifier, supprimer.

Créer des factures : sélectionner un client, ajouter des produits avec quantité, calcul automatique du Total HT, TVA et TTC.

Consulter la liste des factures enregistrées.

Supprimer une facture de manière sécurisée, avec confirmation.

Toutes les données sont stockées localement dans le navigateur via IndexedDB, ce qui permet de conserver les informations même après fermeture du navigateur.

Technologies utilisées

Angular 17 (Standalone Components)

Typescript

Dexie.js pour IndexedDB

HTML / CSS pour l’interface

Fonctionnalités principales
Gestion des clients

Ajouter un client avec un ID unique et un nom.

Modifier les informations d’un client existant.

Supprimer un client.

Gestion des produits

Ajouter un produit avec un ID, un nom et un prix.

Modifier un produit existant.

Supprimer un produit.

Création de factures

Sélection du client.

Sélection des produits et saisie des quantités.

Calcul automatique :

Total HT

TVA (20%)

TTC

Enregistrement de la facture dans IndexedDB avec génération automatique d’un ID unique.

Liste des factures

Affichage de toutes les factures enregistrées.

Affichage du client, date, Total HT, TVA et TTC.

Possibilité de supprimer une facture avec confirmation.
