// Your Code Here


// get data (book list)
async function listBooks() {
    const response = await fetch("http://localhost:3001/listBooks");
    const result = await response.json();
    return result;
      }
  
  // iterate through list and create html elements
  async function buildAdminList() {
    let listOfBooks = await listBooks();
      
    let list = document.createElement("ul");
        list.setAttribute("id", "list");
    for (let i = 0; i < listOfBooks.length; i++) {
    let inputBoxes = document.createElement("li");
          inputBoxes.innerHTML =
            "<p>" +
            listOfBooks[i].title +
            "</p> <input id='textbox" +
            listOfBooks[i].id +
            "' value='" +
            listOfBooks[i].quantity +
            "' type='text' ></input> <input onclick='btn(" +
            listOfBooks[i].id +
            ")' type='button' value='save'></input>";
          list.appendChild(inputBoxes);
        }
        document.getElementById("root").appendChild(list);
      }
      
      buildAdminList();
      
      // send +keep data function
    async function btn(id) {
        console.log(id);
    const send = await fetch("http://localhost:3001/updateBook", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          id: id,
          quantity: document.getElementById("textbox" + id).value,
          }),
        });
      }