// import jsonData from './example.json'

export default {
  name: 'ExampleComponent',
  components: {
  },
  template: `
    <div>Im the new div</div>
    <p>{{cardData}}</p>
  `
  data () {
    return {
      cardData: 'Placeholder Data'
    }
  }
}
