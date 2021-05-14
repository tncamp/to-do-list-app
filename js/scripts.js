function newItem(){
  //store each <li> element in a variable using
    let li = $('<li></li>');
    //to get the input values from the index page
    let inputValue = $('#input').val();
    //append value into another element
    li.append(inputValue);

    if (inputValue ===''){
      alert("Field cannot be left blank!")
    } else {
      $('#list').append(li);
      $('#input').val('')
      }

    //cross out an item by double clicking on it
  function crossOut() {
    li.toggleClass ("strike");
  }
    li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

//add a delete button
  let crossOutButton = $ ('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete")
  }
    $('#list').sortable();
}
