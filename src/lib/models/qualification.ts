export default interface Qualification {
  name: string;
  title: string;
  date: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  link: string;
}