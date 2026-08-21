---
title: Digital documents
layout: default
parent: Content and images
description: Similar accessibility rules apply to both PDFs and HTML documents
nav_order: 6
contributors:
  - Rian Rietveld
  - Joke Hoogeduin
  - Ed Boon
---

# Digital documents

With digital documents we mean all digital documents that are not rendered as web pages. When you add a digital document as a download to your content, users must be able to access and read it.

{: .callout .info }
**Note**: This website is about web accessibility. On this page we only briefly explain what is important for PDFs (Portable Document Format) and point you to resources specialized in accessibility for digital documents.

All [WCAG success criteria for web content](https://www.w3.org/WAI/WCAG22/quickref/) also apply for digital documents if they are included in a website that needs to comply to WCAG. Additionally, for digital documents, the W3C published the WCAG2ICT: [Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies](https://www.w3.org/TR/wcag2ict/).

But the best advice is trying to avoid important publishing information in digital downloads only. A webpage is so much easier to make accessible than a PDF. If you must, have the best of both worlds: publish the information on the website and also provide the PDF as a super fancy download. Then the user has a choice.

## Accessible PDFs in short

PDFs (Portable Document Format) are often referred to as tagged PDFs. Similar accessibility rules apply for PDFs as for HTML documents:

- headings structure.
- appropriate link texts.
- color contrast.
- alternative text for images.

### Tagged PDF

PDF tags are the semantic content marks and indicate the logical document structure and reading order. Compared to HTML tags, PDF tags look similar but are different.

In the source document (e.g., Microsoft Word, Adobe InDesign) you are able to set the future tag structure. If you use document styles to set headings, rather than changing the font and sizes manually, then PDF tags will be set in the resulting document. General content will be inside <p> tags. 

It is also important to format your lists and tables correctly to get the best results while exporting your PDF.

### Export as accessible PDF

The list of software which is able to export a PDF is quite long. In the export settings of your software, you should watch for an option which is called Tagged PDF or similar.

- [Create accessible PDFs](https://support.microsoft.com/en-us/accessibility/office-accessibility/create-accessible-pdfs) by Microsoft.
- [Create and verify PDF accessibility (Acrobat Pro)](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html) by Adobe for Acrobat Pro.

{: .callout .warning }
**Warning**: Google Docs doesn’t support the export of a tagged and accessible PDF yet without any help of a plugin.

## Resources

### WCAG Success Criteria for digital documents

- [WCAG success criteria for web content](https://www.w3.org/WAI/WCAG22/quickref/).
- [Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies](https://www.w3.org/TR/wcag2ict/).

### Other resources

- [PDF Accessibility](https://webaim.org/techniques/acrobat/) on WebAIM.
- [PDF/UA in a Nutshell](https://pdfa.org/resource/pdfua-in-a-nutshell/) by the PDF association.
- [Techniques for Accessible PDF](https://pdfa.org/techniques-for-accessible-pdf/) by the PDF Association.
- [Create accessible PDFs](https://support.microsoft.com/en-us/accessibility/office-accessibility/create-accessible-pdfs) by Microsoft.
- [PDF Accessibility Overview](https://www.adobe.com/accessibility/pdf/pdf-accessibility-overview.html) by Adobe.
- [Create and verify PDF accessibility](https://helpx.adobe.com/ie/acrobat/using/create-verify-pdf-accessibility.html) by Adobe for Acrobat Pro.
- [Tagged PDF](https://taggedpdf.com/) by Tagged PDF.
