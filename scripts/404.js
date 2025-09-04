(async function() {
  // Get the requested URL path (without leading slash)
  const path = window.location.pathname.replace(/^\/+/, "");

  try {
    // Query your API to see if there is a redirect target
    const res = await fetch(`https://your-api.example.com/resolve?path=${encodeURIComponent(path)}`);
    if (res.ok) {
      const data = await res.json();

      if (data && data.redirectUrl) {
        window.location.href = data.redirectUrl;
        return;
      }
    }
  } catch (err) {
    console.error("Error checking redirect:", err);
  }

  // If no redirect found, show default message
  document.getElementById("not-found").innerHTML = `
    <h1>404 - Page Not Found</h1>
    <p>Sorry, we couldn’t find <code>${path}</code>.</p>
  `;
})();