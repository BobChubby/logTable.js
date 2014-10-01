Array.prototype.logTable = function() {
	var maxRowSize = {};
	var cols = [];

	// Enumerate object properties/columns
	for(var i=0; i<this.length;i++) {
		for(var property in this[i]) {
			if(cols.indexOf(property)==-1) {
				cols.push(property);
			}
		}
	}

	// Initial maxRowSize set to column name length
	for(i=0;i<cols.length;i++) {
		maxRowSize[cols[i]] = cols[i].length;
	}

	// maxRowSize extended to any cells longer than column name
	for(var i=0;i<this.length;i++) {
		for(var n=0;n<cols.length;n++) {
			var cell = this[i][cols[n]];
			cell = (cell) ? cell.toString() : '';
			var length = cell.length;
			maxRowSize[cols[n]] = Math.max(length,maxRowSize[cols[n]]);
		}
	}

	// Generate row of column names
	var row = '';
	for(var i=0;i<cols.length;i++) {
		row += '| '+ cols[i] +' ';
		// Add spacing based on longest cell
		for(var n=0;n<maxRowSize[cols[i]]-cols[i].length;n++) {
			row += ' ';
		}
	}
	row += '|'; // End the row

	// Generate top/bottom border based on column name row length
	border = '+';
	for(var i=0;i<row.length-2;i++) {
		border += '-'
	}
	border += '+'

	console.log(border); // Top border
	console.log(row); // Column name row
	console.log(border); // Bottom of header border


	// Generate rows of cells
	for(var i=0;i<this.length;i++) {
		var line = '';
		for(var n=0;n<cols.length;n++) {
			var cell = this[i][cols[n]];
			cell = (cell) ? cell.toString() : '';
			line += '| '+ cell +' ';
			// Add spacing based on longest cell
			for(var a=0;a<maxRowSize[cols[n]]-cell.length;a++) {
				line += ' ';
			}
		}
		line += '|'
		console.log(line);
	}
	console.log(border); // Bottom border
}