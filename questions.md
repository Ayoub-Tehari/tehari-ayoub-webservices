QUESTIONS

Merci de répondre librement et le plus clairement possible aux questions suivantes:
PUT & PATCH

Quelle est la différence entre un PUT un PATCH
Le PUT est idéalement fait pour modifier plusieurs/tout les champs, par contre le PATCH est fait que pour 1 ou 2 champs (nombre petit).
FETCH/AXIOS

Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?
à cause des CORS, ce qui concerne que les navigateurs seulement.

NGINX/APACHE

Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?
une couche supplementaire pour gérer (au mieux) le traffic entrant/sortant de l'api, par exemple les cors, ...etc

PERFORMANCES
Citez 3 axes vus en cours pour améliorer les performance d'une api Rest
-le cache coté applicatif.
