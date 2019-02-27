import ReactGA from 'react-ga';

export function initAnalytics() {
  ReactGA.initialize('UA-133281039-1');
  ReactGA.pageview(document.location.pathname);
}

export function triggerPageViewEvent() {
  ReactGA.pageview(document.location.pathname);
}

export function triggerEvent(category, action, label) {
  ReactGA.event({
    category,
    action,
    label
  });
}
// onClick={() => triggerEvent('Event', `Click | LargeCard | ${id}`)}