#!/usr/bin/env python3
"""
Oaysys AI Citation Board
AI Citation & Brand Mention Tracker for monitoring brand visibility
across AI search engines, websites, and online publications.
https://oaysys.com
"""

import sys


def get_status(score: int) -> str:
    if score <= 30:
        return "Critical"
    elif score <= 60:
        return "At Risk"
    elif score <= 80:
        return "Healthy"
    return "Excellent"


def get_priority_action(scores: dict) -> str:
    labels = {
        "ai_citation": "AI Citation",
        "geo_score": "GEO Score",
        "brand_mention": "Brand Mention",
        "seo_visibility": "SEO Visibility",
        "entity_authority": "Entity Authority",
        "source_quality": "Source Quality",
    }
    lowest_key = min(scores, key=scores.get)
    return f"{labels[lowest_key]} ({scores[lowest_key]}/100 — act first)"


def get_ai_platform_coverage(ai_citation: int, geo: int) -> dict:
    return {
        "ChatGPT": min(100, round(ai_citation * 1.0)),
        "Perplexity": min(100, round(ai_citation * 1.03)),
        "Google AI Overviews": min(100, round(geo * 1.04)),
        "Gemini": min(100, round(geo * 0.99)),
        "Copilot": min(100, round(ai_citation * 0.88)),
    }


def track_citations(
    brand: str,
    ai_citation: int = 85,
    geo_score: int = 78,
    brand_mention: int = 90,
    seo_visibility: int = 72,
    entity_authority: int = 88,
    source_quality: int = 80,
) -> dict:
    """
    Track and score brand citation signals across AI and web platforms.

    Args:
        brand: Brand name to track
        ai_citation: AI citation score (0-100)
        geo_score: GEO (Generative Engine Optimization) score (0-100)
        brand_mention: Brand mention score (0-100)
        seo_visibility: SEO visibility score (0-100)
        entity_authority: Entity authority score (0-100)
        source_quality: Source quality score (0-100)

    Returns:
        dict with individual signal scores, overall health, and AI platform coverage
    """
    scores = {
        "ai_citation": ai_citation,
        "geo_score": geo_score,
        "brand_mention": brand_mention,
        "seo_visibility": seo_visibility,
        "entity_authority": entity_authority,
        "source_quality": source_quality,
    }
    overall_citation_health = round(sum(scores.values()) / 6)

    return {
        "brand": brand,
        "ai_citation_score": ai_citation,
        "geo_score": geo_score,
        "brand_mention_score": brand_mention,
        "seo_visibility_score": seo_visibility,
        "entity_authority_score": entity_authority,
        "source_quality_score": source_quality,
        "overall_citation_health": overall_citation_health,
        "priority_action": get_priority_action(scores),
        "ai_platform_coverage": get_ai_platform_coverage(ai_citation, geo_score),
    }


if __name__ == "__main__":
    brand = sys.argv[1] if len(sys.argv) > 1 else "brand-name"
    ai_citation = int(sys.argv[2]) if len(sys.argv) > 2 else 85
    geo_score = int(sys.argv[3]) if len(sys.argv) > 3 else 78
    brand_mention = int(sys.argv[4]) if len(sys.argv) > 4 else 90
    seo_visibility = int(sys.argv[5]) if len(sys.argv) > 5 else 72
    entity_authority = int(sys.argv[6]) if len(sys.argv) > 6 else 88
    source_quality = int(sys.argv[7]) if len(sys.argv) > 7 else 80

    result = track_citations(
        brand, ai_citation, geo_score, brand_mention,
        seo_visibility, entity_authority, source_quality
    )

    print(f"Brand: {result['brand']}")
    print("=" * 45)
    print(f"AI Citation Score:             {result['ai_citation_score']}/100  [{get_status(result['ai_citation_score'])}]")
    print(f"GEO Score:                     {result['geo_score']}/100  [{get_status(result['geo_score'])}]")
    print(f"Brand Mention Score:           {result['brand_mention_score']}/100  [{get_status(result['brand_mention_score'])}]")
    print(f"SEO Visibility Score:          {result['seo_visibility_score']}/100  [{get_status(result['seo_visibility_score'])}]")
    print(f"Entity Authority Score:        {result['entity_authority_score']}/100  [{get_status(result['entity_authority_score'])}]")
    print(f"Source Quality Score:          {result['source_quality_score']}/100  [{get_status(result['source_quality_score'])}]")
    print("=" * 45)
    print(f"Overall Citation Health:       {result['overall_citation_health']}/100")
    print(f"Priority Action:               {result['priority_action']}")
    print("\nAI Platform Coverage:")
    for platform, score in result['ai_platform_coverage'].items():
        print(f"  {platform:<25} {score}/100")
