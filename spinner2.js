let animation = 100;
let frames = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ","\r|   ", "\r/   ", "\r-   ", "\r\\   ","\r=D"];

for (const frame of frames) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, animation)
  animation += 200;
}