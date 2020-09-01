function changeInfos (status, message){
	//status has to be a css class
	let infos = document.getElementById("infos");
	infos.classList.remove('neutral','warning','error','success')
	infos.classList.add(status);
	//infos.querySelector('p').innerText = message;
	
	/*let newText ="<p>"+message+"</p>";*/
	infos.innerHTML = '<p>'+message+'</p>';
}


/* Exécution du nettoyage */
const startClean = document.getElementById("start-clean");

startClean.addEventListener('click', function() {
	// vérification du fichier et affichage du texte 
    const fileList = document.getElementById('csv-upload').files[0];
	if (fileList.size > 0 && fileList.name.includes('.csv',fileList.name.length-4))
		{
			changeInfos('success', 'Fichier chargé avec succès');
		}
	else
		{
			changeInfos('error', 'Fichier non conforme');
		}
	
	// Lecture des données
	const newCsv = new FileReader();
	newCsv.readAsText(fileList);
	newCsv.onload = function(){
		csvResult = newCsv.result;
		document.getElementById('result').innerHTML = newCsv.result;
		/*console.log(newCsv.result);*/


	}
});