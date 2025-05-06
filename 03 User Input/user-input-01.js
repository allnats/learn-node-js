console.log("Below is the list of passed arguments:")

// Cool new loop keyword
process.argv.forEach((argument, idx) => {
    console.log(`#${idx}: ${argument}`)
});