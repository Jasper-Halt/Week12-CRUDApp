
var app = new function() {
    this.el = document.getElementById("books");     //retrieves the "books" element entered by the user
  
    this.books = [];
  
    
    
    this.FetchBooks = function() {                  //establishes the "Fetch Books" function to display the books in the array
      var data = " ";
  
      if (this.books.length > 0) {
        for (i = 0; i < this.books.length; i++) {               //for loop to iterate through the "books" array
          data += "<tr>";                                       //new table row for each iteration
          data += "<td>"+(i+1)+". " + this.books[i] + "</td>";  //numbers each iteration (+1 because arrays are 0-index), and sets the input within table data
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-success">Edit</button></td>';      //creates the "Edit" Button, sets it in the next column
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';   //creates the "Delete" Button, sets it in the next column
          data += '</tr>';                                      //ends the table row, so that the next item will be in a new row.
        }
      }
  
      this.Count(this.books.length);
      return this.el.innerHTML = data;
    };
  
    this.AddBook = function () {
      el = document.getElementById('add-title');      // retrieves the title
      var book = el.value;
  
      if (book) {
        this.books.push(book.trim());               //adds the title to the books array
        el.value = '';                              // Resets the input value
        this.FetchBooks();                            // Dislays the new list
      }
    };
  
    this.Edit = function (item) {                                       //function for editing titles
      var el = document.getElementById('edit-title');                   //Displays the "title" value, so that user can see it to edit it.
      el.value = this.books[item];
      document.getElementById('edit-box').style.display = 'block';      //sets the display style to show up within the edit box.
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {      //saves the edited value
        var book = el.value;
  
        if (book) {
          self.books.splice(item, 1, book.trim());                      //Updates the books array with the edited title
          self.FetchBooks();                                            //Displays the updated list, with the new title
          CloseInput();                                                 //Hides the edit box until/unless user edits this or another title.
        }
      }
    };
  
    this.Delete = function (item) {                                     //Deletes the current row from the table created in the HTML file.
      this.books.splice(item, 1);
      this.FetchBooks();                                                //Displays the updated list.
    };
  
    this.Count = function(data) {                                       //function to make the counter work.
      var el   = document.getElementById('counter');
      var name = 'Books';
  
      if (data) {
          if(data ==1){
              name = 'Book'                                             //if only 1 book, displays "Book" instead of "Books" for grammatical purposes.
          }
        el.innerHTML = "You Have " + data + " " + name + " on your reading list";    //Sets the counter text to tell user how many books are on their list.
      } 
      else {
        el.innerHTML = "Your Reading List Is Empty. Add Something!"     //final "else" for if there are no items on the list (default until titles added)
      }
    };
    
  }
  
  app.FetchBooks();                                                       //executes the FetchBooks Method.
  
  function CloseInput() {                                                  //executes the Close Input Method for the edit box.
    document.getElementById('edit-box').style.display = 'none';
  }