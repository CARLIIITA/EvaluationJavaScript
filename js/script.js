const getMethod = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGMwNzFmNjg3ODNkN2UzNWRlZmQ3YzNmMzYyZWI4NSIsInN1YiI6IjY1YjM3MmQ5NTU0MWZhMDE2NGIxNDYwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1LbnSKWBMNR5HThWzYfe3Im88wDOdAZx-lfL9TYq5Q",
	},
};
  
    
    async function listeDeTache() {
        const listeDeTache = await list();
        console.log(listeDeTache);

        const container = document.getElementById("container");
        listeDeTache.forEach((list) => {
            const list = document.createElement("div");

         const list = document.getElementById("list");
         const addButton = document.createElement("button");
		    addButton.textContent = "Ajouter une tache";
		    addButton.className = "btn btn-primary m-2";

         

         const input= document.getElementById("input");
  
        })
}
    listeDeTache()

