function assignGrade(num) {
    if (num >= 90) {
        return ('A')
    } else if (num >= 80 && num <= 89) {
           return ('B')
    } else if (num >= 70 && num <= 79) {
            return ('C')
        } else if (num >= 60 && num <= 69) {
            return ('D')
        } else {
        return ('F')
    }
}

console.log(assignGrade(40))

let pound = ''
for (let i=0; i <= 5; i++) {
    pound = pound + '#'
    console.log(pound)
}
