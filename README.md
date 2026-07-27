# Oaysys AI Citation Board 🔍🤖

[![npm](https://img.shields.io/npm/v/@oaysys-digital/ai-citation-board)](https://npmjs.com/package/@oaysys-digital/ai-citation-board)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21628875.svg)](https://doi.org/10.5281/zenodo.21628875)

AI Citation & Brand Mention Tracker for monitoring brand visibility across AI search engines, websites, and online publications. Built by [Oaysys.com](https://oaysys.com).

## Features

- AI Citation Tracking — monitors brand mentions across ChatGPT, Perplexity, Gemini, Copilot
- GEO (Generative Engine Optimization) Scoring — measures brand authority in AI-generated responses
- Brand Mention Monitoring — tracks citations across news sites, blogs, and publications
- SEO Visibility Score — evaluates traditional and AI-enhanced search presence
- Entity Authority Score — measures brand entity strength in knowledge graphs
- Sentiment Analysis — classifies citation context as positive, neutral, or negative
- Source Quality Score — evaluates authority of citing domains
- AI Answer Coverage — tracks how often brand appears in AI-generated answers
- CLI support in Node.js and Python
- Benchmark dataset included (20 brand citation cases)
- Lightweight, publish-ready, minimal dependencies

## Quick Start

### Node.js

```bash
npm install @oaysys-digital/ai-citation-board
npx oaysys-ai-citation-board "brand-name" 85 78 90 72 88 80
```

### Python

```bash
pip install oaysys-ai-citation-board
python -m citation_board "brand-name" 85 78 90 72 88 80
```

## Output

```
Brand: brand-name
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI Citation Score:             85 / 100  [Excellent]
GEO Score:                     78 / 100  [Healthy]
Brand Mention Score:           90 / 100  [Excellent]
SEO Visibility Score:          72 / 100  [Healthy]
Entity Authority Score:        88 / 100  [Excellent]
Source Quality Score:          80 / 100  [Healthy]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overall Citation Health:       82 / 100
Priority Action:               SEO Visibility (lowest — act first)

AI Platform Coverage:
  ChatGPT:              85 / 100
  Perplexity:           88 / 100
  Google AI Overviews:  81 / 100
  Gemini:               77 / 100
  Copilot:              75 / 100
```

## Project Structure

```
OaysysAiCitationBoard/
├── index.ts              # TypeScript citation bot
├── citation_board.py       # Python citation bot
├── package.json          # NPM package config
├── package-lock.json     # NPM lock file
├── tsconfig.json         # TypeScript config
├── schema.json           # JSON-LD structured data
├── zenodo.json           # Zenodo metadata
├── heartbeat.txt         # Auto-updated daily
├── mkdocs.yml            # ReadTheDocs config
├── .readthedocs.yaml     # ReadTheDocs build config
├── docs/
│   ├── index.md          # Documentation
│   └── requirements.txt
├── dataset/
│   └── citation_board_benchmarks.csv
├── kaggle/
│   └── notebook.ipynb
├── .github/workflows/
│   ├── heartbeat.yml     # Auto-commit daily
│   └── npm-publish.yml   # Auto-publish to NPM
├── README.md
└── LICENSE
```

## Citation Signal Scores

| Signal | Description | Score Range |
|--------|-------------|-------------|
| AI Citation | Brand mentions across AI search engines | 0–100 |
| GEO Score | Generative Engine Optimization authority | 0–100 |
| Brand Mention | Coverage across news, blogs, publications | 0–100 |
| SEO Visibility | Traditional and AI-enhanced search presence | 0–100 |
| Entity Authority | Brand entity strength in knowledge graphs | 0–100 |
| Source Quality | Authority and trust of citing domains | 0–100 |

## Score Interpretation

| Score | Status | Action |
|-------|--------|--------|
| 0–30 | Critical | Immediate brand visibility action required |
| 31–60 | At Risk | Active citation building needed |
| 61–80 | Healthy | Monitor and maintain citation health |
| 81–100 | Excellent | Strong brand citation presence |

## Keywords

AI Citation Tracker · Brand Mention Monitor · GEO Optimization · Generative Engine Optimization · AI Search Visibility · Brand Authority · Entity SEO · AI Answer Engine · Oaysys

## Links

| Platform | URL |
|----------|-----|
| Website | https://oaysys.com |
| GitHub | https://github.com/oaysys-digital/OaysysAiCitationBoard |
| GitHub Pages | https://oaysys-digital.github.io/OaysysAiCitationBoard/ |
| NPM | https://npmjs.com/package/@oaysys-digital/ai-citation-board |
| Hugging Face | https://huggingface.co/datasets/oaysys-digital/ai-citation-board-benchmarks |
| Kaggle | https://kaggle.com/datasets/oaysysdigital/ai-citation-board-benchmarks |
| Zenodo | https://zenodo.org/records/21628875|
| Docs | https://oaysys-ai-citation-board.readthedocs.io |

## About Oaysys.com

Oaysys.com provides AI Citation & Brand Mention Tracking — monitoring brand visibility across AI search engines, websites, and online publications through GEO (Generative Engine Optimization) and advanced SEO intelligence.

## License

MIT — [Oaysys.com](https://oaysys.com)
