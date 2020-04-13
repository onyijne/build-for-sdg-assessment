const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');


/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./assets/service-worker.js');
}

/**
 * Warn the page must be served over HTTPS
 * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
 * Installability requires a service worker with a fetch event handler, and
 * if the page isn't served over HTTPS, the service worker won't load.
 */
if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}

window.addEventListener('beforeinstallprompt', (event) => {
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container
  divInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  promptEvent.userChoice.then((result) => {
    // eslint-disable-next-line no-console
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  });
});

window.addEventListener('appinstalled', (event) => {
  // eslint-disable-next-line no-console
  console.log('👍', 'appinstalled', event);
});

window.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select[data-period-type]');
  const data = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: select.options[select.selectedIndex].value,
    timeToElapse: document.querySelector('input[data-time-to-elapse]').value,
    reportedCases: document.querySelector('input[data-reported-cases]').value,
    population: document.querySelector('input[data-population]').value,
    totalHospitalBeds: document.querySelector('input[data-total-hospital-beds]').value
  };
  document.querySelector('input[data-go-estimate]').addEventListener(
    'click', (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-console
      console.log(data);
    }
  );
});
