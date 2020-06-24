// function apiCall(){
//     fetch("http://localhost:8080/")
//     .then(response=>{
//         return response.text();
//     })
//      .then(data => {
//          this.title = data;
//      })
//     document.getElementById("demo").innerHTML = title;
// }

function apiCall() {
    fetch("http://localhost:8080/")
        .then(response => response.text())
        .then(data => document.getElementById("demo").innerHTML = data)
        .catch(()=> {
            console.log("api call failed");
        });

}

//  figure out how to save data to a string and pass that string to html with innerHTML
// function apiCall() {
    
//     fetch("http://localhost:8080/")
//         .then(response => response.text())
//         .then(data =>{
//             var x = this.data;
//         } );
//         .catch(()=> {
        //     console.log("api call failed");
        // });


//         document.getElementById("demo").innerHTML = x;
// }