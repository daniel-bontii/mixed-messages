const firstLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X'];
const behaviour = ['are very famous', 'are very well liked', 'are abhored by many', 'are intelligent', 'are admired'];
const favouritePet = ['cats', 'dogs', 'horses', 'pythons'];
const hobby = ['programming', 'graphics design', 'watching movies', 'playing games', 'sleeping', 'doing nothing'];


const guessFirstLetter = (alphabets) =>  alphabets[Math.floor(Math.random() * alphabets.length)];
const guessBehaviour = (behaviours) => behaviours[Math.floor(Math.random() * behaviours.length)];
const guessFavoritePet = (pets) => pets[Math.floor(Math.random() * pets.length)];
const guessHobby = (hobbies) => hobbies[Math.floor(Math.random() * hobbies.length)];


function predict(){
    const guessedFirstLetter = guessFirstLetter(firstLetter);
    const guessedHobby = guessHobby(hobby);
    const guessedFavouritePet = guessFavoritePet(favouritePet);
    const guessedBehaviour = guessBehaviour(behaviour);

    console.log('Hello, I am predictabot and I will try to predict some things about you!');
    console.log();
    console.log(`Your first name starts with ${guessedFirstLetter}, You ${guessedBehaviour}, Your like ${guessedFavouritePet} as pets. Finally, as a hobby you enjoy ${guessedHobby}`);
}

predict();