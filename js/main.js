//need fetch request. fetch request is a promise. Async function

document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value   //want to get content of input box use value
    try{
        const res = await fetch(`https://startrek-api-bwdev.herokuapp.com/api/${alienName}`)  //await stops to wait for fetch first
        const data = await res.json()                                                       //convert data to json
        console.log(data)

        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples
        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName

    }catch(error) {
        console.log(error)
    }
}