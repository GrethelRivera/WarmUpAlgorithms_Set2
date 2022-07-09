function minutesToSeconds(time) {
	const splitTime = time.split(":"),
	  min = splitTime[0],
	  sec = splitTime[1],
		minSec = min * 60;
	
	if (sec >= 60) {
	  return false;
	}
	else {
	  return parseInt(minSec) + parseInt(sec);
	}
  }
  console.log(minutesToSeconds("01:00"));


// You are given the length of a video in minutes.
//  The format is mm:ss (e.g.: "02:54"). 
// Create a function that takes the video length 
// and return it in seconds.