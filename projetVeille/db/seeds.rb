# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do
	Category.create({
		title: Faker::Book.genre
	})
end

#2.times do
#    Article.create({
 #       title: Faker::Book.title,
  #      content: Faker::Lorem.sentence,
   #     created_by: Faker::Book.author,
    #    category_id: 1
    #})
#end

#2.times do
 #   Article.create({
  #      title: Faker::Book.title,
   #     content: Faker::Lorem.sentence,
    #    created_by: Faker::Book.author,
     #   category_id: 2
    #})
#end

#2.times do
 #   Article.create({
  #      title: Faker::Book.title,
   #     content: Faker::Lorem.sentence,
    #    created_by: Faker::Book.author,
     #   category_id: 3
    #})
#end

#4.times do
#	Comment.create({
#		name: Faker::GreekPhilosophers.name,
#		message: Faker::GreekPhilosophers.quote,
#		article_id: 1
#	})
#end

#1.times do
#	Comment.create({
#		name: Faker::GreekPhilosophers.name,
#		message: Faker::GreekPhilosophers.quote,
#		article_id: 2
#	})
#end

#2.times do
#	Comment.create({
#		name: Faker::GreekPhilosophers.name,
#		message: Faker::GreekPhilosophers.quote,
#		article_id: 3
#	})
#end