console.log('LOADED');

let weaponData = {};

function returnedData(x) {
	console.log('==============================');
	console.log('==============================');
	console.log('###Function Executed returnData(' + x + ')');
	let categories = [
		'weapon_sniper',
		'Snipers',
		'weapon_lmg',
		'Light Machine Guns',
		'weapon_pistol',
		'Handguns',
		'weapon_assault_rifle',
		'Assault Rifles',
		'weapon_shotgun',
		'Shotguns',
		'weapon_smg',
		'Submachine Guns',
		'weapon_marksman',
		'Marksman Rifles',
	];
	let cat = null;
	let arr1 = {};

	console.log(categories.indexOf(x));
	if (categories.includes(x)) {
		console.log('Valid Category Found');
		console.log(categories[categories.indexOf(x) + 1]);
		return categories[categories.indexOf(x) + 1];
	} else {
		console.log('Valid Category Not Found');
		return lookupTable(x); // Pass on to 2nd function
	}
	console.log('end of function reached somehow?');
}

function lookupTable(x) {
	console.log('==============================');
	console.log('###Function Executed lookupTable(' + x + ')');
	let count = 0;
	let arr2 = {};
	let c = {};
	for (const category of Object.keys(dataObject)) {
		// console.log(category);
		if (dataObject.hasOwnProperty(category)) {
			console.log('Found', x);
		}
	}
}
// if (!specific) {
// 	if (dataObject.hasOwnProperty(x)) {
// 		// console.log('FOUND!')
// 		// return dataObject[x]
// 	} else {
// 		for (const subset of Object.values(dataObject)) {
// 			count++;
// 			if (subset.hasOwnProperty(x)) {
// 				// console.log('Target found!')
// 				// console.log('Array Index:', count)
// 				// console.log(dataObject[subset].name)
// 			}
// 			// console.log('Not Found...')
// 		}
// 		// return itemData.hasOwnProperty(x)
// 	}
// } else {
// 	for (const subCat of Object.values(dataObject)) {
// 		// console.log(subCat)
// 		for (const subWeapon of Object.keys(subCat)) {
// 			if (x == subWeapon) {
// 				// console.log("Found", subWeapon)
// 				// console.log(subCat[subWeapon])
// 				arr2 = subCat[subWeapon];
// 				c = {
// 					...arr,
// 					...arr2,
// 				};
// 				// console.log(c)
// 				return c;
// 			}
// 		}
// 	}
// 	return 'Not Found';
// }

// for (const [key, value] of Object.entries(weaponData)) {
// 	console.log(key);
// 	if (x == key) {
// 		console.log('Valid Category Found');
// 		return x;
// 	} else {
// 		console.log('Valid Category Not Found');
// 		return x;
// 	}
// }
// 	searchCat = Object.entries(itemData)[catIndex][0];
// 	let searchCat2 = Object.keys(itemData)[subcat];
// 	// console.log('compare1', searchCat);
// 	// console.log('compare2', searchCat2);
// 	// console.log('compare3');
// 	// console.log('LOOK HERE', searchCat);
// 	let count = 0;
// 	//If x == name of weapon/equip category...
// 	if (x == searchCat) {
// 		foundCat = x;
// 		console.log('Matched Category Name!', foundCat);
// 		console.log('Returning', dataObject[foundCat]); //Returning object containing all weapons under category
// 		// console.log('Category Index', catIndex)
// 		// if x/category is in dataObject
// 		if (dataObject.hasOwnProperty(x)) {
// 			return dataObject[foundCat]; //ENDPOINT 1
// 		} else {
// 			message = 'Category';
// 			console.log('LOOK HERE', x, message);
// 			return searchCat; //ENDPOINT 1
// 		}
// 	} else {
// 		for (const subWeapon of Object.keys(subcat)) {
// 			count++;
// 			if (x == subWeapon) {
// 				console.log('Matched Specific Name!', x);
// 				foundCat = searchCat;
// 				foundSpecific = x;
// 				// console.log('Target found!')
// 				// console.log("Found Within", foundCat)
// 				// console.log(subcat[x].properties)
// 				arr1 = subcat[x].properties;
// 				// arr1 = Object.keys(subcat)
// 				// console.log("arr1", arr1)
// 				// console.log(arr1.indexOf(x))
// 				// console.log("Found", foundSpecific)
// 				// lookupTable(x, foundCat)
// 				//--------------------------------------------------------
// 				// return lookupTable(x, foundSpecific, arr1);
// 				return console.log('>>NEXT FUNCTION>>', x, foundSpecific, arr1);
// 			}
// 		}
// 		if (foundSpecific == false) {
// 			console.log('failed');
// 			return 'failed';
// 		}
// 		// return "Weapon cat not found"
// 	}
// 	catIndex++;
// }
// // Cannot find anything
// if (!foundCat) {
// 	// console.log("not found")
// 	message = 'Cannot find ' + x;
// 	return message;

//If found, lets plug data into this function to find if our plug-in data exists...
// function lookupTable(x, specific, arr) {
// 	console.log('lookupTable Loaded');
// 	let count = 0;
// 	let arr2 = {};
// 	let c = {};

// 	if (!specific) {
// 		if (dataObject.hasOwnProperty(x)) {
// 			// console.log('FOUND!')
// 			// return dataObject[x]
// 		} else {
// 			for (const subset of Object.values(dataObject)) {
// 				count++;
// 				if (subset.hasOwnProperty(x)) {
// 					// console.log('Target found!')
// 					// console.log('Array Index:', count)
// 					// console.log(dataObject[subset].name)
// 				}
// 				// console.log('Not Found...')
// 			}
// 			// return itemData.hasOwnProperty(x)
// 		}
// 	} else {
// 		for (const subCat of Object.values(dataObject)) {
// 			// console.log(subCat)
// 			for (const subWeapon of Object.keys(subCat)) {
// 				if (x == subWeapon) {
// 					// console.log("Found", subWeapon)
// 					// console.log(subCat[subWeapon])
// 					arr2 = subCat[subWeapon];
// 					c = {
// 						...arr,
// 						...arr2,
// 					};
// 					// console.log(c)
// 					return c;
// 				}
// 			}
// 		}
// 		return 'Not Found';
// 	}
// }

const dataObject = {
	weapon_sniper: {
		name: 'Snipers',
		iw8_sn_alpha50: {
			name: 'AX-50',
			cost: 3999,
			ammoCost: 20,
			magSize: 5,
		},
		iw8_sn_hdromeo: {
			name: 'HDR',
			cost: 1000,
			ammoCost: 10,
			magSize: 5,
		},
		iw8_sn_xmike109: {
			name: 'Ray-O-Tek',
			cost: 10000,
			ammoCost: 10,
			magSize: 5,
		},
	},
	weapon_lmg: {
		name: 'Light Machine Guns',
		iw8_lm_mgolf36: {
			name: 'MG36',
			cost: 3000,
			ammoCost: 0.3,
			magsize: 75,
		},
	},
};
const itemData = {
	weapon_sniper: {
		iw8_sn_alpha50: {
			properties: {
				hits: 411,
				kills: 468,
				kdRatio: 1.0960187353629978,
				headshots: 105,
				accuracy: 0.37027027027027026,
				shots: 1110,
				deaths: 427,
			},
		},
		iw8_sn_hdromeo: {
			properties: {
				hits: 32,
				kills: 34,
				kdRatio: 1.2592592592592593,
				headshots: 10,
				accuracy: 0.19161676646706588,
				shots: 167,
				deaths: 27,
			},
		},
		iw8_sn_delta: {
			properties: {
				hits: 18,
				kills: 17,
				kdRatio: 1.5454545454545454,
				headshots: 5,
				accuracy: 0.35294117647058826,
				shots: 51,
				deaths: 11,
			},
		},
		iw8_sn_xmike109: {
			properties: {
				hits: 1,
				kills: 1,
				kdRatio: 1,
				headshots: 0,
				accuracy: 0.25,
				shots: 4,
				deaths: 0,
			},
		},
	},
	tacticals: {
		equip_gas_grenade: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_snapshot_grenade: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_decoy: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_smoke: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_concussion: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_hb_sensor: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_flash: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_adrenaline: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
	},
	lethals: {
		equip_frag: {
			properties: {
				hits: 0,
				kills: 162,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_thermite: {
			properties: {
				hits: 0,
				kills: 0,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_semtex: {
			properties: {
				hits: 0,
				kills: 322,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_claymore: {
			properties: {
				hits: 0,
				kills: 5,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_c4: {
			properties: {
				hits: 0,
				kills: 540,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_at_mine: {
			properties: {
				hits: 0,
				kills: 14,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_throwing_knife: {
			properties: {
				hits: 0,
				kills: 15,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
		equip_molotov: {
			properties: {
				hits: 0,
				kills: 3,
				shots: 0,
				deaths: 0,
				headShots: 0,
			},
		},
	},
	weapon_lmg: {
		iw8_lm_kilo121: {
			properties: {
				hits: 68,
				kills: 18,
				kdRatio: 1.5,
				headshots: 2,
				accuracy: 0.12781954887218044,
				shots: 532,
				deaths: 12,
			},
		},
		iw8_lm_mkilo3: {
			properties: {
				hits: 1,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0.024390243902439025,
				shots: 41,
				deaths: 0,
			},
		},
		iw8_lm_mgolf34: {
			properties: {
				hits: 60,
				kills: 17,
				kdRatio: 1.1333333333333333,
				headshots: 10,
				accuracy: 0.1411764705882353,
				shots: 425,
				deaths: 15,
			},
		},
		iw8_lm_lima86: {
			properties: {
				hits: 52,
				kills: 13,
				kdRatio: 1.1818181818181819,
				headshots: 3,
				accuracy: 0.11206896551724138,
				shots: 464,
				deaths: 11,
			},
		},
		iw8_lm_pkilo: {
			properties: {
				hits: 99,
				kills: 18,
				kdRatio: 1.3846153846153846,
				headshots: 6,
				accuracy: 0.1658291457286432,
				shots: 597,
				deaths: 13,
			},
		},
		iw8_lm_sierrax: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 0,
			},
		},
		iw8_lm_mgolf36: {
			properties: {
				hits: 1056,
				kills: 226,
				kdRatio: 1.1133004926108374,
				headshots: 62,
				accuracy: 0.18803418803418803,
				shots: 5616,
				deaths: 203,
			},
		},
	},
	weapon_launcher: {
		iw8_la_gromeo: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 3,
				deaths: 0,
			},
		},
		iw8_la_rpapa7: {
			properties: {
				hits: 12,
				kills: 220,
				kdRatio: 1.164021164021164,
				headshots: 2,
				accuracy: 0.020477815699658702,
				shots: 586,
				deaths: 189,
			},
		},
		iw8_la_juliet: {
			properties: {
				hits: 30,
				kills: 15,
				kdRatio: 0.8823529411764706,
				headshots: 0,
				accuracy: 0.4225352112676056,
				shots: 71,
				deaths: 17,
			},
		},
		iw8_la_kgolf: {
			properties: {
				hits: 8,
				kills: 6,
				kdRatio: 0.3333333333333333,
				headshots: 0,
				accuracy: 0.22857142857142856,
				shots: 35,
				deaths: 18,
			},
		},
		iw8_la_mike32: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 0,
			},
		},
	},
	weapon_pistol: {
		iw8_pi_cpapa: {
			properties: {
				hits: 68,
				kills: 50,
				kdRatio: 1.8518518518518519,
				headshots: 17,
				accuracy: 0.3148148148148148,
				shots: 216,
				deaths: 27,
			},
		},
		iw8_pi_mike9: {
			properties: {
				hits: 11,
				kills: 2,
				kdRatio: 2,
				headshots: 0,
				accuracy: 0.1506849315068493,
				shots: 73,
				deaths: 0,
			},
		},
		iw8_pi_mike1911: {
			properties: {
				hits: 211,
				kills: 62,
				kdRatio: 0.8378378378378378,
				headshots: 18,
				accuracy: 0.2988668555240793,
				shots: 706,
				deaths: 74,
			},
		},
		iw8_pi_golf21: {
			properties: {
				hits: 597,
				kills: 142,
				kdRatio: 0.8352941176470589,
				headshots: 29,
				accuracy: 0.33166666666666667,
				shots: 1800,
				deaths: 170,
			},
		},
		iw8_pi_decho: {
			properties: {
				hits: 299,
				kills: 149,
				kdRatio: 0.7760416666666666,
				headshots: 35,
				accuracy: 0.4018817204301075,
				shots: 744,
				deaths: 192,
			},
		},
		iw8_pi_papa320: {
			properties: {
				hits: 76,
				kills: 25,
				kdRatio: 1.4705882352941178,
				headshots: 3,
				accuracy: 0.24203821656050956,
				shots: 314,
				deaths: 17,
			},
		},
	},
	weapon_assault_rifle: {
		iw8_ar_falima: {
			properties: {
				hits: 42,
				kills: 10,
				kdRatio: 1.1111111111111112,
				headshots: 2,
				accuracy: 0.25609756097560976,
				shots: 164,
				deaths: 9,
			},
		},
		iw8_ar_tango21: {
			properties: {
				hits: 63,
				kills: 9,
				kdRatio: 2.25,
				headshots: 1,
				accuracy: 0.15555555555555556,
				shots: 405,
				deaths: 4,
			},
		},
		iw8_ar_mike4: {
			properties: {
				hits: 40888,
				kills: 8833,
				kdRatio: 1.2906195207481006,
				headshots: 1625,
				accuracy: 0.2519844204506237,
				shots: 162264,
				deaths: 6844,
			},
		},
		iw8_ar_anovember94: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 0,
			},
		},
		iw8_ar_falpha: {
			properties: {
				hits: 127,
				kills: 43,
				kdRatio: 1.5357142857142858,
				headshots: 10,
				accuracy: 0.2255772646536412,
				shots: 563,
				deaths: 28,
			},
		},
		iw8_ar_mcharlie: {
			properties: {
				hits: 110,
				kills: 17,
				kdRatio: 2.125,
				headshots: 4,
				accuracy: 0.2249488752556237,
				shots: 489,
				deaths: 8,
			},
		},
		iw8_ar_akilo47: {
			properties: {
				hits: 72,
				kills: 17,
				kdRatio: 0.8095238095238095,
				headshots: 4,
				accuracy: 0.16628175519630484,
				shots: 433,
				deaths: 21,
			},
		},
		iw8_ar_kilo433: {
			properties: {
				hits: 949,
				kills: 189,
				kdRatio: 1.111764705882353,
				headshots: 26,
				accuracy: 0.22834456207892204,
				shots: 4156,
				deaths: 170,
			},
		},
		iw8_ar_scharlie: {
			properties: {
				hits: 32,
				kills: 7,
				kdRatio: 1,
				headshots: 2,
				accuracy: 0.17297297297297298,
				shots: 185,
				deaths: 7,
			},
		},
		iw8_ar_asierra12: {
			properties: {
				hits: 13,
				kills: 4,
				kdRatio: 0.6666666666666666,
				headshots: 0,
				accuracy: 0.14942528735632185,
				shots: 87,
				deaths: 6,
			},
		},
		iw8_ar_galima: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 0,
			},
		},
		iw8_ar_sierra552: {
			properties: {
				hits: 89,
				kills: 13,
				kdRatio: 1.4444444444444444,
				headshots: 0,
				accuracy: 0.15397923875432526,
				shots: 578,
				deaths: 9,
			},
		},
	},
	weapon_other: {
		iw8_me_riotshield: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 10,
			},
		},
	},
	weapon_shotgun: {
		iw8_sh_mike26: {
			properties: {
				hits: 23,
				kills: 6,
				kdRatio: 6,
				headshots: 2,
				accuracy: 0.5111111111111111,
				shots: 45,
				deaths: 0,
			},
		},
		iw8_sh_charlie725: {
			properties: {
				hits: 114,
				kills: 65,
				kdRatio: 1.0317460317460319,
				headshots: 10,
				accuracy: 0.75,
				shots: 152,
				deaths: 63,
			},
		},
		iw8_sh_oscar12: {
			properties: {
				hits: 162,
				kills: 64,
				kdRatio: 0.9142857142857143,
				headshots: 5,
				accuracy: 0.4835820895522388,
				shots: 335,
				deaths: 70,
			},
		},
		iw8_sh_romeo870: {
			properties: {
				hits: 186,
				kills: 114,
				kdRatio: 0.8321167883211679,
				headshots: 20,
				accuracy: 0.7181467181467182,
				shots: 259,
				deaths: 137,
			},
		},
		iw8_sh_dpapa12: {
			properties: {
				hits: 21,
				kills: 16,
				kdRatio: 1.4545454545454546,
				headshots: 1,
				accuracy: 0.6,
				shots: 35,
				deaths: 11,
			},
		},
	},
	weapon_smg: {
		iw8_sm_mpapa7: {
			properties: {
				hits: 117,
				kills: 23,
				kdRatio: 1.7692307692307692,
				headshots: 4,
				accuracy: 0.222011385199241,
				shots: 527,
				deaths: 13,
			},
		},
		iw8_sm_augolf: {
			properties: {
				hits: 119,
				kills: 27,
				kdRatio: 1,
				headshots: 2,
				accuracy: 0.21636363636363637,
				shots: 550,
				deaths: 27,
			},
		},
		iw8_sm_papa90: {
			properties: {
				hits: 134,
				kills: 29,
				kdRatio: 2.6363636363636362,
				headshots: 5,
				accuracy: 0.2632612966601179,
				shots: 509,
				deaths: 11,
			},
		},
		iw8_sm_charlie9: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 0,
			},
		},
		iw8_sm_mpapa5: {
			properties: {
				hits: 36408,
				kills: 8190,
				kdRatio: 1.10362484840318,
				headshots: 1288,
				accuracy: 0.2409849086576648,
				shots: 151080,
				deaths: 7421,
			},
		},
		iw8_sm_smgolf45: {
			properties: {
				hits: 19,
				kills: 5,
				kdRatio: 5,
				headshots: 1,
				accuracy: 0.1484375,
				shots: 128,
				deaths: 0,
			},
		},
		iw8_sm_beta: {
			properties: {
				hits: 103,
				kills: 22,
				kdRatio: 3.6666666666666665,
				headshots: 5,
				accuracy: 0.29178470254957506,
				shots: 353,
				deaths: 6,
			},
		},
		iw8_sm_victor: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 0,
			},
		},
		iw8_sm_uzulu: {
			properties: {
				hits: 232,
				kills: 48,
				kdRatio: 0.7619047619047619,
				headshots: 7,
				accuracy: 0.22502424830261883,
				shots: 1031,
				deaths: 63,
			},
		},
	},
	weapon_marksman: {
		iw8_sn_sbeta: {
			properties: {
				hits: 442,
				kills: 281,
				kdRatio: 0.8593272171253823,
				headshots: 76,
				accuracy: 0.4922048997772829,
				shots: 898,
				deaths: 327,
			},
		},
		iw8_sn_crossbow: {
			properties: {
				hits: 0,
				kills: 1,
				kdRatio: 1,
				headshots: 0,
				accuracy: 0,
				shots: 9,
				deaths: 0,
			},
		},
		iw8_sn_kilo98: {
			properties: {
				hits: 22,
				kills: 22,
				kdRatio: 1.2941176470588236,
				headshots: 8,
				accuracy: 0.19130434782608696,
				shots: 115,
				deaths: 17,
			},
		},
		iw8_sn_mike14: {
			properties: {
				hits: 24,
				kills: 13,
				kdRatio: 2.1666666666666665,
				headshots: 2,
				accuracy: 0.23529411764705882,
				shots: 102,
				deaths: 6,
			},
		},
		iw8_sn_sksierra: {
			properties: {
				hits: 5,
				kills: 2,
				kdRatio: 2,
				headshots: 0,
				accuracy: 0.3125,
				shots: 16,
				deaths: 0,
			},
		},
	},
	weapon_melee: {
		iw8_me_akimboblunt: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 0,
			},
		},
		iw8_me_akimboblades: {
			properties: {
				hits: 0,
				kills: 0,
				kdRatio: 0,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 0,
			},
		},
		iw8_knife: {
			properties: {
				hits: 0,
				kills: 54,
				kdRatio: 0.4251968503937008,
				headshots: 0,
				accuracy: 0,
				shots: 0,
				deaths: 127,
			},
		},
	},
};
const scorestreakData = {
	lethalScorestreakData: {
		precision_airstrike: {
			properties: {
				extraStat1: 293,
				uses: 298,
				awardedCount: 313,
			},
		},
		cruise_predator: {
			properties: {
				extraStat1: 128,
				uses: 151,
				awardedCount: 185,
			},
		},
		manual_turret: {
			properties: {
				extraStat1: 0,
				uses: 5,
				awardedCount: 54,
			},
		},
		white_phosphorus: {
			properties: {
				extraStat1: 0,
				uses: 0,
				awardedCount: 0,
			},
		},
		hover_jet: {
			properties: {
				extraStat1: 399,
				uses: 132,
				awardedCount: 141,
			},
		},
		chopper_gunner: {
			properties: {
				extraStat1: 241,
				uses: 35,
				awardedCount: 35,
			},
		},
		gunship: {
			properties: {
				extraStat1: 0,
				uses: 0,
				awardedCount: 0,
			},
		},
		sentry_gun: {
			properties: {
				extraStat1: 1,
				uses: 5,
				awardedCount: 5,
			},
		},
		toma_strike: {
			properties: {
				extraStat1: 239,
				uses: 324,
				awardedCount: 335,
			},
		},
		nuke: {
			properties: {
				extraStat1: 0,
				uses: 0,
				awardedCount: 0,
			},
		},
		juggernaut: {
			properties: {
				extraStat1: 5,
				uses: 1,
				awardedCount: 1,
			},
		},
		pac_sentry: {
			properties: {
				extraStat1: 0,
				uses: 0,
				awardedCount: 0,
			},
		},
		chopper_support: {
			properties: {
				extraStat1: 2,
				uses: 1,
				awardedCount: 1,
			},
		},
		bradley: {
			properties: {
				extraStat1: 0,
				uses: 0,
				awardedCount: 0,
			},
		},
	},
	supportScorestreakData: {
		airdrop: {
			properties: {
				extraStat1: 0,
				uses: 0,
				awardedCount: 0,
			},
		},
		radar_drone_overwatch: {
			properties: {
				extraStat1: 0,
				uses: 19,
				awardedCount: 22,
			},
		},
		scrambler_drone_guard: {
			properties: {
				extraStat1: 0,
				uses: 3,
				awardedCount: 8,
			},
		},
		uav: {
			properties: {
				extraStat1: 3560,
				uses: 797,
				awardedCount: 637,
			},
		},
		airdrop_multiple: {
			properties: {
				extraStat1: 0,
				uses: 1,
				awardedCount: 1,
			},
		},
		directional_uav: {
			properties: {
				extraStat1: 0,
				uses: 1,
				awardedCount: 0,
			},
		},
	},
};

function buildWeaponData() {
	weaponData = {
		weapon_sniper: {
			...itemData.weapon_sniper,
		},
		weapon_lmg: {
			...itemData.weapon_lmg,
		},
		weapon_pistol: {
			...itemData.weapon_pistol,
		},
		weapon_assault_rifle: {
			...itemData.weapon_assault_rifle,
		},
		weapon_shotgun: {
			...itemData.weapon_shotgun,
		},
		weapon_smg: {
			...itemData.weapon_smg,
		},
		weapon_marksman: {
			...itemData.weapon_marksman,
		},
	};
}
buildWeaponData();
//weapon_sniper
//iw8_sn_sksierra
//iw8_lm_mgolf36
console.log('Function Output>>>', returnedData('test'));
console.log('Function Output>>>', returnedData('weapon_sniper'));
console.log('Function Output>>>', returnedData('iw8_lm_mgolf36'));
console.log('Function Output>>>', returnedData('iw8_sn_sksierra'));
console.log('Function Output>>>', returnedData('weapon_smg'));
