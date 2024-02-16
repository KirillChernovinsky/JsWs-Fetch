
// Это не работает 
// let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    
// if (response.ok){
//     let json = await response.json();
//     console.log(json)
// } else {
//     alert("Ошибка: " + response.status);
// }


function posts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        let post = json[i];

        let postElement = document.createElement("div");
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;

        document.body.appendChild(postElement);
      }
    });
}


function comments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        let comment = json[i];
  
        let postElement = document.createElement("div");
        postElement.innerHTML = `
          <h2>${comment.name}</h2>
          <p>${comment.email}</p>
          <p>${comment.body}</p>
        `;
  
        document.body.appendChild(postElement);
      }
    });
}



function users(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        let user = json[i];
  
        let postElement = document.createElement("div");
        postElement.innerHTML = `
          <h2>${user.name}</h2>
          <p>${user.username}</p>
          <p>${user.email}</p>
          <p>${user.address.street}</p>
          <p>${user.address.suite}</p>
          <p>${user.address.city}</p>
          <p>${user.address.zipcode}</p>
          <p>${user.address.geo.lng}</p>
          <p>${user.address.geo.lat}</p>

        `;
  
        document.body.appendChild(postElement);
      }
    });
  
}

