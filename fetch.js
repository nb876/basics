import fetch from 'node-fetch'


// async await
// async function getDataAsync() {
//     try {
//         const response = await fetch('https://api.sampleapis.com/beers/ale')
//         const data = await response.json()
//         console.log(data)
//     } catch (err) {
//         console.error(err)
//     }
// }
// getDataAsync()

// .then . catch
// fetch('https://api.sampleapis.com/beers/ale')
// .then((response) => {
//     return response.json()
// })
// .then(data => {
//     console.log(data[21])
// })
// .catch(err => {
//     console.error(err)
// })

// fetch('https://api.sampleapis.com/beers/ale')
//     .then (response => response.json())
//     .then(data => console.log(data[99]))
//     .catch(err => console.error(err))


fetch('https://api.sampleapis.com/beers/ale')
    .then (response => response.json())
    .then(data => {
        for (let i=0; i <data.length; i++) {
            console.log(data[i]))
        }
    } console.log(data[99]))
    .catch(err => console.error(err))