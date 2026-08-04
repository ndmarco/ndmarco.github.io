(function () {
  var LANG_COLORS = {
    Julia: '#a270ba',
    'C++': '#f34b7d',
    R: '#198ce7',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051'
  };

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : str;
    return div.innerHTML;
  }

  function fmtDate(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function card(repo) {
    var lang = repo.language;
    var dotColor = LANG_COLORS[lang] || '#8b9099';
    var langHtml = lang
      ? '<span class="repo-card__lang"><span class="repo-card__lang-dot" style="background:' +
        dotColor +
        '"></span>' +
        escapeHtml(lang) +
        '</span>'
      : '';

    return (
      '<article class="repo-card">' +
      '<h2 class="repo-card__title"><a href="' +
      repo.html_url +
      '" target="_blank" rel="noopener">' +
      escapeHtml(repo.name) +
      '</a></h2>' +
      (repo.description ? '<p class="repo-card__desc">' + escapeHtml(repo.description) + '</p>' : '') +
      '<div class="repo-card__meta">' +
      langHtml +
      '<span class="repo-card__stat"><i class="fas fa-star" aria-hidden="true"></i> ' +
      repo.stargazers_count +
      '</span>' +
      '<span class="repo-card__stat"><i class="fas fa-code-branch" aria-hidden="true"></i> ' +
      repo.forks_count +
      '</span>' +
      '<span class="repo-card__updated">Updated ' +
      fmtDate(repo.pushed_at) +
      '</span>' +
      '</div>' +
      '</article>'
    );
  }

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('repositories');
    if (!container || !window.__repoList || !window.__repoList.length) return;

    Promise.all(
      window.__repoList.map(function (fullName) {
        return fetch('https://api.github.com/repos/' + fullName).then(function (res) {
          if (!res.ok) throw new Error('Failed to fetch ' + fullName);
          return res.json();
        });
      })
    )
      .then(function (repos) {
        container.innerHTML = '<div class="repo-grid">' + repos.map(card).join('') + '</div>';
      })
      .catch(function (err) {
        container.innerHTML =
          '<p class="repositories__error">Could not load repositories from GitHub right now. ' +
          '<a href="https://github.com/ndmarco" target="_blank" rel="noopener">View on GitHub</a>.</p>';
        console.error(err);
      });
  });
})();
