#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const path = require('path');

fs.readdir(process.cwd(), (err, filenames) => {
	if (err) throw new Error(err);
	else {
		/*
		// Bad code start
		for (let filename of filenames) {
			fs.lstat(filename, (err, stats) => {
				if (err) throw new Error(err);
				console.log(filename, stats.isFile());
			});
		}
		// Bad code finished
		*/
		/*
		// Solution 1 NOT WELL
		const allStats = Array(filenames.length).fill(null);
		for (let filename of filenames) {
			const index = filenames.indexOf(filename);
			
			fs.lstat(filename, (err, stats) => {
				if (err) throw new Error(err);
				
				allStats[index] = stats;
				
				const ready = allStats.every(() => {
					return stats;
				});
				
				if (ready) {
					allStats.forEach((stats, index) => {
						console.log(filename[index], stats.isFile());
					});
				}
			});
		}
		*/
	}
});
/*
// Solution 2 GOOD

const {lstat} = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
	if (err) {
		console.log(err);
  }
	
  for (let filename of filenames) {
    try {
			const stats = await lstat(filename);
			
      console.log(filename, stats.isFile());
    } catch (err) {
			console.log(err);
    }
  }
});
*/

// Solution 3 THE BEST

const { lstat } = fs.promises;
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
	if (err) {
		console.log(err);
	}

	const statPromises = filenames.map((filename) => {
		return lstat(path.join(targetDir, filename));
	});

	const allStats = await Promise.all(statPromises);

	for (let stats of allStats) {
		const index = allStats.indexOf(stats);

		console.log(filenames[index], stats.isFile());
	}
});
