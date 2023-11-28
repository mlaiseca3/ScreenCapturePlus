console.log("hello world")

async function startCapture(displayMediaOptions) {
	let captureStream = null;

	try {
		captureStream =
			await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
	} catch (err) {
		console.error(`Error: ${err}`);
	}
	return captureStream;


}

// picture capture
const pictureElement = document.getElementById("screenshot")
// Options for getDisplayMedia()


const displayMediaOptionsForPicture = {
  picture: {
    displaySurface: "window",
  },
  audio: false,
};

// Set event listeners for the start and stop buttons
pictureElement.addEventListener(
  "click",
  (evt) => {
    startCapture();
  },
  false,
);

