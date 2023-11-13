function printColorInfo(colors) {
    console.log(colors.toString());
    console.log(colors.join());
    console.log(colors.join(''));
  }
  const myColor = ["Red", "Green", "White", "Black"];
  printColorInfo(myColor);


 



test('prints color information to the console', () => {
  // Spy on console.log
  const consoleLogSpy = jest.spyOn(console, 'log');

  // Call the function
 printColorInfo(["Red", "Green", "White", "Black"]);

  // Check if console.log was called with the expected arguments
  expect(consoleLogSpy).toHaveBeenCalledWith('Red,Green,White,Black');
  expect(consoleLogSpy).toHaveBeenCalledWith('Red,Green,White,Black');
  expect(consoleLogSpy).toHaveBeenCalledWith('RedGreenWhiteBlack');

  // Restore the original console.log function
  consoleLogSpy.mockRestore();
});
