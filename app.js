document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
  
    searchButton.addEventListener("click", function() {
      // Make an AJAX request using fetch API
      fetch('superheroes.php')
        .then(response => response.json())
        .then(superheroes => {
          // Convert the data to a string for alert
          const superheroList = superheroes.map(superhero => superhero.alias).join('\n');
  
          // Display the superhero list in an alert
          alert("List of Superheroes:\n" + superheroList);
        })
        .catch(error => console.error('Error fetching data:', error));
    });
  });
  