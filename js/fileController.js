var fileController = {
	saveState: function(){
		dataString = JSON.stringify( /* save object */ );
		return dataString;
	},
	save: function(saveOptions){
		var save_pattern=/(\S)/i;
		var extension_pattern = /.txt$/;
		var filename=prompt("Save As...", saveOptions+".txt");
		// If the user pressed cancel or emptied the field of letters, we'll abort.
		if( filename == null || !save_pattern.test(filename)) {
			return false;
		}
		// Add a missing extension.
		if( !extension_pattern.test( filename )) {
			filename=filename+".txt";
		}
		// Fill in the anchor to download to this file name.
		document.getElementById("downloader").download=filename;
		document.getElementById("downloader").href = "data:application;charset=UTF-8," + encodeURIComponent(this.saveState());
		// Let the caller start the download.
		return true;
	}
};