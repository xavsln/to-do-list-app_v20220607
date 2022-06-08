// alert('Hello World!');

// Step 1 - We create a newItem function that will be triggered when the "Add" button is clicked
function newItem(){

  // Step 2 - We create an adding functionality that allow to create a new element and append it to the #list

  // # Create / declare a new <li> element for a new item
  let li = $('<li></li>');
  // # get the value of the input thanks to val() method
  let inputValue = $('input').val();

  // # We check whether the inputValue is empty or not and if not we append to the list
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    // # Append the value to the li element
    li.append(inputValue);
    // # Append the li element to the to do list
    $('#list').append(li);
    // # We clean our the text inside the input
    inputValue = $('input').val('');
  }

  // Step 3 - We create a cross out functionality
  // We declare a new function
  function crossOut(){
    // When crossed out, the li item will get an additional class ".strike" if it does not have yet otherwise this class will be removed
    li.toggleClass('strike');
  }

  li.on('dblclick', () => crossOut())

  // Step 4 - We add the delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  // We create an eventlistener on the X button
  crossOutButton.on('click', ()=> {
    // li.addClass('delete');
    li.remove();
  });

  // We use the sortable() method from jQuery in order to be able to sort items inside our #list
    $('#list').sortable();

}
