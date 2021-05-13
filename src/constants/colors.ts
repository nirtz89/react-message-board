export const colors = {
    white: '#ffffff',
    mainGray: '#f7f7f7',
    mainFontBlack: '#2b2b2b',
    gradientGray: '#dbdadd',
    gradientWhite: '#f7f6f9',
    darkerGray: '#c5c5c5',
    evenDarkerGray: '#aaaaaa',
    redditOrange: '#ff4500',
    transparent: 'transparent'
}

export const hexToRGBA = (hex: string, alpha: number) => {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}