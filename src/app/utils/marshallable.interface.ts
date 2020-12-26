export interface Marshallable {
  toObject(): {[key: string]: any}
}
