export default function createStarfield(canvas) {
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let stars = [];
  // Initialize mouse position
  let mouse = { x: -1000, y: -1000 }; // Initialize far off-screen

  class Star {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.z = Math.random() * width;
      this.o = Math.random();
      this.initialZ = this.z; // Store initial Z for potential reset behavior
    }

    update() {
      this.z -= 1; // Move star closer
      if (this.z <= 0) this.reset(); // Reset if star passes viewer

      // Calculate the screen coordinates of the star
      let screenX = (this.x - width / 2) * (width / this.z) + width / 2;
      let screenY = (this.y - height / 2) * (width / this.z) + height / 2;

      // Calculate distance to mouse
      const dx = screenX - mouse.x;
      const dy = screenY - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const repulsionRadius = 100; // Radius within which stars will repel
      const repulsionForce = 50; // How strongly stars repel

      if (distance < repulsionRadius) {
        // Calculate repulsion direction
        const angle = Math.atan2(dy, dx);
        const repelX = Math.cos(angle);
        const repelY = Math.sin(angle);

        // Move star away based on repulsion force and proximity
        const forceFactor = (repulsionRadius - distance) / repulsionRadius;
        this.x += repelX * repulsionForce * forceFactor;
        this.y += repelY * repulsionForce * forceFactor;

        // Optionally, make the star move "backwards" in Z or reset
        // To make it appear to go away, increase its Z
        this.z += repulsionForce * forceFactor * 2; // Move it further away faster

        // If a star gets pushed too far, reset it to prevent it from going infinitely off
        if (this.z > width * 2) {
            this.reset();
        }
      }
    }

    draw() {
      let x = (this.x - width / 2) * (width / this.z) + width / 2;
      let y = (this.y - height / 2) * (width / this.z) + height / 2;
      let radius = width / this.z;
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255," + this.o + ")";
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 1000; i++) {
    stars.push(new Star());
  }

  function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    stars.forEach((s) => {
      s.update();
      s.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Add mousemove event listener to update mouse position
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Reset mouse position when mouse leaves the window
  window.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });
}