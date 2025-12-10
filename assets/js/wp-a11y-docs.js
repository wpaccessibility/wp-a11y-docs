---
    layout: null
---

    (function (jtd, undefined) {

//
// ---------------------------------------------------------
// Event handling utilities
// ---------------------------------------------------------

  /**
   * Adds an event listener to an element with cross-browser support.
   *
   * @function jtd.addEvent
   * @param {Element|Document|Window} el - The element to attach the listener to.
   * @param {string} type - The event type (e.g., `"click"`).
   * @param {Function} handler - Callback executed when event triggers.
   */
  jtd.addEvent = function(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on' + type, handler);
    else el.addEventListener(type, handler);
  };

  /**
   * Removes an event listener from an element with cross-browser support.
   *
   * @function jtd.removeEvent
   * @param {Element|Document|Window} el - Target element.
   * @param {string} type - Event type.
   * @param {Function} handler - Event handler previously attached.
   */
  jtd.removeEvent = function(el, type, handler) {
    if (el.detachEvent) el.detachEvent('on' + type, handler);
    else el.removeEventListener(type, handler);
  };

  /**
   * Executes a callback when DOM is fully loaded.
   *
   * Handles:
   * - `DOMContentLoaded` (modern browsers)
   * - `document.readyState`
   * - IE8 fallback via `onreadystatechange`
   *
   * @function jtd.onReady
   * @param {Function} ready - Function executed when DOM is ready.
   */
  jtd.onReady = function(ready) {
    if (document.readyState !== 'loading') {
      ready();
    }
    else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', ready);
    }
    else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') ready();
      });
    }
  };

//
// ---------------------------------------------------------
// Navigation (mobile menu, active link highlighting)
// ---------------------------------------------------------

  /**
   * Initializes the site’s mobile navigation system.
   *
   * Features:
   * - Expand/collapse nested nav lists
   * - Toggle entire mobile menu
   * - Adds `ariaExpanded` attributes for accessibility
   *
   * @function initNav
   * @private
   */
  function initNav() {
    jtd.addEvent(document, 'click', function(e) {
      var target = e.target;

      // Find the element controlling nav expansion
      while (target && !(target.classList && target.classList.contains('nav-list-expander'))) {
        target = target.parentNode;
      }

      if (target) {
        e.preventDefault();
        target.ariaExpanded = target.parentNode.classList.toggle('active');
      }
    });

    const siteNav = document.getElementById('site-nav');
    const mainHeader = document.getElementById('main-header');
    const menuButton = document.getElementById('menu-button');

    /**
     * Toggles mobile navigation panel.
     */
    jtd.addEvent(menuButton, 'click', function(e) {
      e.preventDefault();

      if (menuButton.classList.toggle('nav-open')) {
        siteNav.classList.add('nav-open');
        mainHeader.classList.add('nav-open');
        menuButton.ariaExpanded = "true";
      } else {
        siteNav.classList.remove('nav-open');
        mainHeader.classList.remove('nav-open');
        menuButton.ariaExpanded = false;
      }
    });
  }

//
// ---------------------------------------------------------
// Search system initialization
// ---------------------------------------------------------

  /**
   * Loads search data (search-data.json) and initializes Lunr.js index.
   *
   * After loading, exposes:
   * - `window.jtdSearchIndex`
   * - `window.jtdSearchDocs`
   *
   * Then calls {@link searchLoaded} to bind UI behavior.
   *
   * @function initSearch
   * @private
   */
  function initSearch() {
    var request = new XMLHttpRequest();
    request.open('GET', '{{ "assets/js/search-data.json" | relative_url }}', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var docs = JSON.parse(request.responseText);

        lunr.tokenizer.separator = "/[\\s/]+/";

        /** @type {lunr.Index} */
        var index = lunr(function() {
          this.ref('id');
          this.field('title', { boost: 200 });
          this.field('description');
          this.field('content', { boost: 2 });
          this.field('relUrl');
          this.metadataWhitelist = ['position'];

          for (var i in docs) {
            this.add({
              id: i,
              title: docs[i].title,
              description: docs[i].description,
              content: docs[i].content,
              relUrl: docs[i].relUrl
            });
          }
        });

        searchLoaded(index, docs);
        window.jtdSearchIndex = index;
        window.jtdSearchDocs = docs;

      } else {
        console.log('Error loading ajax request. Request status:' + request.status);
      }
    };

    request.onerror = function() {
      console.log('There was a connection error');
    };

    request.send();
  }

//
// ---------------------------------------------------------
// Navigation link helpers (active link, scroll into view)
// ---------------------------------------------------------

  /**
   * Returns the nav link corresponding to the current page path.
   *
   * Handles variations:
   * - With/without trailing slash
   * - `.html` extension
   *
   * @function navLink
   * @returns {HTMLAnchorElement|null}
   */
  function navLink() {
    var pathname = document.location.pathname;

    var navLink = document.getElementById('site-nav').querySelector(`a[href="${pathname}"]`);
    if (navLink) return navLink;

    // Normalize path
    if (pathname.endsWith('/') && pathname !== '/') {
      pathname = pathname.slice(0, -1);
    }

    if (pathname !== '/') {
      navLink = document.getElementById('site-nav')
          .querySelector(`a[href="${pathname}"], a[href="${pathname}/"], a[href="${pathname}.html"]`);
      if (navLink) return navLink;
    }

    return null;
  }

  /**
   * Scrolls sidebar navigation so the active link is centered.
   *
   * @function scrollNav
   */
  function scrollNav() {
    const targetLink = navLink();
    if (targetLink) {
      targetLink.scrollIntoView({ block: "center" });
    }
  }

  /**
   * Marks the current nav item and its ancestors as active.
   *
   * Adds:
   * - `.active` classes
   * - `aria-current="page"`
   *
   * @function activateNav
   */
  function activateNav() {
    var target = navLink();
    if (target) {
      target.classList.add('active');
      target.ariaCurrent = "page";
    }
    while (target) {
      while (target && !(target.classList && target.classList.contains('nav-list-item'))) {
        target = target.parentNode;
      }
      if (target) {
        target.classList.add('active');
        target.classList.toggle('active', true);
        target = target.parentNode;
      }
    }
  }

//
// ---------------------------------------------------------
// Document ready initialization
// ---------------------------------------------------------

  jtd.onReady(function() {
    if (document.getElementById('site-nav')) {
      initNav();
      activateNav();
      scrollNav();
    }

    initSearch();
  });

  /**
   * Makes scrollable containers focusable for keyboard navigation.
   *
   * Applies to:
   * - Code blocks
   * - Tables
   * - AsciiDoc listingblocks
   * - Generic code `<figure>` blocks
   *
   * @function
   */
  jtd.onReady(function() {
    let scrollBlocks = document.querySelectorAll(
        'div.highlighter-rouge > div.highlight, div.listingblock > div.content, figure.highlight, div.table-wrapper'
    );

    scrollBlocks.forEach(scrollBlock => {
      scrollBlock.tabIndex = 0;
    });
  });

})(window.jtd = window.jtd || {});

//
// ---------------------------------------------------------
// Full Search Results Page Logic
// ---------------------------------------------------------

jtd.onReady(function() {

  /**
   * Processes full-page search results based on `?q=...` URL parameter.
   *
   * Runs only on pages containing `#search-results-page`.
   *
   * Handles:
   * - Waiting for global Lunr index (loaded asynchronously)
   * - Rendering complete results list
   * - Updating page title & header
   *
   * @function processFullPageSearch
   * @private
   */
  function processFullPageSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q") ? urlParams.get("q").trim() : null;
    const resultsContainer = document.getElementById("search-results-page");
    const searchInput = document.getElementById("search-input");
    const input = query;

    if (!resultsContainer) return;

    // Handle empty search query
    if (!query) {
      // Check if there was a q parameter but it was empty
      if (urlParams.has("q")) {
        let pageTitle = document.querySelector('title');
        let h1 = document.querySelector('h1');

        if (pageTitle) pageTitle.innerText = 'Empty Search Query - No Results';
        if (h1) h1.innerText = 'No Search Term Entered';

        resultsContainer.innerHTML = '<p>Please enter a search term to find relevant content.</p>';
      }
      return;
    }

    if (searchInput) searchInput.value = query;

    if (!window.jtdSearchIndex || !window.jtdSearchDocs) {
      resultsContainer.innerHTML =
          '<p>Error: The search index is not yet available. Please try again later.</p>';
      return;
    }

    const index = window.jtdSearchIndex;
    const docs = window.jtdSearchDocs;

    /** @type {lunr.Index.Result[]} */
    var results = index.query(function(queryObj) {
      var tokens = lunr.tokenizer(input);
      queryObj.term(tokens, { boost: 10 });
      queryObj.term(tokens, { wildcard: lunr.Query.wildcard.TRAILING });
    });

    // Fuzzy fallback
    if (results.length === 0 && input.length > 2) {
      var tokens = lunr.tokenizer(input).filter(t => t.str.length < 20);
      if (tokens.length > 0) {
        results = index.query(function(queryObj) {
          queryObj.term(tokens, {
            editDistance: Math.round(Math.sqrt(input.length / 2 - 1))
          });
        });
      }
    }

    // Render results
    if (results.length > 0) {
      let term = results.length === 1 ? 'Search result' : 'Search results';
      let pageTitle = document.querySelector('title');
      let h1 = document.querySelector('h1');

      pageTitle.innerText = `${results.length} ${term} found for "${query}"`;
      h1.innerText = `${results.length} ${term} found for "${query}"`;

      resultsContainer.innerHTML = `
        <h2>${term}</h2>
        <ol>
          ${results.map(r => {
        const doc = docs[r.ref];

        const docSection = `<p><strong>In:</strong> ${doc.doc}</p>`;
        const description = doc.description ? `<p>${doc.description}</p>` : '';

        return `
              <li>
                <h3><a href="${doc.url}">${doc.title}</a></h3>
                ${description}
                ${docSection}
              </li>`;
      }).join("")}
        </ol>
      `;

    } else {
      resultsContainer.innerHTML =
          `<p>No results found for "<strong>${query}</strong>".</p>`;
    }
  }

  /**
   * Polls asynchronously until Lunr index is available.
   */
  const checkInterval = setInterval(function() {
    if (window.jtdSearchIndex && window.jtdSearchDocs) {
      clearInterval(checkInterval);
      processFullPageSearch();
    }
  }, 100);

});
