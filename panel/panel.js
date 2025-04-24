// document.addEventListener("DOMContentLoaded", () => {
// 	const tallyDisplay = document.getElementById("tally-display");
// 	const resetBtn = document.getElementById("reset-btn");

// 	// Configuration - Update these to match your needs
// 	const TARGET_ENDPOINTS = ["/api/scores", "/game/update", "/analytics"];
// 	const DATA_KEY = "score"; // Key to extract from response

// 	// Load from storage
// 	chrome.storage.local.get(["currentTally"], (result) => {
// 		tallyDisplay.textContent = result.currentTally || "0";
// 	});

// 	// Monitor network requests
// 	chrome.devtools.network.onRequestFinished.addListener((request) => {
// 		// Only process POST requests to target endpoints
// 		if (request.request.method !== "POST") return;
// 		if (!TARGET_ENDPOINTS.some((endpoint) => request.request.url.includes(endpoint))) return;

// 		request.getContent((content) => {
// 			try {
// 				const response = JSON.parse(content);
// 				const value = extractValue(response, DATA_KEY);

// 				if (value !== undefined) {
// 					chrome.storage.local.get(["currentTally"], (result) => {
// 						const newTally = (result.currentTally || 0) + Number(value);
// 						chrome.storage.local.set({ currentTally: newTally });
// 						tallyDisplay.textContent = newTally;
// 					});
// 				}
// 			} catch (e) {
// 				console.error("Error processing response:", e);
// 			}
// 		});
// 	});

// 	// Reset functionality
// 	resetBtn.addEventListener("click", () => {
// 		chrome.storage.local.set({ currentTally: 0 });
// 		tallyDisplay.textContent = "0";
// 	});
// });

// document.getElementById("randomizeBtn").addEventListener("click", function () {
// 	// Generate random percentage between 0 and 100
// 	const randomPercentage = Math.floor(Math.random() * 101);

// 	// Update the progress bar width
// 	const progressBar = document.getElementById("progressBar");
// 	progressBar.style.width = `${randomPercentage}%`;
// });

// document.getElementById("randomizeCurveBtn").addEventListener("click", () => {
// 	const progress = Math.floor(Math.random() * 401);
// 	const maxOffset = 125.6; // πr (3.14 * 40)
// 	const offset = maxOffset - (progress / 4 / 100) * maxOffset;
// 	let color =
// 		progress > 299 ? "#ef4444" : progress > 199 ? "#f97316" : progress > 99 ? "#2563eb" : "#16a34a";

// 	document.getElementById("progressCurve").style.strokeDashoffset = offset;
// 	document.getElementById("progressCurve").style.stroke = color;
// 	document.getElementById("gaugeValue").textContent = progress;
// });
