var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number 1 in line.`;
  } else {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  }
}