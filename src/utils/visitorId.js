function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return null;
}

function setCookie(name, value, days = 365) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

export function getOrCreateVisitorId() {
  let visitorId = getCookie("visitor_id");

  if (!visitorId) {
    visitorId = crypto.randomUUID();
    setCookie("visitor_id", visitorId, 365);
  }

  return visitorId;
}
