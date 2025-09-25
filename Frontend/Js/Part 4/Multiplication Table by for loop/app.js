let favourite = "Avatar"

let guess = prompt("Guess My Favourite movie");

while((guess!=favourite) && (guess != 'quite')){
   guess = prompt("PLease try again..!!")
}

if(guess==favourite){
   console.log("Congratulations......!!!")
}
else if(guess=='quite'){
   console.log("Sorry..You Quited Game...!!")
}
