export const hexToRgba = (hex: string | undefined, opacity: number): string => {
  // Remove the "#" symbol from the hexadecimal color
  if (hex) {
    const sanitizedHex = hex.replace('#', '');

    // Convert the sanitized hex color to individual RGB values
    const red = parseInt(sanitizedHex.substring(0, 2), 16);
    const green = parseInt(sanitizedHex.substring(2, 4), 16);
    const blue = parseInt(sanitizedHex.substring(4, 6), 16);

    // Construct the RGBA string
    const rgba = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

    return rgba;
  } else {
    return '';
  }
};
