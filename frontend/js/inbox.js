const inbox = document.getElementById('inbox');

// loop through fetched data and show it in inbox.html
const show_data = data =>{
    data.forEach(msg => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = `${msg.name} ~${msg.email}`;
        const p = document.createElement('p');
        p.textContent = `${msg.text} ~${msg.phone_nb}`;
        div.appendChild(h2);
        div.appendChild(p);
        inbox.appendChild(div);
    });
} 

// fetch API GET request from '/backend/show_messages.php'/
const show_all_messages = async ()=>{
  try {
    const url =
      "http://localhost/startbootstrap_clone_frontend/backend/show_messages.php";
    const response = await fetch(url);
    const data = await response.json();
    show_data(data);
  } catch (err) {
    console.log(err);
  }
}

// whenever the inbox.html page load show_all_messages
window.addEventListener('load',show_all_messages);