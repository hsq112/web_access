const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

dropdownItems.forEach((menuItem) => {
  const dropdownMenu = menuItem.querySelector('.dropdown-menu');
  const dropdownToggle = menuItem.querySelector('.dropdown-toggle');

  dropdownToggle.addEventListener('click', () => {
    const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';

    closeAllDropdowns(menuItem);

    dropdownToggle.setAttribute('aria-expanded', !expanded);
    dropdownMenu.style.display = expanded ? 'none' : 'block';
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAllDropdowns();
  }
});

dropdownLinks.forEach((link) => {
  link.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const linkHref = link.getAttribute('href');
      window.location.href = linkHref;
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    closeAllDropdowns();
  }
});

function closeAllDropdowns(excludeMenuItem) {
  dropdownItems.forEach((menuItem) => {
    if (menuItem !== excludeMenuItem) {
      const dropdownMenu = menuItem.querySelector('.dropdown-menu');
      const dropdownToggle = menuItem.querySelector('.dropdown-toggle');
      const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';

      if (expanded) {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.style.display = 'none';
      }
    }
  });
}


function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}
