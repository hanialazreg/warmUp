// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
		firstName , lastName, nationality, age , sex
//     -create a factory function.
		function makeClassmate(firstName, lastName, nationality, age, sex){
			return {
				firstName : firstName ,
				lastName : lastName,
				nationality : nationality,
				age : age ,
				sex : sex

			};
		}
//     -create an array to hold the classmates that you created and what you created to it . 
		var classmates = [{firstName:firstName, lastName: lastName , nationality: nationality, age: age, sex: sex}]; 
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
		function displayFriend(mate){
			return mate.firstName + ' ' + mate.lastName + ' ' + mate.nationality + ' ' + mate.age + ' '+ mate.sex ;
		}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
		function addFriend(mate){
			classmates.push(mate);
			return classmates ;


		}
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.