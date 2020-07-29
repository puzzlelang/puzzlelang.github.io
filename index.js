var app = new Vue({
  el: '#app',
  data: {
    currentPreview: 1,
    currentLang: 'Clean + Simple',
    langs: ['Clean + Simple', 'Extendable', 'Custom Syntax', 'CLI', 'Embeddable'],
    previewItems: [{name: 'Objects', index: 1}, {name: 'Behaviours', index: 2}, {name: 'CRUD API', index: 3}, {name: 'Extendable', index: 4}]
  }
})