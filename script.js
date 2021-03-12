const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('You need to enter either Rock, Paper, or Scissors')
  };
}

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else {
    return 'scissors'
  };
};

const determineWinner = (userChoice, computerChoice) => {
  console.log(userChoice);
  console.log(computerChoice);
  if (userChoice === computerChoice) {
    return 'Tie Game!';
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return "Victory... Humanity!";
    } else {
      return "Victory... Technology!";
    };
  } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return "Victory... Humanity!";
    } else {
      return "Victory... Technology!";
    };
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return "Victory... Humanity!";
    } else {
      return "Victory... Technology!";
    };
  } else {
    return "So, you know the secrets of this world..."
  };
};

const playGame = (choice) => {
  userChoice = getUserChoice(choice);
  computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
};

playGame('bomb');