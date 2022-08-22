
  document.addEventListener("DOMContentLoaded", () => {
    // Unix timestamp (in seconds) to count down to
    var daysFromNow = new Date().getTime() / 1000 + 86400 * 31 + 1;

    // Set up FlipDown
    var flipdown = new FlipDown(daysFromNow)

      // Start the countdown
      .start()

      // Do something when the countdown ends
      .ifEnded(() => {
        console.log("The countdown has ended!");
      });
  });