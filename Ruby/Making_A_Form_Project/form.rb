print "What's your first name?"
fname = gets.chomp
fname.capitalize!

print "What's your last name?"
lname = gets.chomp
lname.capitalize!

print "What's your city?"
city = gets.chomp
city.capitalize!

print "What's your state?"
state = gets.chomp
state.upcase!

puts "Your name is #{fname} #{lname} and you are from #{city}, #{state}"