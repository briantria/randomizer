var csvFile;
var names = ["name1", "name2", "name3", "name4", "adf", "ddse", "ddesfs"];
var players = [];

function parseCsv()
{
	var reader = new FileReader();

	reader.onload = function() {
		// var display = document.getElementById("selectedName");
		// display.innerText = reader.result;
		var csvRows = reader.result.split(/\r?\n|\r/);
		var csvValues;

		// skip headers
		for(var rowIndex = 1; rowIndex < csvRows.length; ++rowIndex)
		{
			// console.log("csvRows[" + rowIndex + "]: " + csvRows[rowIndex]);
			csvValues = csvRows[rowIndex].split(',');

			// for(var i = 0; i < csvValues.length; ++i)
			// {
			// 	console.log("value[" + i + "]: " + csvValues[i]);
			// }

			// [0] Timestamp
			// [1] name
			// [2] nickname | alias
			// [3] catchphrase | mantra
			var player   = {};
			player.name  = csvValues[1];
			player.alias = csvValues[2];
			player.desc  = csvValues[3];

			players.push(player);
		}
	}

	reader.readAsText(csvFile);
}

window.onload = function()
{
	var fileInput = document.getElementById("file");
	fileInput.addEventListener("change", function(){
		csvFile = fileInput.files[0];
		parseCsv();
	});
}