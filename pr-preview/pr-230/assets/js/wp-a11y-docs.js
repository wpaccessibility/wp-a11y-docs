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
    request.open('GET', '/pr-preview/pr-230/assets/js/search-data.json', true);

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
// Search widget behavior
// ---------------------------------------------------------

  /**
   * Initializes live search UI.
   *
   * Includes:
   * - Updated results on keystrokes
   * - Accessibility announcements
   * - Keyboard navigation (arrows, Enter)
   * - Fuzzy search fallback
   *
   * @function searchLoaded
   * @param {lunr.Index} index - Lunr search index.
   * @param {Object.<string, Object>} docs - Document metadata.
   * @private
   */
  function searchLoaded(index, docs) {
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    var mainHeader = document.getElementById('main-header');
    var currentInput;
    var currentSearchIndex = 0;

    // Show search input via Ctrl+ shortcut
    jtd.addEvent(document, 'keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        mainHeader.classList.add('nav-open');
        searchInput.focus();
      }
    });

    /**
     * Shows the search results panel.
     * @function
     */
    function showSearch() {
      document.documentElement.classList.add('search-active');
    }

    /**
     * Hides the search results panel.
     * @function
     */
    function hideSearch() {
      document.documentElement.classList.remove('search-active');
    }

    /**
     * Updates search results each time input changes.
     *
     * Handles:
     * - Live search
     * - Fuzzy matching fallback
     * - Batched result rendering
     * - Screen reader announcements
     *
     * @function update
     * @private
     */
    function update() {
      currentSearchIndex++;
      var input = searchInput.value;

      if (input === '') {
        hideSearch();
      } else {
        showSearch();
        // Scroll fix for iOS Safari
        window.scroll(0, -1);
        setTimeout(function(){ window.scroll(0, 0); }, 0);
      }

      if (input === currentInput) return;

      currentInput = input;
      searchResults.innerHTML = '';

      if (input === '') return;

      /** @type {lunr.Index.Result[]} */
      var results = index.query(function(query) {
        var tokens = lunr.tokenizer(input);
        query.term(tokens, { boost: 10 });
        query.term(tokens, {
          wildcard: lunr.Query.wildcard.TRAILING
        });
      });

      // Fuzzy fallback
      if (results.length === 0 && input.length > 2) {
        var tokens = lunr.tokenizer(input).filter(t => t.str.length < 20);
        if (tokens.length > 0) {
          results = index.query(function(query) {
            query.term(tokens, {
              editDistance: Math.round(Math.sqrt(input.length / 2 - 1))
            });
          });
        }
      }

      let screenReaderFeedback = document.getElementById('screen-reader-feedback');
      screenReaderFeedback.innerText = "";

      if (results.length === 0) {
        // No results
        var noResultsDiv = document.createElement('div');
        noResultsDiv.classList.add('search-no-result');
        noResultsDiv.innerText = 'No results found';
        searchResults.appendChild(noResultsDiv);
        screenReaderFeedback.innerText = 'No results found';

      } else {
        // Render results
        var resultsList = document.createElement('ul');
        resultsList.classList.add('search-results-list');
        searchResults.appendChild(resultsList);

        screenReaderFeedback.innerText =
            results.length === 1 ?
                '1 result found, use arrow keys to read' :
                results.length + ' results found, use arrow keys to read';

        jtd.addEvent(resultsList, 'keydown', function(e) {
          handleSearchKeyEvents(searchInput, e);
        });

        addResults(resultsList, results, 0, 10, 100, currentSearchIndex);
      }

      /**
       * Recursively batch-renders search results to reduce UI blocking.
       *
       * @param {HTMLElement} resultsList
       * @param {lunr.Index.Result[]} results
       * @param {number} start - Start index.
       * @param {number} batchSize - How many results to render at once.
       * @param {number} batchMillis - Delay between batches.
       * @param {number} searchIndex - Used to cancel outdated renders.
       */
      function addResults(resultsList, results, start, batchSize, batchMillis, searchIndex) {
        if (searchIndex !== currentSearchIndex) return;

        for (var i = start; i < start + batchSize; i++) {
          if (i === results.length) return;
          addResult(resultsList, results[i]);
        }

        setTimeout(function() {
          addResults(resultsList, results, start + batchSize, batchSize, batchMillis, searchIndex);
        }, batchMillis);
      }

      /**
       * Renders a single search result item.
       *
       * @param {HTMLElement} resultsList
       * @param {lunr.Index.Result} result
       */
      function addResult(resultsList, result) {
        let doc = docs[result.ref];

        let resultsListItem = document.createElement('li');
        resultsListItem.classList.add('search-results-list-item');
        resultsList.appendChild(resultsListItem);

        let resultLink = document.createElement('a');
        resultLink.classList.add('search-result');
        resultLink.href = doc.url;
        resultsListItem.appendChild(resultLink);

        let resultTitle = document.createElement('div');
        resultTitle.classList.add('search-result-title');
        resultLink.appendChild(resultTitle);

        let resultDoc = document.createElement('div');
        resultDoc.classList.add('search-result-doc');
        resultDoc.innerHTML = '<svg viewBox="0 0 24 24" class="search-result-icon" aria-hidden="true"><use xlink:href="#svg-doc"></use></svg>';
        resultTitle.appendChild(resultDoc);

        let resultDocTitle = document.createElement('div');
        resultDocTitle.classList.add('search-result-doc-title');
        resultDocTitle.innerHTML = doc.title;
        resultDoc.appendChild(resultDocTitle);

        let resultSection = document.createElement('div');
        resultSection.classList.add('search-result-section');
        resultSection.innerHTML = "In: " + doc.doc;
        resultTitle.appendChild(resultSection);
      }
    }

    // Bind search events
    jtd.addEvent(searchInput, 'focus', () => setTimeout(update, 0));
    jtd.addEvent(searchInput, 'keyup', function(e) {
      switch (e.keyCode) {
        case 27: searchInput.value = ''; break;
        case 38:
        case 40:
        case 13: e.preventDefault(); return;
      }
      update();
    });

    jtd.addEvent(searchInput, 'keydown', function(e) {
      handleSearchKeyEvents(searchInput, e);
    });

    // Hide search when tabbing away
    jtd.addEvent(document, 'keyup', function(e) {
      if (e.keyCode === 9) {
        let focus = document.activeElement;
        let results = document.querySelector('.search');
        if (!results.contains(focus)) hideSearch();
      }
    });

    // Hide search when clicking outside input
    jtd.addEvent(document, 'click', function(e) {
      if (e.target !== searchInput) hideSearch();
    });
  }

//
// ---------------------------------------------------------
// Keyboard navigation for search results
// ---------------------------------------------------------

  /**
   * Handles arrow key navigation and Enter selection inside search results.
   *
   * @function handleSearchKeyEvents
   * @param {HTMLInputElement} searchInput - The search input element.
   * @param {KeyboardEvent} e - Key event.
   */
  function handleSearchKeyEvents(searchInput, e) {
    switch (e.keyCode) {
      case 38: { // Up arrow
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.classList.remove('active');
          if (active.parentElement.previousSibling) {
            var prev = active.parentElement.previousSibling.querySelector('.search-result');
            prev.classList.add('active');
            prev.focus();
          }
        }
        return;
      }

      case 40: { // Down arrow
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          if (active.parentElement.nextSibling) {
            var next = active.parentElement.nextSibling.querySelector('.search-result');
            active.classList.remove('active');
            next.classList.add('active');
            next.focus();
          }
        } else {
          var first = document.querySelector('.search-result');
          if (first) {
            first.classList.add('active');
            first.focus();
          }
        }
        return;
      }

      case 13: { // Enter
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) active.click();
        return;
      }
    }
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
   * Also removes the link's `href` to prevent accidental reloads.
   *
   * @function scrollNav
   */
  function scrollNav() {
    const targetLink = navLink();
    if (targetLink) {
      targetLink.scrollIntoView({ block: "center" });
      targetLink.removeAttribute('href');
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
   * Makes code blocks focusable for keyboard navigation.
   *
   * Applies to:
   * - Rouge highlighter blocks
   * - AsciiDoc listingblocks
   * - Generic code `<figure>` blocks
   *
   * @function
   */
  jtd.onReady(function() {
    var codeBlocks = document.querySelectorAll(
        'div.highlighter-rouge, div.listingblock > div.content, figure.highlight'
    );

    codeBlocks.forEach(codeBlock => {
      codeBlock.tabIndex = 0;
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
