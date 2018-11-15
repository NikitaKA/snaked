import '../styles/style.scss';

function requireAll(r) {
  r.keys().forEach(r);
}

// Inject templates only in development mode (for hot-reload)
if (process.env.NODE_ENV === 'development') {
  requireAll(require.context('../', true, /\.pug/));
}
