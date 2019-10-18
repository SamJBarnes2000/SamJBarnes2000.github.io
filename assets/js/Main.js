// Comment Section //
const list = document.getElementById('comment-output')

//appends the name input to the list
const showname = () => {
    const nameAdd = document.getElementById('name-input').value
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(nameAdd))
    list.append(li)
}

//appends the comment input to the list
const showcomment = () => {
    const commentAdd = document.getElementById('comment-input').value
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(commentAdd))
    list.append(li)
}

//inputs the date and time the button has been clicked by using Date()
const showdate = () => {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(Date()))
    list.append(li)
}

//posts each comment to the list with the button click
document.getElementById('comment-button').addEventListener('click', showname)
document.getElementById('comment-button').addEventListener('click', showcomment)
document.getElementById('comment-button').addEventListener('click', showdate)

//fetch request to json file //
//feteches the JSON folder
fetch('speakers.json')
.then(res => res.json())
.then(data => {
    //outputs the data into table rows containg the data in the JSON file
    let output = ''
    data.forEach(row => {
        output += `
        <tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.price}</td>
        </tr>
        `     
    })
    //outputs the table to the Website
    const tablebody = document.getElementById('table-body')
    tablebody.innerHTML = output
})


//contact page //
const output = document.getElementById('contact-output')

//adds "thank you for your email," plus the persons name and puts it back out to the Website
const contactname = () => {
    const addname = document.getElementById('contact-name').value
    output.innerHTML = 'thank you for your email, ' + addname
}

document.getElementById('contact-button').addEventListener('click', contactname)
