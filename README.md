# ProjetRuby

## Installer le projet
Faire un Bundle install pour installer toutes les dépendances de notre gemfile

## Insérer les données du fichier seed (avec Faker)
Faire la commande -> rails db:seed

## Mettre à jour la bdd de test
rake db:test:prepare

## Exécuter les tests
bundle exec rspec

## Exécuter les tests User
bundle exec rspec spec/auth -fd
