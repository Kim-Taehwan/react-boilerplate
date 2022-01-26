class Utils {
  static uuid() {
    return '_' + Math.random().toString(36).substring(2, 11)
  }
}

export default Utils
