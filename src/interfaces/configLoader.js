// src/configLoader.js
let config = null;

export async function loadConfig() {
  if (!config) {
    const response = await fetch('/config.json');
    console.log(response)
    config = await response.json();
  }
  return config;
}
