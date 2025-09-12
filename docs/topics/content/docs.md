---
title: Digital documents
layout: default
parent: Content and images
nav_order: 7
---

# Digital documents

{: .warning }
**TODO:**
This content should be reviewed and restructured.

**TODO**: this topic (and the link) needs to be updated, also other types of docs need to be added.

## Accessible PDFs 

PDFs (Portable Document Format) are often referred as tagged PDFs. Similar accessibility rules applies for PDFs as HTML documents:

- headings structure.
- appropriate link texts.
- color contrast.
- alternative text for images.

### Tagged PDF

PDF tags are the semantic content marks and indicate the logical document structure and reading order. Compared to HTML tags, PDF tags look similar, but are not the same.

In the source document (e.g. Microsoft Word, Adobe InDesign) you are able to set the future tag structure. If you use document styles to set headings, rather than changing the font and sizes manually, then PDF tags will be set in the resulting document. General content will be inside <p> tags. It also important to format your lists and tables correctly to get good results while exporting your PDF.

The Paciello Group has a good [overview of PDF inaccessibility](https://developer.paciellogroup.com/blog/2017/02/pdf-inaccessibility/).

### Export as accessible PDF

The list of software which are able to export a PDF is quite long. In the export settings of your software, you should watch for an option which is called Tagged PDF or similar.

{: .warning }
**Note**: Google Docs doesn’t yet support the export of a tagged and accessible PDF yet without any help of a plugin.

### Resources

- [Defining PDF Accessibility](https://webaim.org/techniques/acrobat/) on WebAIM.
- [Overview of PDF inaccessibility](https://developer.paciellogroup.com/blog/2017/02/pdf-inaccessibility/), by the Paciello Group.
- [PDF Accessibility Overview](https://www.adobe.com/accessibility/pdf/pdf-accessibility-overview.html), by Adobe.
- [Create and verify PDF accessibility](https://helpx.adobe.com/ie/acrobat/using/create-verify-pdf-accessibility.html), by Acrobat Pro
- [PDF/UA in a Nutshell (PDF)](https://pdfa.org/wp-content/until2016_uploads/2013/08/PDFUA-in-a-Nutshell-PDFUA.pdf), by the PDF association.
- [Tagged PDF 508 help center](https://taggedpdf.com/508-pdf-help-center/), by Tagged PDF.

