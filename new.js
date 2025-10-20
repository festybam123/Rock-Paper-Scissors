// let votes = {
//     A: 0,
//     B: 0
//   };
  
//   let voted = false;
  
//   function vote(candidate) { 
//     if (voted) {
//       document.getElementById('message').textContent = "You have already voted!";
//       return;
//     }
  
//     votes[candidate]++;
//     document.getElementById('votes${candidate}').textContent = votes[candidate];
//     voted = true;
  
//     document.getElementById('message').textContent = 'thank you for voting for candidate ${candidate}!';}
  
let userPassword = "festybam";
let userInput = "";
while(userInput != userPassword){
userInput = prompt('Enter password')
}alert('success')