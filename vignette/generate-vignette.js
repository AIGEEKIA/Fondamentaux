const puppeteer = require("puppeteer");
const path = require("path");

async function generateVignette() {
  console.log("🚀 Génération de la vignette YouTube...");

  // Lancer le navigateur
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Définir la taille de la page
  await page.setViewport({
    width: 1280,
    height: 760,
    deviceScaleFactor: 2, // Haute qualité
  });

  // Naviguer vers la page de la vignette
  await page.goto("http://localhost:3006/vignette", {
    waitUntil: "networkidle0",
  });

  // Attendre que le contenu soit chargé
  await page.waitForTimeout(2000);

  // Prendre une capture d'écran
  const screenshotPath = path.join(__dirname, "vignette-1280x760.png");
  await page.screenshot({
    path: screenshotPath,
    fullPage: false,
    type: "png",
  });

  console.log("✅ Vignette générée avec succès !");
  console.log(`📁 Fichier créé : ${screenshotPath}`);

  await browser.close();
}

// Exécuter si appelé directement
if (require.main === module) {
  generateVignette().catch(console.error);
}

module.exports = generateVignette;
