export default {
  getImage () {
    return {
      id: '6ab79620-08c7-11e7-a87e-adfa0e4d03b7',
      publicId: '2qY9COoAhfMrsH7mCyh86T',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/3ewrewrr.jpg',
      descripttion: '#awesome',
      tags: ['awesome'],
      createAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  }
}
