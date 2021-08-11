export default interface HomeCardProps {
  weather?: [
    {
      icon?: string;
    }
  ]
  main?: {
    temp?: number;
  }
  sys?: {
    country?: string;
  }
  name?: string;
}
