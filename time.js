const time = string => {

    let answer =""
  
    const hour = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "one",
      14: "two",
      15: "three",
      16: "four",
      17: "five",
      18: "six",
      19: "seven",
      20: "eight",
      21: "nine",
      22: "ten",
      23: "twelve",
      24: "thirteen"
    }
  
    const tens = {
      0: "oh",
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty"
    }
  
  
    const ones = { 
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen" 
    }
  
    if (string === "12:00") {
      return "noon"
    }
  
    if (string === "00:00") {
      return "midnight"
    }
  
    let first = string.slice(0, 2)
    let second = string[3]
    let third = string[4]
  

    answer += hour[first] + " "
    if (second === "0" && third === "0"){
        answer += "o'clock"
    }
    else if (second !== "1"){
      answer += tens[second] + "-"
      if (third !== "0") {
        answer += ones[third]
      } else {
        answer = answer.slice(0, -1)
      }
    } else {
      answer += ones[second + third]
    }

    if (+first <= 12){
        answer += " " + "am"
    } else {
        answer += " " + "pm"
    }
    
    return answer
  }
  
  console.log(time("20:00"))