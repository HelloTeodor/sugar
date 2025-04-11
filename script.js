
    const img = document.getElementById('churroImage');
    const originalSrc = 'Untitled2.svg';
    const flashSrc = 'Untitled3.svg'; // Replace with your 2ms image

    setInterval(() => {
        img.src = flashSrc;
        setTimeout(() => {
            img.src = originalSrc;
        }, 150); // 2 milliseconds
    }, 5000); // every 2 seconds

