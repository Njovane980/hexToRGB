function hexToRgb(hex) {
    // Remove the hash if it exists
    hex = hex.replace(/^#/, '');

    // Parse the hex values
    let bigint = parseInt(hex, 16);

    // Extract RGB components
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Example usage
let hexColor = '#1a2b3c';
let rgbColor = hexToRgb(hexColor);
console.log(rgbColor); // Outputs: rgb(26, 43, 60)
