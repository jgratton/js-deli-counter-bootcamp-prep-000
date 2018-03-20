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

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var name = katzDeliLine[0];
    return 
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift();
  }
}