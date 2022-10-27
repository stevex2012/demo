// 携带登录态credentials必须为include
export default function fetch(url, options) {
  // return window.fetch(url, { ...options, credentials: "omit" });
  return window.fetch(url, { ...options, mode: "no-cors" });
}
