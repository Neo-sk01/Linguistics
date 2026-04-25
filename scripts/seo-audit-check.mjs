import { existsSync, readFileSync } from "node:fs";

const checks = [];

function read(path) {
  return readFileSync(path, "utf8");
}

function check(name, condition) {
  checks.push({ name, passed: Boolean(condition) });
}

const layout = read("app/layout.tsx");
const interpreting = read("components/layout/sections/interpreting-services.tsx");
const faq = read("app/faq/page.tsx");
const seo = read("lib/seo.ts");
const legalPagePath = "app/legal-transcription/page.tsx";
const legalPage = existsSync(legalPagePath) ? read(legalPagePath) : "";

check("GA4 measurement ID is installed globally", layout.includes("G-5Q34YN5GMC"));
check("GA4 gtag loader is installed globally", layout.includes("googletagmanager.com/gtag/js"));
check("Microsoft Clarity project ID is installed globally", layout.includes("w6x2n5g17v"));
check("Microsoft Clarity loader is installed globally", layout.includes("clarity.ms/tag"));
check("Interpreting page shows the real phone number", interpreting.includes("+27 67 747 2124"));
check("Interpreting page no longer shows the placeholder phone number", !interpreting.includes("+27 12 345 6789"));
check("/legal-transcription page exists", existsSync(legalPagePath));
check("/legal-transcription metadata targets legal transcription in South Africa", legalPage.includes("Legal Transcription Services in South Africa"));
check("/legal-transcription has its canonical path", legalPage.includes('path: "/legal-transcription"'));
check("/legal-transcription is included in public routes", seo.includes('"/legal-transcription"'));
check("FAQ title includes South Africa", faq.includes('title: "FAQ South Africa"'));

const failed = checks.filter((item) => !item.passed);

for (const item of checks) {
  console.log(`${item.passed ? "PASS" : "FAIL"} ${item.name}`);
}

if (failed.length > 0) {
  console.error(`\n${failed.length} SEO audit check${failed.length === 1 ? "" : "s"} failed.`);
  process.exit(1);
}
