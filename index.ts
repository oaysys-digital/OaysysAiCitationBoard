#!/usr/bin/env node

interface CitationInput {
  brand: string;
  aiCitation: number;
  geoScore: number;
  brandMention: number;
  seoVisibility: number;
  entityAuthority: number;
  sourceQuality: number;
}

interface CitationOutput {
  brand: string;
  aiCitationScore: number;
  geoScore: number;
  brandMentionScore: number;
  seoVisibilityScore: number;
  entityAuthorityScore: number;
  sourceQualityScore: number;
  overallCitationHealth: number;
  priorityAction: string;
  aiPlatformCoverage: Record<string, number>;
}

function getStatus(score: number): string {
  if (score <= 30) return "Critical";
  if (score <= 60) return "At Risk";
  if (score <= 80) return "Healthy";
  return "Excellent";
}

function getPriorityAction(scores: Record<string, number>): string {
  const labels: Record<string, string> = {
    aiCitation: "AI Citation",
    geoScore: "GEO Score",
    brandMention: "Brand Mention",
    seoVisibility: "SEO Visibility",
    entityAuthority: "Entity Authority",
    sourceQuality: "Source Quality",
  };
  const lowest = Object.entries(scores).reduce((a, b) => a[1] < b[1] ? a : b);
  return `${labels[lowest[0]]} (${lowest[1]}/100 — act first)`;
}

function getAIPlatformCoverage(aiCitation: number, geo: number): Record<string, number> {
  return {
    "ChatGPT": Math.min(100, Math.round(aiCitation * 1.0)),
    "Perplexity": Math.min(100, Math.round(aiCitation * 1.03)),
    "Google AI Overviews": Math.min(100, Math.round(geo * 1.04)),
    "Gemini": Math.min(100, Math.round(geo * 0.99)),
    "Copilot": Math.min(100, Math.round(aiCitation * 0.88)),
  };
}

export function trackCitations(input: CitationInput): CitationOutput {
  const scores = {
    aiCitation: input.aiCitation,
    geoScore: input.geoScore,
    brandMention: input.brandMention,
    seoVisibility: input.seoVisibility,
    entityAuthority: input.entityAuthority,
    sourceQuality: input.sourceQuality,
  };
  const overallCitationHealth = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / 6
  );
  return {
    brand: input.brand,
    aiCitationScore: input.aiCitation,
    geoScore: input.geoScore,
    brandMentionScore: input.brandMention,
    seoVisibilityScore: input.seoVisibility,
    entityAuthorityScore: input.entityAuthority,
    sourceQualityScore: input.sourceQuality,
    overallCitationHealth,
    priorityAction: getPriorityAction(scores),
    aiPlatformCoverage: getAIPlatformCoverage(input.aiCitation, input.geoScore),
  };
}

const args = process.argv.slice(2);
const brand = args[0] || "brand-name";
const aiCitation = parseInt(args[1]) || 85;
const geoScore = parseInt(args[2]) || 78;
const brandMention = parseInt(args[3]) || 90;
const seoVisibility = parseInt(args[4]) || 72;
const entityAuthority = parseInt(args[5]) || 88;
const sourceQuality = parseInt(args[6]) || 80;

const result = trackCitations({
  brand, aiCitation, geoScore, brandMention,
  seoVisibility, entityAuthority, sourceQuality,
});

console.log(`Brand: ${result.brand}`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`AI Citation Score:             ${result.aiCitationScore}/100  [${getStatus(result.aiCitationScore)}]`);
console.log(`GEO Score:                     ${result.geoScore}/100  [${getStatus(result.geoScore)}]`);
console.log(`Brand Mention Score:           ${result.brandMentionScore}/100  [${getStatus(result.brandMentionScore)}]`);
console.log(`SEO Visibility Score:          ${result.seoVisibilityScore}/100  [${getStatus(result.seoVisibilityScore)}]`);
console.log(`Entity Authority Score:        ${result.entityAuthorityScore}/100  [${getStatus(result.entityAuthorityScore)}]`);
console.log(`Source Quality Score:          ${result.sourceQualityScore}/100  [${getStatus(result.sourceQualityScore)}]`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Overall Citation Health:       ${result.overallCitationHealth}/100`);
console.log(`Priority Action:               ${result.priorityAction}`);
console.log("\nAI Platform Coverage:");
Object.entries(result.aiPlatformCoverage).forEach(([platform, score]) => {
  console.log(`  ${platform.padEnd(22)} ${score}/100`);
});
