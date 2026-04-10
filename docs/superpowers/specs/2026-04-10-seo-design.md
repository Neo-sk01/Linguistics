# SEO Design Spec For Imperium Linguistics

## Summary

This spec defines a balanced local SEO pass for [imperiumlinguistics.com](https://imperiumlinguistics.com) focused on lead generation in South Africa.

The work will target both primary service lines equally:

- Transcription services
- Interpreting services

The website will explicitly target South African English with `en-ZA` language settings and South Africa as the primary service area.

## Goals

- Improve crawlability and indexability for the public marketing pages
- Align metadata and page copy with South African commercial search intent
- Strengthen the transcription and interpreting pages as rankable landing pages
- Improve internal linking and lead capture paths from discovery pages to enquiry actions
- Establish a reusable SEO structure that can be maintained as the site grows

## Non-Goals

- Publishing new city-specific landing pages in this pass
- Launching a blog or resource hub in this pass
- Redesigning the visual identity or page layouts beyond what is needed for SEO clarity
- Rebuilding the site information architecture
- Making claims about rankings or traffic outcomes before search engines recrawl the site

## Current State

The current site already includes public pages for home, transcription, interpreting, FAQ, contact, policies, and a file upload guide. The main issues observed in the current implementation are:

- Root document language is set to `pt-br` instead of `en-ZA`
- Metadata is generic on several pages
- Home page social preview URLs still reference a GitHub repository instead of the live domain
- No `robots.txt` or sitemap is present
- Canonical strategy is not established
- Business and page-level structured data are not defined
- Some page copy is visually polished but not yet aligned with high-intent South African search phrasing
- Utility and test pages exist and should not contribute to public search indexing

## SEO Strategy

This pass uses a balanced local SEO strategy:

- Fix the technical SEO foundation first
- Reposition page copy around South African service intent
- Treat transcription and interpreting as equally important ranking targets
- Use the home page for broad discovery and service pages for more specific commercial intent
- Support primary pages with FAQ content and clearer internal links to the contact path

## Canonical And Locale Decisions

- Canonical production domain: `https://imperiumlinguistics.com`
- Primary locale: `en-ZA`
- Primary service area: South Africa
- Primary ranking services: transcription and interpreting

These decisions must be reflected consistently in metadata, structured data, sitemap URLs, social previews, and page copy.

## Public Indexable Pages

The following pages are intended to be indexable and included in the sitemap:

- `/`
- `/transcription`
- `/interpreting`
- `/faq`
- `/contact`
- `/policies`
- `/we-transfer`

The following pages are utility or test pages and should be excluded from indexing and from the sitemap:

- `/env-test`
- `/sentry-example-page`
- Any equivalent internal-only diagnostic or test routes

## Technical SEO Foundation

### Root Metadata

The root layout should become the source of shared SEO defaults for the public site. It should include:

- `lang="en-ZA"` on the root HTML element
- `metadataBase` set to `https://imperiumlinguistics.com`
- A consistent site title template
- A stronger default description reflecting language services in South Africa
- Canonical defaults aligned to the live domain
- Correct Open Graph defaults
- Correct Twitter card defaults
- Favicon and social image defaults that reference real public assets

### Robots And Sitemap

Add Next.js metadata route handlers for:

- `robots.txt`
- sitemap generation

Rules for the robots configuration:

- Allow indexing of the core public marketing pages
- Disallow or omit non-public test routes where appropriate
- Include a sitemap URL pointing to the live canonical domain

Rules for the sitemap:

- Include only the intended public pages
- Use canonical production URLs
- Exclude test and diagnostic pages

### Canonicals

Each primary public page should expose a canonical URL derived from the production domain. Canonicals must not point to GitHub, localhost, preview URLs, or duplicate route variants.

### Structured Data

Add JSON-LD structured data in places where it will improve search understanding without overcomplicating maintenance.

This pass should include:

- Organization schema at the site level, with South Africa reflected through service area data rather than pretending the site targets a single city
- Service schema for the transcription and interpreting pages
- FAQ schema for the FAQ page if the content remains question-and-answer based

The schema should reflect:

- Brand name: imperium linguistics
- Domain: `https://imperiumlinguistics.com`
- Service area: South Africa
- Contact details that are already publicly shown on the site

## Page Intent Strategy

### Home Page

The home page should target broad commercial discovery intent around language services in South Africa.

Its role is to:

- Introduce imperium linguistics clearly
- Mention both transcription and interpreting above the fold or early in the content
- Build trust and service credibility
- Route search visitors to the appropriate service page
- Provide an easy path to contact or quote request

The home page should not try to outrank the dedicated service pages for narrower service queries. Its content should stay broad and brand-supportive.

### Transcription Page

The transcription page should serve as a primary ranking page for South Africa-focused transcription service intent.

The page should clearly communicate:

- Professional transcription services in South Africa
- Supported use cases such as legal, business, educational, and general transcription
- Turnaround options
- Quality and review process
- Confidentiality and secure handling
- Clear next-step enquiry actions

The page should use one clear H1 and descriptive H2 sections that reflect user intent rather than decorative labels alone.

### Interpreting Page

The interpreting page should serve as a primary ranking page for South Africa-focused interpreting service intent.

The page should clearly communicate:

- Interpreting services in South Africa
- The difference between simultaneous and consecutive interpreting
- Use cases such as conferences, legal settings, meetings, and multilingual events
- Languages supported
- Equipment support where relevant
- A strong quote or contact path

This page should also use one clear H1 and descriptive H2 sections tied to actual search and buyer intent.

### FAQ Page

The FAQ page should support long-tail visibility and reduce objections that block enquiries.

The FAQ content should reinforce topics such as:

- Turnaround times
- Accuracy and review process
- Confidentiality
- Supported languages
- Interpreting formats
- Service coverage in South Africa
- Equipment support where applicable

If the FAQ content continues to be structured as stable question-and-answer content, it should also be mirrored in FAQ structured data.

### Contact Page

The contact page should remain primarily conversion-focused while still supporting SEO through:

- Metadata aligned to South African service coverage
- Copy that reinforces both transcription and interpreting
- Clear response expectations
- Simple, friction-light enquiry forms

## Content Optimization Principles

To avoid weak or spammy SEO implementation, content changes should follow these rules:

- Use natural South African service phrasing rather than keyword stuffing
- Keep one primary H1 per ranking page
- Use descriptive subheadings that match searcher questions and commercial intent
- Replace vague slogans with clear service value where needed
- Mention South Africa naturally in titles, descriptions, openings, and relevant body copy
- Keep both main services visible across the site without making pages compete with each other

## Internal Linking

Internal links should be strengthened between the primary pages:

- Home to transcription
- Home to interpreting
- Service pages to contact
- FAQ to contact
- FAQ to service pages where answers reference service details
- Contact page back to the main service pages if helpful

Anchor text should be descriptive and helpful, not repetitive or stuffed.

## Metadata Direction

Page-level metadata should move from generic branding to intent-driven summaries.

The target pattern is:

- Home: broad language services in South Africa
- Transcription: professional transcription services in South Africa
- Interpreting: professional interpreting services in South Africa
- FAQ: frequently asked questions about transcription and interpreting services in South Africa
- Contact: contact imperium linguistics for transcription and interpreting services in South Africa

Descriptions should stay readable and commercially relevant, with local intent included naturally.

## Indexing Controls

Public pages that serve prospective clients should remain indexable.

Utility, example, and diagnostic pages should either:

- be explicitly marked `noindex`, or
- be excluded through route-level metadata and omitted from the sitemap

This prevents low-value pages from diluting crawl signals or appearing in search.

## Implementation Shape

The implementation should favor a maintainable structure rather than repeating ad hoc metadata objects across the app.

Recommended shape:

- A central SEO helper or config for shared brand and domain values
- Root layout defaults for locale and global metadata
- Page-level metadata for each public ranking page
- Dedicated metadata route handlers for `robots.txt` and sitemap
- Shared JSON-LD utilities if multiple pages need structured data

## Validation Plan

Before the work is considered complete, verify:

- Root HTML language is `en-ZA`
- Canonical URLs resolve to `https://imperiumlinguistics.com`
- Open Graph and Twitter metadata reference the live site
- `robots.txt` is generated correctly
- Sitemap includes only intended public pages
- Non-public test pages are not indexable
- Each primary ranking page has one clear H1
- Structured data is present on the intended pages
- Build and lint checks pass

## Risks And Guardrails

The biggest risks in this SEO pass are:

- Accidentally indexing low-value test pages
- Keeping generic or placeholder metadata on key pages
- Over-optimizing copy until it sounds unnatural
- Creating overlapping search intent between the home page and service pages

Guardrails:

- Keep page roles distinct
- Centralize shared SEO values
- Favor clear service language over hype language
- Validate rendered metadata, not just source code assumptions

## Expected Outcome

After this pass, the site should:

- Present a consistent `en-ZA` and South Africa-focused SEO identity
- Offer cleaner crawl and indexing signals to search engines
- Give transcription and interpreting equal ranking support as commercial landing pages
- Provide stronger internal routes from discovery content to enquiry actions
- Be better positioned for local lead generation in South Africa

## Implementation Readiness

This scope is focused enough for a single implementation plan. It does not require decomposition into multiple independent specs.
