
    fetch("https://api.cricapi.com/v1/currentMatches?apikey=6629b92c-7a4e-4f4d-8db9-83a5abe9635f&offset=0")
    .then(data => data.json())
    .then(allMatches => {
      var matches = allMatches.data;
      var matchDetails = matches.map(mat => ({
        date: mat.date,
        name: mat.name,
        venue: mat.venue,
        teaminfo: mat.teaminfo,
        status: mat.status,
      }));
  
      // Get a reference to the table body
      var tableBody = document.getElementById('insert');
  
      // Loop through the matchDetails array and create table rows for each object
      matchDetails.forEach(function (match) {
        var row = tableBody.insertRow();
  
        // Populate the row with data
        var cell1 = row.insertCell(0);
        cell1.textContent = match.date;
  
        var cell2 = row.insertCell(1);
        cell2.textContent = match.name;
  
        var cell3 = row.insertCell(2);
        cell3.textContent = match.venue;
  
        var cell4 = row.insertCell(3);
        cell4.textContent = match.status;
  
       
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  

  