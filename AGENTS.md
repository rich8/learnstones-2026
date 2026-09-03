# Learnstones HTML Basics 2 Reconstruction

## Task
Rebuild the old Learnstones lesson page `html-basics-2` as a single-file Markdown source plus a modern slideshow renderer, while preserving the original lesson content and the visible traffic-light UI pattern.

## Current source material
- Saved page source: `wp_html_lesson.html`
- Reconstructed Markdown draft: `html-basics-2-reconstructed.md`
- Reference URL: `http://learnstones.com/lessons/html-basics-2/`

## What has been established
- The lesson page used WordPress 4.4.33.
- Content was rendered through `wp-gfm-master` markdown handling.
- The slideshow UI came from the custom `learnstones-master` plugin.
- The legacy page included per-slide traffic-light controls.
- Server-side traffic-light reporting and any input-back submission features are deferred for now.

## Notes on content format
- Markdown links should use standard `[text](url)` syntax.
- Markdown images should use standard `![alt](url)` syntax.
- Slide boundaries should remain explicit and separate from the lesson content.

## Likely legacy files to inspect next
- `ls.js`
- `presentation.js`
- `presentation_wrapper.js`

## Next steps
1. Inspect the legacy slideshow JavaScript to recover navigation and slide state behavior.
2. Decide whether to reuse a modern Markdown parser such as `markdown-it` or `remark`.
3. Implement a small slide renderer that reads the Markdown source and renders one slide per section.
4. Preserve the traffic-light visual state locally, but keep server callbacks disabled until the data flow is designed.
