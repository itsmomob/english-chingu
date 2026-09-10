/* ============================================================
   registry.js — topic and grammar registry
   Load this FIRST, before any topic or grammar file.
   ============================================================ */

window.__topics = [];
window.__grammar = [];

window.registerTopic = function (topic) {
  if (!topic || !topic.id) {
    console.warn("registerTopic: missing id", topic);
    return;
  }
  window.__topics.push(topic);
};

window.registerGrammar = function (point) {
  if (!point || !point.id) {
    console.warn("registerGrammar: missing id", point);
    return;
  }
  window.__grammar.push(point);
};
